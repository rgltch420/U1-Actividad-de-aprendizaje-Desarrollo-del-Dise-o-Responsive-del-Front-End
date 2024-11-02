// backend/routes/productRoutes.js
const express = require('express');
const { getProducts, addProduct } = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getProducts);
router.post('/', authMiddleware, addProduct); // Solo usuarios autenticados pueden agregar productos

module.exports = router;
