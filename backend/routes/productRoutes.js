const express = require('express');
const router = express.Router();

// Lista de productos (puedes mover esto a un archivo separado si crece demasiado)
const products = [
    { id: 1, name: "Producto 1", category: "General", price: 10.0, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Producto 2", category: "General", price: 20.0, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Producto 3", category: "General", price: 20.0, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Producto 4", category: "General", price: 20.0, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Producto 5", category: "General", price: 20.0, image: "https://via.placeholder.com/150" },
];

// Obtener todos los productos
router.get('/', (req, res) => {
    res.json(products);
});

// Obtener un producto por ID
router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Producto no encontrado" });
    }
});

module.exports = router;
