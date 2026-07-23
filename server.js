import http from "node:http";
import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

const port = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
    try {
        const absolutePath = path.join(__dirname, "index.html");

        console.log(absolutePath);

        const content = await fs.readFile(absolutePath, "utf8");

        res.writeHead(200, {
            "Content-Type": "text/html",
        });

        res.end(content);
    } catch (err) {
        console.error(err);

        res.writeHead(500, {
            "Content-Type": "text/plain",
        });

        res.end("Internal Server Error");
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// console.log(import.meta.url); process.CWD for current working directory (import.meta.dirname0)