"use strict";

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      use_in_menu: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      price_with_discount: {
        type: DataTypes.FLOAT,
      },
    },
    {
      tableName: "products",
      underscored: true,
      timestamps: true,
    }
  );

  // RELACIONAMENTO MANY-TO-MANY COM CATEGORY
 Product.associate = (models) => {
  Product.belongsToMany(models.Category, {
    through: models.ProductCategory,
    foreignKey: "product_id",
    otherKey: "category_id",
    as: "categories",
  });
};

  return Product;
};