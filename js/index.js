// Array para almacenar los productos del carrito
let cart = [];

// Obtener los botones de agregar al carrito y la sección del carrito
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsContainer = document.querySelector('.cart-items');

// Obtener los elementos del modal
const lunarModal = document.getElementById('lunarModal');
const modalMessage = document.getElementById('modalMessage');
const continueShoppingButton = document.getElementById('continueShopping');
const goToCartButton = document.getElementById('goToCart');

// Comprobar si estamos en la página del carrito
const isCartPage = window.location.pathname.includes('cart.html');

// Cargar el carrito desde el localStorage al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (isCartPage) {
        updateCartPage(); // Actualizar el carrito solo en la página del carrito
    }
});

// Añadir funcionalidad a los botones de agregar al carrito
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.parentElement;
        const productName = product.querySelector('h3').textContent;
        const productPrice = product.querySelector('p').textContent;

        // Añadir producto al carrito
        cart.push({ name: productName, price: productPrice });
        // Guardar el carrito en localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Mostrar el modal con la fase lunar y el mensaje
        showLunarModal(productName);
    });
});

// Función para mostrar el modal con la animación y el mensaje personalizado
function showLunarModal(productName) {
    // Mensaje personalizado
    modalMessage.textContent = `${productName} se ha añadido correctamente al carrito. ¿Desea seguir comprando?`;
    
    // Mostrar el modal
    lunarModal.style.display = 'block';

    // Escuchar el botón de "Seguir comprando"
    continueShoppingButton.addEventListener('click', () => {
        lunarModal.style.display = 'none';
    });

    // Escuchar el botón de "Ir al carrito"
    goToCartButton.addEventListener('click', () => {
        window.location.href = 'cart.html'; // Redirigir a la página del carrito
    });
}

// Función para actualizar el contenido del carrito en la página del carrito
function updateCartPage() {
    cartItemsContainer.innerHTML = ''; // Limpiar el carrito

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>No hay productos en el carrito.</p>';
        return;
    }

    // Mostrar cada producto en el carrito
    cart.forEach((product, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${product.name} - ${product.price}</p>
            <button class="remove-from-cart" data-index="${index}">Eliminar</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Añadir funcionalidad a los botones de eliminar
    const removeButtons = document.querySelectorAll('.remove-from-cart');
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            cart.splice(index, 1); // Eliminar producto del carrito
            localStorage.setItem('cart', JSON.stringify(cart)); // Actualizar en localStorage
            updateCartPage(); // Actualizar el carrito en la página del carrito
        });
    });
}
