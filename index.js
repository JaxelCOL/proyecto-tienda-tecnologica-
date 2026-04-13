function hayAgotados(productos){
    return productos.some(p=>p.stock===0)
}
