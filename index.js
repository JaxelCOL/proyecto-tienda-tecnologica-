

function mostrarProductos(productos) {
    return productos.map(p => `<p>${p.nombre} - $${p.precio}</p>`).join("");
}

function stockBajo(productos) { 
    return productos.filter(p => p.stock < 5 && p.stock > 0); 
} 

function agotados(productos) { 
    return productos.filter(p => p.stock === 0); 
} 

function listaPrecios(productos) { 
    return productos.map(p => `${p.nombre}: ${p.precio}`); 
} 

function clasificarPrecio (producto) {
    switch (true){
        case producto.precio < 50000:
            return "Economico";
        case producto.precio <= 200000:
            return "Medio";
        default:
            return "Alto";
    }
}


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


function hayAgotados(productos){
    return productos.some(p=>p.stock===0)
}
function todosConStock(productos) {
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

