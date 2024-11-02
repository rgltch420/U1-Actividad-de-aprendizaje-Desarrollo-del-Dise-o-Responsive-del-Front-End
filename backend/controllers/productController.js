// backend/controllers/productController.js
const { Product } = require('../models');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const product = await Product.create({ name, price, description });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar producto' });
  }
};
