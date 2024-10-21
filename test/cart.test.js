import { expect } from 'chai';
import { cart, updateCart } from '../js/cart.js';

describe('Carrito', function() {
    it('debería agregar un producto correctamente', function() {
        // Añadir un producto al carrito para testear
        cart.push({ name: 'Producto de Prueba', price: '$10.00' });
        updateCart();

        // Verificar si el carrito contiene el producto añadido
        expect(cart).to.deep.include({ name: 'Producto de Prueba', price: '$10.00' });
    });
});
