function mostrarProductos(productos) {
    return productos.map(p => `<p>${p.nombre} - $${p.precio}</p>`).join("");
}

function stockBajo(productos) { 
    return productos
        .filter(p => p.stock < 5 && p.stock > 0)
        .map(p => `<p>${p.nombre} - Stock: ${p.stock}</p>`)
        .join("");
} 

function agotados(productos) { 
    return productos
        .filter(p => p.stock === 0)
        .map(p => `<p>${p.nombre} - AGOTADO</p>`)
        .join("");
} 

function listaPrecios(productos) { 
    return productos
        .map(p => `<p>${p.nombre}: ${p.precio}</p>`)
        .join("");
} 

function clasificarPrecio(producto) {
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
    return productos.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
}

function hayAgotados(productos){
    return productos.some(p => p.stock === 0);
}

function todosConStock(productos) {
    return productos.every(p => p.stock > 0);
}

function masVendido(productos) {
    return [...productos].sort((a, b) => b.ventas - a.ventas)[0];
}
function productoMasCaro(productos) {
    return [...productos].sort((a, b) => b.precio - a.precio)[0];
}

function productoMasBarato(productos) {
    return [...productos].sort((a, b) => a.precio - b.precio)[0];
}

function cantidadAgotados(productos) {
    return productos.filter(p => p.stock === 0).length;
}

function combinacion1(productos) {
    return productos
        .filter(p => p.stock > 0)
        .sort((a, b) => a.precio - b.precio)
        .map(p => `<p>${p.nombre} - $${p.precio}</p>`)
        .join("");
}

function combinacion2(productos) {
    return productos
        .filter(p => p.stock === 0)
        .map(p => `<p>Reabastecer: ${p.nombre}</p>`)
        .join("");
}

function valorVentaTotal(productos) {
    return productos.reduce((acc, p) => acc + (p.precio * p.ventas), 0);
}


// DATOS
const productos = [ 
    { id: 1, nombre: "Mouse", categoria: "Periferico", precio: 50000, stock: 10, ventas: 12 },
    { id: 2, nombre: "Teclado", categoria: "Periferico", precio: 120000, stock: 5, ventas: 7 },
    { id: 3, nombre: "Monitor", categoria: "Pantalla", precio: 800000, stock: 2, ventas: 4 }, 
    { id: 4, nombre: "USB", categoria: "Accesorio", precio: 30000, stock: 0, ventas: 15 },
    { id: 5, nombre: "Diadema", categoria: "Audio", precio: 90000, stock: 8, ventas: 6 } 
];


// CORREGIDO
const resultado = document.getElementById("resultado");


function mostrarReporte() {

    const masVendidoProd = masVendido(productos);
    const caro = productoMasCaro(productos);
    const barato = productoMasBarato(productos);

    resultado.innerHTML = `
        <h3>REPORTE FINAL</h3>

        <p>Producto más caro: ${caro.nombre}</p>
        <p>Producto más barato: ${barato.nombre}</p>
        <p> Producto más vendido: ${masVendidoProd.nombre}</p>

        <p>Valor total inventario: $${totalInventario(productos)}</p>
        <p>Total unidades vendidas: ${totalVentas(productos)}</p>
        <p>Productos agotados: ${cantidadAgotados(productos)}</p>
    `;
}

// MENU
function menu () {

    let opcion = ""; // iniciar valor

    while (opcion !== "0") {
        opcion = prompt(
            "1. Productos\n2. Stock bajo\n3. Agotados\n4. Reporte\n0. Salir"
        );

        if (opcion === null) return; // cancela prompt

        switch(opcion) {
            case "1":
                resultado.innerHTML = mostrarProductos(productos);
            break;

            case "2":
                resultado.innerHTML = stockBajo(productos);
            break;

            case "3":
                resultado.innerHTML = agotados(productos);
            break;
            
            case "4":
                mostrarReporte();
            break;

            case "0":
                resultado.innerHTML = "<p>Saliendo...</p>";
            break;

            default:
                alert("Opción inválida");
        }
    }
}