const express = require('express');
const router = express.Router();

// Simulación de usuarios registrados
const users = [
    { id: 1, name: "Usuario 1", email: "usuario1@example.com", password: "123456" },
    { id: 2, name: "Usuario 2", email: "usuario2@example.com", password: "abcdef" },
];

// Inicio de sesión (simulado)
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        res.json({ message: "Inicio de sesión exitoso", user });
    } else {
        res.status(401).json({ message: "Credenciales incorrectas" });
    }
});

// Registro de usuario (simulado)
router.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    const userExists = users.some(u => u.email === email);

    if (userExists) {
        res.status(400).json({ message: "El correo ya está registrado" });
    } else {
        const newUser = { id: users.length + 1, name, email, password };
        users.push(newUser);
        res.status(201).json({ message: "Usuario registrado con éxito", user: newUser });
    }
});

module.exports = router;
