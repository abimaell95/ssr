// server.js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Que hay! Ronaldo Pro Server Side Rendering!</h1>");
});

app.listen(port, () => {
  console.log(`Servidor  dandole como a rata en ruta http://localhost:${port}`);
});
