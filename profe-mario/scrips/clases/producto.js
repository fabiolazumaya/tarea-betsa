export default class Producto{ 
    constructor(nombre, imagen, precio){
        this.nombre = nombre
        this.imagen = imagen
        this.precio = precio 
    }
    //geter y seter buena practica para la seguridad
    getNombre(){
        return this.nombre
    }
    getImagen(){
        return this.imagen
    }
    getPrecio(){
        return this.precio
    }


    setNombre(nombre){
        this.nombre = nombre
    }
    setImagen(imagen){
        this.imagen = imagen
    }
    setNombre(precio){
        this.precio = precio 
    }
}