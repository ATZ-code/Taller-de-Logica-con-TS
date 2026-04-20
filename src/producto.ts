class Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;

  constructor(id: number, nombre: string, precio: number, stock: number) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

class Inventario {
  productos: Producto[] = [];

  
  agregarProducto(producto: Producto): void {
    
    if (this.productos.some(p => p.id === producto.id)) {
      console.log("❌ Ya existe un producto con ese ID");
      return;
    }

    this.productos.push(producto);
    console.log("✅ Producto agregado:", producto.nombre);
  }

  
  buscarPorNombre(nombre: string): Producto[] {
    return this.productos.filter(p =>
      p.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
  }

  
  listarProductos(): Producto[] {
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