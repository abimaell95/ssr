const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Que tal, Aqui Ronaldo Pro desde ESPOL Bootcamps 2024. </h1>");
});

app.listen(port, () => {
  console.log(`Servidor dandole como a rata en ruta http:localhost:${port}`);
});
