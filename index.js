const http = require("http");
const fs = require("fs");

const resolveRoute = (basePath, requestUrl) => {
  const fileMap = {
    "/": "index.html",
    "/about": "about.html",
    "/contact-me": "contact-me.html",
  };

  const fileName = fileMap[requestUrl] || "/404.html";

  const status = Object.hasOwn(fileMap, requestUrl) ? 200 : 404;

  return { filePath: basePath + fileName, status };
};

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  const { filePath, status } = resolveRoute("./views/", req.url);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.statusCode = status;
      res.end(data);
    }
  });
});

server.listen(8080, () => {
  console.log("J'écoute sur 8080.");
});
