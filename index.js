// Array para almacenar los productos del carrito
let cart = [];

// Obtener los botones de agregar al carrito y la sección del carrito
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
    const removeButtons = document.querySelectorAll('.remove-from-cart');
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            cart.splice(index, 1); // Eliminar producto del carrito
            updateCart(); // Actualizar el carrito
        });
    });
}

// Efecto animado para el submenú
const submenus = document.querySelectorAll('.submenu');

submenus.forEach(submenu => {
    submenu.style.display = 'none'; // Ocultar submenú al principio

    const parent = submenu.parentElement;

    parent.addEventListener('mouseenter', () => {
        submenu.style.display = 'block';
        submenu.style.opacity = '0';
        submenu.style.transition = 'opacity 0.3s ease-in';
        submenu.style.opacity = '1';
    });

    parent.addEventListener('mouseleave', () => {
        submenu.style.opacity = '0';
        setTimeout(() => {
            submenu.style.display = 'none';
        }, 300);
    });
});
