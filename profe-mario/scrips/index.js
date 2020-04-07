import Producto from "./clases/producto.js"
const refrigerador = new Producto ("gotcha", "https://image.flaticon.com/icons/svg/188/188921.svg", 90)

const contenedor = document.getElementById("pedido")
const elementoHijo = document.createElement("div")

elementoHijo.innerHTML = `
<img scr="${gotcha.getImagen()}"/>
<h3>${gotcha.getNombre()}</h3>
`
 function agregarProducto(productoSeleccionado, cantidad){

 }
contenedor.appendChild(elementoHijo)