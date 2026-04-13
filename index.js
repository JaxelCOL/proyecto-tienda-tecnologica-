
function totalInventario(productos) {
 return productos.reduce((acc, p) => acc + (p.precio * p.stock), 0);
}

function totalVentas(productos) {
 return productos.reduce((acc, p) => acc + p.ventas, 0);
}

function ordenarPorPrecio(productos) {
 return [...productos].sort((a, b) => a.precio - b.precio);
}

function buscarProducto(productos, nombre) {
 return productos.find(p => p.nombre === nombre);
}

