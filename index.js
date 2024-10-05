// Array para almacenar los productos del carrito
let cart = [];

// Obtener los botones de agregar al carrito
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsContainer = document.querySelector('.cart-items');

// Añadir funcionalidad a los botones de agregar al carrito
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.parentElement;
        const productName = product.querySelector('h3').textContent;
        const productPrice = product.querySelector('p').textContent;

        // Añadir producto al carrito
        cart.push({ name: productName, price: productPrice });
        updateCart();
    });
});

// Función para actualizar el contenido del carrito
function updateCart() {
    cartItemsContainer.innerHTML = ''; // Limpiar el carrito

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>No hay productos en el carrito.</p>';
        return;
    }

    // Mostrar cada producto en el carrito
    cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${product.name} - ${product.price}</p>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
}
