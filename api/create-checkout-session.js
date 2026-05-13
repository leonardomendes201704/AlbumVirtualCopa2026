const Stripe = require("stripe");

const CREDIT_PRODUCTS = {
  100: { name: "100 creditos", unitAmount: 490 },
  300: { name: "300 creditos", unitAmount: 1290 },
  700: { name: "700 creditos", unitAmount: 2490 },
};

function getAppUrl(req) {
  if (process.env.APP_URL) return process.env.APP_URL;

  const protocol = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers.host;
  return `${protocol}://${host}`;
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    res.status(500).json({ error: "STRIPE_SECRET_KEY nao configurada." });
    return;
  }

  const { credits } = req.body || {};
  const product = CREDIT_PRODUCTS[Number(credits)];

  if (!product) {
    res.status(400).json({ error: "Pacote de creditos invalido." });
    return;
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const appUrl = getAppUrl(req);

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "brl",
          product_data: {
            name: product.name,
            metadata: {
              credits: String(credits),
            },
          },
          unit_amount: product.unitAmount,
        },
      },
    ],
    metadata: {
      credits: String(credits),
    },
    success_url: `${appUrl}/?checkout=success&credits=${credits}`,
    cancel_url: `${appUrl}/?checkout=cancel`,
  });

  res.status(200).json({ url: session.url });
};
