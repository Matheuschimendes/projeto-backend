const db = require("../models");

class CategoryController {
  async index(req, res) {
    try {
      const categories = await db.Category.findAll();
      return res.status(200).json(categories);
    } catch (error) {
      console.error("Erro ao listar categorias:", error);
      return res.status(500).json({ message: "Erro ao listar categorias." });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const category = await db.Category.findByPk(id);

      if (!category) {
        return res.status(404).json({ message: "Categoria não encontrada." });
      }

      return res.status(200).json(category);
    } catch (error) {
      console.error("Erro ao buscar categoria:", error);
      return res.status(500).json({ message: "Erro ao buscar categoria." });
    }
  }

  async store(req, res) {
    try {
      const { name, slug, use_in_menu } = req.body;

      const categoryExists = await db.Category.findOne({ where: { slug } });

      if (categoryExists) {
        return res.status(400).json({ message: "Slug já cadastrada." });
      }

      const category = await db.Category.create({
        name,
        slug,
        use_in_menu,
      });

      return res.status(201).json(category);
    } catch (error) {
      console.error("Erro ao criar categoria:", error);
      return res.status(500).json({ message: "Erro ao criar categoria." });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, slug, use_in_menu } = req.body;

      const category = await db.Category.findByPk(id);

      if (!category) {
        return res.status(404).json({ message: "Categoria não encontrada." });
      }

      await category.update({
        name,
        slug,
        use_in_menu,
      });

      return res.status(200).json({
        message: "Categoria atualizada com sucesso.",
      });
    } catch (error) {
      console.error("Erro ao atualizar categoria:", error);
      return res.status(500).json({ message: "Erro ao atualizar categoria." });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const category = await db.Category.findByPk(id);

      if (!category) {
        return res.status(404).json({ message: "Categoria não encontrada." });
      }

      await category.destroy();

      return res.status(204).send();
    } catch (error) {
      console.error("Erro ao remover categoria:", error);
      return res.status(500).json({ message: "Erro ao remover categoria." });
    }
  }
}

module.exports = new CategoryController();