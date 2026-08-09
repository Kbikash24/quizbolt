const store = require("../../../lib/storage");

function getKeyParam(rawKey) {
  if (Array.isArray(rawKey)) {
    return rawKey.join("/");
  }
  return rawKey;
}

export default async function handler(req, res) {
  const key = getKeyParam(req.query.key);

  if (!key) {
    res.status(400).json({ error: "missing key" });
    return;
  }

  if (req.method === "GET") {
    const value = await store.get(key);
    if (value == null) {
      res.status(404).json({ error: "not found" });
      return;
    }
    res.status(200).json({ key, value });
    return;
  }

  if (req.method === "POST") {
    const body = req.body && typeof req.body === "object" ? req.body : {};
    await store.set(key, body.value);
    res.status(200).json({ key, value: body.value });
    return;
  }

  if (req.method === "DELETE") {
    await store.del(key);
    res.status(200).json({ key, deleted: true });
    return;
  }

  res.status(405).json({ error: "method not allowed" });
}
