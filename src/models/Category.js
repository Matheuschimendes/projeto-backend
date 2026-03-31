"use strict";

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
    },
    {
      tableName: "categories",
      underscored: true,
      timestamps: true,
    }
  );

Category.associate = (models) => {
  Category.belongsToMany(models.Product, {
    through: models.ProductCategory,
    foreignKey: "category_id",
    otherKey: "product_id",
    as: "products",
  });
};

  return Category;
};