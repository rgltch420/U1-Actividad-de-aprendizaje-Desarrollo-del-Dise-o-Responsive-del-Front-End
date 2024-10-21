// Array para almacenar los productos del carrito
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Elementos del DOM
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsContainer = document.querySelector('.cart-items');
const lunarModal = document.getElementById('lunarModal');
const modalMessage = document.getElementById('modalMessage');
const continueShoppingButton = document.getElementById('continueShopping');
const goToCartButton = document.getElementById('goToCart');
const carousel = document.querySelector('.product-carousel'); // Asegúrate de que este selector es correcto
const leftButton = document.querySelector('.carousel-control.left');
const rightButton = document.querySelector('.carousel-control.right');

// Verificar si estamos en la página del carrito
const isCartPage = window.location.pathname.includes('cart.html');

// Al cargar la página, actualizamos el carrito si estamos en la página del carrito
document.addEventListener('DOMContentLoaded', () => {
    if (isCartPage) {
        updateCartPage();
    }
    setupCarouselControls(); // Configurar controles del carrusel
});

// Función para agregar producto al carrito
function addProductToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    saveCartToLocalStorage();
    showLunarModal(productName);
}

// Función para guardar el carrito en localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Añadir funcionalidad a los botones de agregar al carrito
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.parentElement;
        const productName = product.querySelector('h3').textContent;
        const productPrice = product.querySelector('p').textContent;
        addProductToCart(productName, productPrice);
    });
});

// Función para mostrar el modal con la animación y el mensaje personalizado
function showLunarModal(productName) {
    modalMessage.textContent = `${productName} se ha añadido correctamente al carrito. ¿Desea seguir comprando?`;
    lunarModal.style.display = 'block';
}

// Ocultar el modal cuando el usuario elige continuar comprando
continueShoppingButton.addEventListener('click', () => {
    lunarModal.style.display = 'none';
});

// Redirigir al carrito cuando el usuario elige "Ir al carrito"
goToCartButton.addEventListener('click', () => {
    window.location.href = 'cart.html';
});

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
    enableRemoveButtons();
}

// Función para habilitar los botones de eliminación de productos del carrito
function enableRemoveButtons() {
    const removeButtons = document.querySelectorAll('.remove-from-cart');
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            removeProductFromCart(index);
        });
    });
}

// Configurar los controles del carrusel
function setupCarouselControls() {
    let scrollAmount = 0;

    rightButton.addEventListener('click', () => {
        if (scrollAmount <= carousel.scrollWidth - carousel.clientWidth) {
            carousel.scrollTo({
                top: 0,
                left: (scrollAmount += carousel.clientWidth / 2),
                behavior: 'smooth'
            });
        }
    });

    leftButton.addEventListener('click', () => {
        if (scrollAmount > 0) {
            carousel.scrollTo({
                top: 0,
                left: (scrollAmount -= carousel.clientWidth / 2),
                behavior: 'smooth'
            });
        }
    });
}
