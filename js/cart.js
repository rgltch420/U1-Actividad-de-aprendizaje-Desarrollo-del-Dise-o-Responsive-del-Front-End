// Array para almacenar los productos del carrito
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Obtener elementos del DOM
const cartItemsContainer = document.querySelector('.cart-items');
const totalPriceContainer = document.getElementById('total-price');

// Actualizar el contenido del carrito
function updateCart() {
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>No hay productos en el carrito.</p>';
    } else {
        cart.forEach((product, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${product.name} - ${product.price}</p>
                <button class="remove-from-cart" data-index="${index}">Eliminar</button>
            `;
            cartItemsContainer.appendChild(cartItem);
            totalPrice += parseFloat(product.price.replace('$', ''));
        });
    }

    totalPriceContainer.textContent = `$${totalPrice.toFixed(2)}`;
}

// Eliminar producto del carrito
cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-from-cart')) {
        const index = e.target.dataset.index;
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }
});

// Inicializar el carrito
document.addEventListener("DOMContentLoaded", updateCart);
