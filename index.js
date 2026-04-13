


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


const productos = [ 
    { id: 1, nombre: "Mouse", categoria: "Periferico", precio: 50000,stock: 10, ventas: 12 },
    { id: 2, nombre: "Teclado", categoria: "Periferico", precio: 120000, stock: 5, ventas: 7 },
    { id: 3, nombre: "Monitor", categoria: "Pantalla", precio: 800000, stock: 2, ventas: 4 }, 
    { id: 4, nombre: "USB", categoria: "Accesorio", precio: 30000, stock: 0, ventas: 15 },
     { id: 5, nombre: "Diadema", categoria: "Audio", precio: 90000, stock: 8, ventas: 6 } 
];

const resultado = document.getElementByID("resultado")

// MENU (While + switch)

function menu () {

    let opcion;

    while (opcion !== "0") {
        opcion = prompt("1. Productos, 2. Stock bajo, 3. Agotados, 4. Reporte, 0. Salir");

        switch(opcion) {
            case "1":
                resultado.innerHTML = mostrarProductos(Productos);
            break;

            case "2":
                resultado.innerHTML = stockBajo(Productos);
            break;

            case "3":
                resultado.innerHTML = agotados(Productos);
            break;
            
            case "4":
                mostrarReporte();
            break;

            case "0":
                resultado.innerHTML = "<p>Saliendo...</p>"
            break;
        }
    }
}
