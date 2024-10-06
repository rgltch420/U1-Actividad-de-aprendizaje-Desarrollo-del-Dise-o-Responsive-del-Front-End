// Array para almacenar los productos del carrito, si existe en localStorage se utiliza
let cart = JSON.parse(localStorage.getItem('cart')) || [];

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
    const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');
    removeFromCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            cart.splice(index, 1);  // Eliminar producto del carrito
            updateCart();  // Actualizar el carrito
        });
    });

    // Guardar carrito en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Llamar a updateCart al cargar la página para que los productos persistan
updateCart();
