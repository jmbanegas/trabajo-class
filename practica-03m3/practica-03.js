'use strict';

class Product {
    constructor(description, price, stock) {
        this.description = description;
        this.price = price;
        this.stock = stock;
    }

    // Método para mostrar la información del producto
    showInfo() {
         alert(`Descripción: ${this.description}, Precio: $${this.price}, Stock: ${this.stock}`);
    }

    // Método para disminuir el stock
    minusStock(amount) {
        if (amount > this.stock) {
            alert("No hay suficiente stock para realizar la operación.");
        } else {
            this.stock -= amount;
            alert(`Stock disminuido en ${amount}. Stock actual: ${this.stock}.`);
        }
    }

    // Método para incrementar el stock
    incrementStock(amount) {
        this.stock += amount;
        alert(`Stock incrementado en ${amount}. Stock actual: ${this.stock}.`);
    }

    // Método para actualizar el precio
    updatePrice(newPrice) {
        this.price = newPrice;
        alert(`Precio actualizado a $${this.price}.`);
    }
}

// Uso de ejemplo:
let product = new Product('Producto Ejemplo', 12, 200);
product.showInfo(); // Muestra los detalles iniciales del producto
product.minusStock(8); // Disminuye el stock en 5 unidades
product.incrementStock(9); // Incrementa el stock en 10 unidades
product.updatePrice(9.99); // Actualiza el precio a 12.99
product.showInfo(); // Muestra los detalles actualizados del producto