// backend/models/Product.js
module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
    const Product = sequelize.define('Product', {
      name: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.FLOAT, allowNull: false },
      description: { type: DataTypes.STRING },
    });
    return Product;
  };
  