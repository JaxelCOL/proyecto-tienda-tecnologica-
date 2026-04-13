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