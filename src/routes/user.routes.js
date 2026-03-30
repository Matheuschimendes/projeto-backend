const { Router } = require("express");

const router = Router();

router.get("/:id", (req, res) => {
  return res.status(200).json({ message: `Buscar usuário ${req.params.id}` });
});

router.post("/", (req, res) => {
  return res.status(201).json({ message: "Usuário criado com sucesso" });
});

router.put("/:id", (req, res) => {
  return res.status(204).send();
});

router.delete("/:id", (req, res) => {
  return res.status(204).send();
});

router.post("/token", (req, res) => {
  return res.status(200).json({ token: "token-exemplo" });
});

module.exports = router;