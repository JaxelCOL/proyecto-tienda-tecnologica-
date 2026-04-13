function totalInventario(productos){
    return productos.reduce((acc,p) => acc + (p.precio * p.stock),0);
    
}