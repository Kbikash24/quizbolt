// QuizBolt local server — no npm install needed, just Node.js.
// Serves the game page and provides a tiny in-memory key-value
// store (over HTTP) that stands in for Claude's window.storage,
// so everyone on your Wi-Fi/LAN can join the same game.

const http = require("http");
const fs = require("fs");
const path = require("path");
const os = require("os");
const url = require("url");

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, "public");
const store = new Map();

function sendJson(res, status, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(status, {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(body)
  });
  res.end(body);
}

function serveStatic(req, res, pathname) {
  const safePath = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.join(PUBLIC_DIR, safePath);
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    return res.end("Forbidden");
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      return res.end("Not found");
    }
    const ext = path.extname(filePath);
    const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css" };
    res.writeHead(200, { "Content-Type": types[ext] || "application/octet-stream" });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);
  const pathname = parsed.pathname;

  if (pathname === "/api/storage" && req.method === "GET") {
    const prefix = parsed.query.prefix || "";
    const keys = Array.from(store.keys()).filter((k) => k.startsWith(prefix));
    return sendJson(res, 200, { keys });
  }

  if (pathname.startsWith("/api/storage/")) {
    const key = decodeURIComponent(pathname.slice("/api/storage/".length));

    if (req.method === "GET") {
      if (store.has(key)) return sendJson(res, 200, { key, value: store.get(key) });
      return sendJson(res, 404, { error: "not found" });
    }

    if (req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", () => {
        try {
          const parsedBody = JSON.parse(body);
          store.set(key, parsedBody.value);
          sendJson(res, 200, { key, value: parsedBody.value });
        } catch (e) {
          sendJson(res, 400, { error: "bad request" });
        }
      });
      return;
    }

    if (req.method === "DELETE") {
      store.delete(key);
      return sendJson(res, 200, { key, deleted: true });
    }

    return sendJson(res, 405, { error: "method not allowed" });
  }

  serveStatic(req, res, pathname);
});

server.listen(PORT, () => {
  console.log("");
  console.log("  QuizBolt is running!");
  console.log("  ---------------------------------------------");
  console.log("  On this computer:  http://localhost:" + PORT);

  const nets = os.networkInterfaces();
  Object.values(nets).flat().forEach((net) => {
    if (net && net.family === "IPv4" && !net.internal) {
      console.log("  On your network:   http://" + net.address + ":" + PORT);
    }
  });

  console.log("  ---------------------------------------------");
  console.log("  Share the 'On your network' link with players");
  console.log("  on the same Wi-Fi. Press Ctrl+C to stop.");
  console.log("");
});
