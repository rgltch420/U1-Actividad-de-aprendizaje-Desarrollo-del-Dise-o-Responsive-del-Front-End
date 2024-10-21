// test/cart.test.js
import { expect } from 'chai';
import { Cart } from '../js/cart.js'; // Asegúrate de que la ruta es correcta

describe('Carrito', function() {
    let cart;

    beforeEach(() => {
        // Configurar el entorno del DOM o mock necesario
        cart = new Cart();
        // Asegúrate de mockear las dependencias como localStorage y los elementos del DOM
    });

    it('debería añadir un producto correctamente', function() {
        cart.addItem({ name: 'Producto Test', price: '10.00' });
        expect(cart.cart.length).to.equal(1);
    });

    it('debería eliminar un producto correctamente', function() {
        cart.addItem({ name: 'Producto Test', price: '10.00' });
        cart.removeItem(0);
        expect(cart.cart.length).to.equal(0);
    });

    // Más pruebas según sea necesario
});
