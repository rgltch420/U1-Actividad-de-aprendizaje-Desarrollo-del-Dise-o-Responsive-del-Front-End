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

//Agrega funciones para cargar el contenido del carrito y eliminar productos de este.
document.addEventListener("DOMContentLoaded", () => {
    fetch('/api/cart', {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}` // Token JWT
        }
    })
    .then(response => response.json())
    .then(cartItems => displayCartItems(cartItems))
    .catch(error => console.error("Error fetching cart:", error));
});

function displayCartItems(cartItems) {
    const cartItemsContainer = document.querySelector(".cart-items");
    const totalPriceElement = document.getElementById("total-price");
    let total = 0;

    cartItemsContainer.innerHTML = "";
    cartItems.forEach(item => {
        total += item.price;
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price}</span>
            <button class="remove-from-cart" data-id="${item.id}">Eliminar</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    totalPriceElement.textContent = `$${total.toFixed(2)}`;

    document.querySelectorAll(".remove-from-cart").forEach(button => {
        button.addEventListener("click", () => removeFromCart(button.dataset.id));
    });
}

function removeFromCart(productId) {
    fetch('/api/cart/remove', {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({ productId })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        location.reload(); // Recargar la página para actualizar el carrito
    })
    .catch(error => console.error("Error removing from cart:", error));
}


// Inicializar el carrito
updateCart();
