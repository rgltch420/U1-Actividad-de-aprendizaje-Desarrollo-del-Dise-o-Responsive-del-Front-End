document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login-form");
    const loginError = document.querySelector("#login-error");

    const registerModal = document.querySelector("#registerModal");
    const openRegisterModal = document.querySelector("#open-register-modal");
    const closeRegisterModal = document.querySelector("#close-register-modal");
    const registerForm = document.querySelector("#register-form");

    // Lista simulada de usuarios registrados
    const users = [
        { name: "Juan Pérez", email: "juan.perez@example.com", password: "123456" },
        { name: "Ana Gómez", email: "ana.gomez@example.com", password: "password123" }
    ];

    // Abrir el modal de registro
    openRegisterModal.addEventListener("click", (e) => {
        e.preventDefault();
        registerModal.style.display = "block";
    });

    // Cerrar el modal de registro
    closeRegisterModal.addEventListener("click", () => {
        registerModal.style.display = "none";
    });

    // Validar formulario de inicio de sesión
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value.trim();

        // Buscar si el usuario existe
        const user = users.find((u) => u.email === email && u.password === password);

        if (!user) {
            loginError.textContent = "Correo o contraseña incorrectos.";
            loginError.style.display = "block";
        } else {
            loginError.style.display = "none";
            alert(`¡Bienvenido, ${user.name}!`);
            // Aquí puedes redirigir al usuario a otra página
        }
    });

    // Validar formulario de registro
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#register-email").value.trim();
        const password = document.querySelector("#register-password").value.trim();

        // Validar si el correo ya está registrado
        const userExists = users.some((u) => u.email === email);

        if (userExists) {
            alert("El correo ya está registrado. Por favor, inicia sesión.");
        } else {
            // Registrar al nuevo usuario
            users.push({ name, email, password });
            alert("Registro exitoso. Ahora puedes iniciar sesión.");
            registerModal.style.display = "none";
        }
    });

    // Cerrar modal al hacer clic fuera de él
    window.addEventListener("click", (e) => {
        if (e.target === registerModal) {
            registerModal.style.display = "none";
        }
    });
});
