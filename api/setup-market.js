const fs = require("fs");
const path = require("path");
const { Client } = require("pg");

const root = path.join(__dirname, "..");
const marketSqlPath = path.join(root, "supabase", "market.sql");

function getDatabaseUrl() {
  return process.env.SUPABASE_DB_URL || process.env.POSTGRES_URL || process.env.DATABASE_URL || "";
}

function isAuthorized(req) {
  if (process.env.MARKET_AUTO_SETUP === "true") return true;

  const token = process.env.MARKET_SETUP_TOKEN;
  if (!token) return false;

  const headerToken = req.headers["x-setup-token"];
  const url = new URL(req.url, "http://localhost");
  return headerToken === token || url.searchParams.get("token") === token;
}

async function runSetup() {
  const connectionString = getDatabaseUrl();
  if (!connectionString) {
    throw new Error("Configure SUPABASE_DB_URL com a connection string do banco Supabase.");
  }

  const sql = fs.readFileSync(marketSqlPath, "utf8");
  const client = new Client({
    connectionString,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  await client.connect();
  try {
    await client.query(sql);
    await client.query("notify pgrst, 'reload schema'");

    const result = await client.query(`
      select p.proname as function_name
        from pg_proc p
        join pg_namespace n on n.oid = p.pronamespace
       where n.nspname = 'public'
         and p.proname in (
           'sync_user_snapshot',
           'create_market_listing',
           'cancel_market_listing',
           'buy_market_listing',
           'create_trade_listing',
           'create_trade_offer',
           'accept_trade_offer',
           'reject_trade_offer'
         )
       order by p.proname
    `);

    return result.rows.map((row) => row.function_name);
  } finally {
    await client.end();
  }
}

module.exports = async function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({
      ok: true,
      message: "Envie POST para esta rota com x-setup-token ou ative MARKET_AUTO_SETUP=true.",
      hasDatabaseUrl: Boolean(getDatabaseUrl()),
      autoSetup: process.env.MARKET_AUTO_SETUP === "true",
    });
    return;
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (!isAuthorized(req)) {
    res.status(401).json({ error: "Setup nao autorizado. Configure MARKET_SETUP_TOKEN ou MARKET_AUTO_SETUP=true." });
    return;
  }

  try {
    const functions = await runSetup();
    res.status(200).json({
      ok: true,
      message: "Mercado configurado. Schema cache recarregado.",
      functions,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: error.message,
    });
  }
};
