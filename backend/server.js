const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const productRoutes = require('./routes/productRoutes'); // Rutas para productos
const authRoutes = require('./routes/authRoutes'); // Rutas para autenticación

// Configurar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Usa el puerto desde variables de entorno o 5000 por defecto

// Middlewares
app.use(express.json()); // Para manejar JSON en las solicitudes

// Servir archivos estáticos desde la carpeta frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Rutas de API
app.use('/api/products', productRoutes); // Rutas de productos
app.use('/api/auth', authRoutes); // Rutas de autenticación

// Ruta raíz para servir el index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/html/index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
