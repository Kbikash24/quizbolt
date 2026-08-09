const store = require("../../../lib/storage");

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "method not allowed" });
    return;
  }

  const prefix = typeof req.query.prefix === "string" ? req.query.prefix : "";
  const keys = await store.list(prefix);
  res.status(200).json({ keys });
}
