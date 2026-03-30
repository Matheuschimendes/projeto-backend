const { Router } = require("express");

const router = Router();

router.get("/search", (req, res) => {
  return res.status(200).json({ message: "Listagem de categorias" });
});

router.get("/:id", (req, res) => {
  return res.status(200).json({ message: `Buscar categoria ${req.params.id}` });
});

router.post("/", (req, res) => {
  return res.status(201).json({ message: "Categoria criada com sucesso" });
});

router.put("/:id", (req, res) => {
  return res.status(204).send();
});

router.delete("/:id", (req, res) => {
  return res.status(204).send();
});

module.exports = router;