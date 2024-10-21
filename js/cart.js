// Exportamos la variable cart para poder usarla en las pruebas
export let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Obtener elementos del DOM
const cartItemsContainer = document.querySelector('.cart-items');
const totalPriceContainer = document.getElementById('total-price');

// Función para actualizar el contenido del carrito
export function updateCart() {
    cartItemsContainer.innerHTML = ''; // Limpiar el carrito
    let totalPrice = 0; // Variable para el total

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>No hay productos en el carrito.</p>';
    } else {
        // Mostrar cada producto en el carrito
        cart.forEach((product, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${product.name} - ${product.price}</p>
                <button class="remove-from-cart" data-index="${index}">Eliminar</button>
            `;
            cartItemsContainer.appendChild(cartItem);
            totalPrice += parseFloat(product.price.replace('$', '')); // Sumar al total
        });
    }

    totalPriceContainer.textContent = `$${totalPrice.toFixed(2)}`; // Actualizar total
}

// Añadir funcionalidad para eliminar productos
cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-from-cart')) {
        const index = e.target.dataset.index; // Obtener el índice
        cart.splice(index, 1); // Eliminar producto del carrito
        localStorage.setItem('cart', JSON.stringify(cart)); // Actualizar el almacenamiento local
        updateCart(); // Volver a actualizar el carrito
    }
});

// Inicializar el carrito
updateCart();
