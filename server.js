const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 5183);
const host = "127.0.0.1";

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".json": "application/json; charset=utf-8",
};

async function runLocalMarketSetup(req, res) {
  try {
    const handler = require("./api/setup-market");
    await handler(req, {
      setHeader: (key, value) => res.setHeader(key, value),
      status: (statusCode) => ({
        json: (body) => send(res, statusCode, JSON.stringify(body), types[".json"]),
      }),
    });
  } catch (error) {
    send(res, 500, JSON.stringify({ ok: false, error: error.message }), types[".json"]);
  }
}

function send(res, status, body, type = "text/plain; charset=utf-8") {
  res.writeHead(status, {
    "Content-Type": type,
    "Cache-Control": "no-store",
  });
  res.end(body);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${host}:${port}`);

  if (url.pathname === "/figurinhas.json") {
    const stickersPath = path.join(root, "Paginas", "Figurinhas");
    fs.readdir(stickersPath, (error, files = []) => {
      const pngs = error
        ? []
        : files
            .filter((file) => file.toLowerCase().endsWith(".png"))
            .sort((a, b) => a.localeCompare(b, "pt-BR", { numeric: true }));
      send(res, 200, JSON.stringify(pngs), types[".json"]);
    });
    return;
  }

  if (url.pathname === "/api/supabase-config") {
    send(
      res,
      200,
      JSON.stringify({
        configured: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY),
        url: process.env.SUPABASE_URL || "",
        anonKey: process.env.SUPABASE_ANON_KEY || "",
      }),
      types[".json"],
    );
    return;
  }

  if (url.pathname === "/api/setup-market") {
    runLocalMarketSetup(req, res);
    return;
  }

  const decodedPath = decodeURIComponent(url.pathname);
  const relativePath = decodedPath === "/" ? "index.html" : decodedPath.slice(1);
  let filePath = path.resolve(root, relativePath);

  if (!filePath.startsWith(root)) {
    send(res, 403, "Forbidden");
    return;
  }

  fs.stat(filePath, (statError, stat) => {
    if (!statError && stat.isDirectory()) {
      filePath = path.join(filePath, "index.html");
      fs.readFile(filePath, (readError, file) => {
        if (readError) {
          send(res, 404, "Not found");
          return;
        }

        res.writeHead(200, {
          "Content-Type": types[".html"],
          "Content-Length": file.length,
          "Cache-Control": "no-store",
        });
        res.end(file);
      });
      return;
    }

    if (statError || !stat.isFile()) {
      const indexPath = path.join(root, relativePath, "index.html");
      fs.readFile(indexPath, (indexError, file) => {
        if (!indexError) {
          res.writeHead(200, {
            "Content-Type": types[".html"],
            "Content-Length": file.length,
            "Cache-Control": "no-store",
          });
          res.end(file);
          return;
        }

        send(res, 404, "Not found");
      });
      return;
    }

    fs.readFile(filePath, (readError, file) => {
      if (readError) {
        send(res, 500, "Read error");
        return;
      }

      res.writeHead(200, {
        "Content-Type": types[path.extname(filePath).toLowerCase()] || "application/octet-stream",
        "Content-Length": file.length,
        "Cache-Control": "no-store",
      });
      res.end(file);
    });
  });
});

server.listen(port, host, () => {
  console.log(`Album Copa em http://${host}:${port}/`);
});
