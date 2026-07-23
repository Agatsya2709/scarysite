import http from 'http';
import path from 'node:path';
import fs from 'fs/promises';
const port = 8000;

const server = http.createServer(async (req, res) => {
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    const absolutepath= path.join(__dirname,'index.html')
    const htmlContent =  await fs.readFile(absolutepath, 'utf8');
    console.log(absolutepath)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
  // res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlContent);
});
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
// console.log(import.meta.url); process.CWD for current working directory (import.meta.dirname0)