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