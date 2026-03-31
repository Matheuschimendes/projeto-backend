const db = require("../models");

class ProductController {
async index(req, res) {
  try {
    const products = await db.Product.findAll({
      include: [
        {
          model: db.Category,
          as: "categories",
          through: { attributes: [] },
        },
      ],
    });

    return res.status(200).json(products);
  } catch (error) {
    console.error("Erro ao listar produtos:", error);
    return res.status(500).json({ message: "Erro ao listar produtos." });
  }
}

  async show(req, res) {
  try {
    const { id } = req.params;

    const product = await db.Product.findByPk(id, {
      include: [
        {
          model: db.Category,
          as: "categories",
          through: { attributes: [] },
        },
      ],
    });

    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado." });
    }

    return res.status(200).json(product);
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    return res.status(500).json({ message: "Erro ao buscar produto." });
  }
}

  async store(req, res) {
  try {
    const { categories, ...data } = req.body;

    const product = await db.Product.create(data);

    if (categories && categories.length > 0) {
      await product.setCategories(categories);
    }

    const productWithCategories = await db.Product.findByPk(product.id, {
      include: [
        {
          model: db.Category,
          as: "categories",
          through: { attributes: [] },
        },
      ],
    });

    return res.status(201).json(productWithCategories);
  } catch (error) {
    console.error("Erro ao criar produto:", error);
    return res.status(500).json({
      message: "Erro ao criar produto.",
      error: error.message,
    });
  }
}

  async update(req, res) {
    try {
      const { id } = req.params;

      const product = await db.Product.findByPk(id);

      if (!product) {
        return res.status(404).json({ message: "Produto não encontrado." });
      }

      await product.update(req.body);

      return res.status(200).json({ message: "Produto atualizado." });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao atualizar produto." });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const product = await db.Product.findByPk(id);

      if (!product) {
        return res.status(404).json({ message: "Produto não encontrado." });
      }

      await product.destroy();

      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: "Erro ao remover produto." });
    }
  }
}

module.exports = new ProductController();