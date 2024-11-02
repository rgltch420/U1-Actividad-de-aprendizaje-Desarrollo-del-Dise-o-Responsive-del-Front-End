// Array para almacenar los productos del carrito
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Elementos del DOM
const lunarModal = document.getElementById('lunarModal');
const modalMessage = document.getElementById('modalMessage');
const continueShoppingButton = document.getElementById('continueShopping');
const goToCartButton = document.getElementById('goToCart');
const categoryMenu = document.querySelector('nav ul li:nth-child(3)');
const submenu = categoryMenu.querySelector('.submenu');

// Al cargar la página, configuramos los eventos y funcionalidades
document.addEventListener('DOMContentLoaded', () => {
    setupAddToCartButtons();          // Configurar funcionalidad de botones "Agregar al carrito"
    setupCarouselControls();          // Configurar controles del carrusel
    simulateFetchProducts();          // Simula carga de productos desde el servidor para pruebas
    setupCategoryMenu();              // Configurar el menú de categorías
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

// Función para mostrar el modal con la animación y el mensaje personalizado
function showLunarModal(productName) {
    modalMessage.textContent = `${productName} se ha añadido correctamente al carrito. ¿Desea seguir comprando?`;
    lunarModal.style.display = 'block';
}

// Ocultar el modal cuando el usuario elige continuar comprando
continueShoppingButton.addEventListener('click', () => lunarModal.style.display = 'none');

// Redirigir al carrito cuando el usuario elige "Ir al carrito"
goToCartButton.addEventListener('click', () => window.location.href = 'cart.html');

// Configuración del menú de categorías
function setupCategoryMenu() {
    categoryMenu.addEventListener('mouseenter', () => submenu.style.display = 'block');
    categoryMenu.addEventListener('mouseleave', () => submenu.style.display = 'none');
}

// Configurar la funcionalidad de los botones "Agregar al carrito"
function setupAddToCartButtons() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const product = e.target.closest('.product-card');
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.querySelector('p').textContent;
            addProductToCart(productName, productPrice);
        });
    });
}

// Configurar los controles del carrusel para carrusel infinito
function setupCarouselControls() {
    document.querySelectorAll(".product-carousel").forEach(carousel => {
        const productGrid = carousel.querySelector(".product-grid");
        const btnLeft = carousel.querySelector(".carousel-control.left");
        const btnRight = carousel.querySelector(".carousel-control.right");

        // Duplicar el primer y último producto
        const firstChild = productGrid.firstElementChild.cloneNode(true);
        const lastChild = productGrid.lastElementChild.cloneNode(true);
        productGrid.appendChild(firstChild);
        productGrid.insertBefore(lastChild, productGrid.firstElementChild);

        let visibleAreaWidth = carousel.offsetWidth;
        let currentIndex = 1;

        // Inicializamos el carrusel en la primera posición
        productGrid.style.transition = "none";
        productGrid.style.transform = `translateX(-${visibleAreaWidth}px)`;

        // Botón de desplazamiento a la izquierda
        btnLeft.addEventListener("click", () => {
            currentIndex--;
            productGrid.style.transition = "transform 0.5s ease";
            productGrid.style.transform = `translateX(-${visibleAreaWidth * currentIndex}px)`;

            if (currentIndex === 0) {
                setTimeout(() => {
                    productGrid.style.transition = "none";
                    currentIndex = productGrid.children.length - 2; // Saltar al duplicado
                    productGrid.style.transform = `translateX(-${visibleAreaWidth * currentIndex}px)`;
                }, 500);
            }
        });

        // Botón de desplazamiento a la derecha
        btnRight.addEventListener("click", () => {
            currentIndex++;
            productGrid.style.transition = "transform 0.5s ease";
            productGrid.style.transform = `translateX(-${visibleAreaWidth * currentIndex}px)`;

            if (currentIndex === productGrid.children.length - 1) {
                setTimeout(() => {
                    productGrid.style.transition = "none";
                    currentIndex = 1; // Saltar al duplicado
                    productGrid.style.transform = `translateX(-${visibleAreaWidth}px)`;
                }, 500);
            }
        });
    });
}

// Función para simular carga de productos desde el servidor (prueba con más productos)
function simulateFetchProducts() {
    const products = [];
    for (let i = 1; i <= 13; i++) { // Simulamos 13 productos para cada carrusel
        products.push({
            id: i,
            name: `Producto ${i}`,
            price: `$${(10 * i).toFixed(2)}`,
            imageUrl: `https://via.placeholder.com/150`
        });
    }
    displayProducts(products); // Llama a la función para mostrar los productos
}

// Función para mostrar los productos en el carrusel
function displayProducts(products) {
    document.querySelectorAll(".product-grid").forEach(grid => {
        grid.innerHTML = ""; // Limpia los productos existentes en cada carrusel
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}" loading="lazy"/>
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button class="add-to-cart" data-id="${product.id}">Agregar al Carrito</button>
            `;
            grid.appendChild(productCard);
        });
    });

    setupAddToCartButtons(); // Configuramos los eventos para los nuevos botones de "Agregar al carrito"
}
