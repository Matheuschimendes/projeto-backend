const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class AuthController {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await db.User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({ message: "E-mail ou senha inválidos." });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ message: "E-mail ou senha inválidos." });
      }

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
      );

      return res.status(200).json({
        user: {
          id: user.id,
          firstname: user.firstname,
          surname: user.surname,
          email: user.email,
        },
        token,
      });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao realizar login." });
    }
  }
}

module.exports = new AuthController();