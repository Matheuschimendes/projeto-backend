const { Router } = require("express");

const router = Router();

router.get("/search", (req, res) => {
  return res.status(200).json({ message: "Busca de produtos" });
});

router.get("/:id", (req, res) => {
  return res.status(200).json({ message: `Buscar produto ${req.params.id}` });
});

router.post("/", (req, res) => {
  return res.status(201).json({ message: "Produto criado com sucesso" });
});

router.put("/:id", (req, res) => {
  return res.status(204).send();
});

router.delete("/:id", (req, res) => {
  return res.status(204).send();
});

module.exports = router;