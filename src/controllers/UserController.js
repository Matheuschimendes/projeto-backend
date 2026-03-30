const db = require("../models");

class UserController {
  async index(req, res) {
    try {
      const users = await db.User.findAll({
        attributes: { exclude: ["password"] },
      });

      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao listar usuários." });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const user = await db.User.findByPk(id, {
        attributes: { exclude: ["password"] },
      });

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao buscar usuário." });
    }
  }

  async store(req, res) {
    try {
      const { firstname, surname, email, password } = req.body;

      const userExists = await db.User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ message: "E-mail já cadastrado." });
      }

      const user = await db.User.create({
        firstname,
        surname,
        email,
        password,
      });

      return res.status(201).json({
        id: user.id,
        firstname: user.firstname,
        surname: user.surname,
        email: user.email,
      });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao criar usuário." });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { firstname, surname, email, password } = req.body;

      const user = await db.User.findByPk(id);

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }

      await user.update({
        firstname,
        surname,
        email,
        password,
      });

      return res.status(200).json({
        message: "Usuário atualizado com sucesso.",
      });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao atualizar usuário." });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const user = await db.User.findByPk(id);

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }

      await user.destroy();

      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: "Erro ao remover usuário." });
    }
  }
}

module.exports = new UserController();