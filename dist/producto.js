"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Producto {
    id;
    nombre;
    precio;
    stock;
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}
class Inventario {
    productos = [];
    agregarProducto(producto) {
        if (this.productos.some(p => p.id === producto.id)) {
            console.log("❌ Ya existe un producto con ese ID");
            return;
        }
        this.productos.push(producto);
        console.log("✅ Producto agregado:", producto.nombre);
    }
    buscarPorNombre(nombre) {
        return this.productos.filter(p => p.nombre.toLowerCase().includes(nombre.toLowerCase()));
    }
    listarProductos() {
        return this.productos;
    }
}
const inventario = new Inventario();
const p1 = new Producto(1, "Laptop", 2500, 10);
const p2 = new Producto(2, "Mouse", 50, 100);
const p3 = new Producto(3, "Teclado", 120, 50);
inventario.agregarProducto(p1);
inventario.agregarProducto(p2);
inventario.agregarProducto(p3);
inventario.agregarProducto(new Producto(1, "Monitor", 800, 5));
console.log("\n📦 Todos los productos:");
console.log(inventario.listarProductos());
console.log("\n🔍 Buscar 'mouse':");
console.log(inventario.buscarPorNombre("mouse"));
