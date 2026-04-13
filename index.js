function hayAgotados(productos){
    return productos.some(p=>p.stock===0)
}
unction todosConStock(productos) {
 return productos.every(p => p.stock > 0);
}

function masVendido(productos) {
 return [...productos].sort((a, b) => b.ventas - a.ventas)[0];
}

function combinacion1(productos) {
 return productos.filter(p => p.stock > 0).sort((a, b) => a.precio - b.precio);
}

function combinacion2(productos) {
 return productos.filter(p => p.stock === 0).map(p => `Reabastecer: 
${p.nombre}`);
}

function valorVentaTotal(productos) {
 return productos.reduce((acc, p) => acc + (p.precio * p.stock), 0);
}