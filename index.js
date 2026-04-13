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