const fs = require("fs");
const path = require("path");
const { Client } = require("pg");

const root = path.join(__dirname, "..");
const sqlPath = path.join(root, "supabase", "market.sql");

function loadDotenv(fileName) {
  const envPath = path.join(root, fileName);
  if (!fs.existsSync(envPath)) return;

  const content = fs.readFileSync(envPath, "utf8");
  content.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;

    const separator = trimmed.indexOf("=");
    if (separator === -1) return;

    const key = trimmed.slice(0, separator).trim();
    let value = trimmed.slice(separator + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  });
}

function getDatabaseUrl() {
  loadDotenv(".env.local");
  loadDotenv(".env");
  return process.env.SUPABASE_DB_URL || process.env.POSTGRES_URL || process.env.DATABASE_URL || "";
}

async function main() {
  const connectionString = getDatabaseUrl();
  if (!connectionString) {
    throw new Error(
      "Configure SUPABASE_DB_URL em .env.local, .env ou na sessao do terminal antes de rodar a migration.",
    );
  }

  const sql = fs.readFileSync(sqlPath, "utf8");
  const client = new Client({
    connectionString,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  console.log("Conectando ao Supabase...");
  await client.connect();

  try {
    console.log("Executando supabase/market.sql...");
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

    console.log("Migration aplicada com sucesso.");
    console.log("Funcoes instaladas:");
    result.rows.forEach((row) => console.log(`- ${row.function_name}`));
  } finally {
    await client.end();
  }
}

main().catch((error) => {
  console.error(`Erro na migration: ${error.message}`);
  process.exitCode = 1;
});
