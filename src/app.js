const express = require("express");
const cors = require("cors");

const app  = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "API do projeto backend rodando com sucesso!"
  });
});

app.use("/v1", require("./routes"));

module.exports = app;