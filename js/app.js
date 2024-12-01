document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login-form");
    const loginError = document.querySelector("#login-error");

    // Validar formulario de inicio de sesión
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value.trim();

        if (!email.includes("@") || password.length < 6) {
            loginError.textContent = "Por favor, introduce un correo válido y una contraseña de al menos 6 caracteres.";
            loginError.style.display = "block";
        } else {
            loginError.style.display = "none";
            alert("Inicio de sesión exitoso.");
            // Aquí puedes redirigir a otra página o realizar más acciones
        }
    });
});
