const { Router } = require("express");
const AuthController = require("../controllers/AuthController");

const router = Router();

router.post("/token", AuthController.login);

module.exports = router;