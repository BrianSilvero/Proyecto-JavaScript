// // Creando tienda de Hunger

// let edad = Number(prompt ("Bienvendio a la tienda de Hunger! \n Que edad tienes?"))

// if(edad >= 13){
//   let resultado = 0;
//   let ticket = "Resumen de la cuenta: \n";
//   let rta = "";
//   function iva(precio){return precio * 0.21
//   }

//   do {
//     let producto= prompt("Ingrese el articulo a comprar").toLowerCase();
//     let precio = Number(prompt("Ingrese precio de producto"));
//     resultado = resultado + precio + iva(precio);
//     ticket = ticket + "\n" + producto + "\t$" + (precio + iva(precio) + "\n -------------");
//     rta = prompt ("Quisiera agregar algo mas al carrito? (Escriba 'Esc' para finalizar compra)").toUpperCase();
//   } while (rta != "ESC");

//   alert(ticket + "\n\nTotal: " + resultado)
// }
// else{
//   alert("Lo sentimos no tienes la edad para comprar");
//   }

// const listaNombres = [];
// let   cantidad     = 5;
// //Empleo de do...while para cargar nombres en el array por prompt()
// do{
//    let entrada = prompt("Ingresar nombre");
//    listaNombres.push(entrada.toUpperCase());
//    console.log(listaNombres.length);
// }while(listaNombres.length != cantidad)
// //Concatenamos un nuevo array de dos elementos
// const nuevaLista = listaNombres.concat(["ANA","EMA"]);
// //Salida con salto de línea usando join
// alert(nuevaLista.join("\n"));


// class Compra {
//   constructor(id_compra,cantidad, producto, precio){
//     this.id_compra = id_compra;
//     this.cantidad = cantidad;
//     this.producto = producto;
//     this.precio = precio;
//     this.comprado = false;
//     this.fecha_de_compra = null;
//   }

//   comprar(fecha_de_compra){
//     this.comprado = true;
//     this.fecha_de_compra = fecha_de_compra;
//   }


//   iva(x){
//     x * 0.21;
//   }
//   descuento_basico(x){
//     x * 0.10;
//   }
//   descuento_intermedio(x){
//     x * 0.25;
//   }
//   descuento_maximo(x){
//     x * 0.35;
//   }
// }

// Compra.prototype.toString = function habitacionToString() {
//   let descripcion =   "N° de Compra: " + this.id_compra+
//                       "\nProducto: "+this.producto+
//                       "\nCantidad: "+this.cantidad+
//                       "\nFecha de compra: "+this.fecha_de_compra+
//                       "\nPrecio: "+this.precio+
//                       "\n"
  
//   return descripcion;
// }

// class Carrito {
//   constructor(){
//     this.listaDeCompra = [];
//   }

//   agregarAlCarrito(){
//     this.listaDeCompra.push(producto)
//   }
// }

const numeros = [ 3, 0]
const total = numeros.reduce(( x,elemento) => x * 2 + elemento, 0 )

console.log(total) // 21