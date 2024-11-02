// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/products', productRoutes); // Rutas para los productos
app.use('/api/auth', authRoutes); // Rutas para autenticación

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
