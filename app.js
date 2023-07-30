// // Creando tienda de Hunger

class Producto{
    constructor(id, nombre, precio, cantidad){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
    incrementarCantidad(cantidad){
        this.cantidad = cantidad
    }

    descripcion(){
        return  "Id: " + this.id + 
                "\nProducto: "+this.nombre+
                "\nPrecio: "+this.precio
    }
    
    descripcionDelCarrito(){
        return  "\nProducto: "+this.nombre+
                "\nPrecio: "+this.precio+
                "\nCantidad: "+this.cantidad+
                "\n==================="
    }
}

class controladorDeProducto {
    constructor(){
        this.listaDeCompra = [];
    }

    agregar(producto){
        this.listaDeCompra.push(producto)
    }
    
    buscarProductoPorId (id){
        return this.listaDeCompra.find(producto => producto.id === id);
    }
    mostrar(){
        let listadoEnTexto = "";       
        this.listaDeCompra.forEach( producto => {
            listadoEnTexto = listadoEnTexto + producto.descripcion() + "\n==================== \n"
            // alert(producto.descripcion())
        })
        alert(listadoEnTexto)
    }
}   

class Carrito{
    constructor(){
        this.listaCarrito= []
    }

    agregar(producto){
        this.listaCarrito.push(producto)
    }
    
    mostrar(){
        let listadoEnTexto = "";       
        this.listaCarrito.forEach( producto => {
            listadoEnTexto = listadoEnTexto + producto.descripcionDelCarrito() 
            // alert(producto.descripcion())
        })
        alert(listadoEnTexto)

    }

    calcularTotal(){
            return this.listaCarrito.reduce( (acumulador ,producto) => acumulador + producto.precio * producto.cantidad ,0)
    }

    calculoDeIva(){
        return this.calcularTotal() * 1.21  
    }
}



const cDP = new controladorDeProducto();
const carrito = new Carrito();


cDP.agregar(new Producto(1, "Gorra", 1800, 1));
cDP.agregar(new Producto(2, "Remera", 3400, 1));
cDP.agregar(new Producto(3, "Taza", 1000, 1));
cDP.agregar(new Producto(4, "Agenda", 2000, 1));

let edad = Number(prompt ("Bienvendio a la tienda de Hunger! \n Que edad tienes?"))

if(edad >= 13){
let rta = "";

do {
    cDP.mostrar();
    let opciones = Number(prompt("Ingrese el numero del articulo a comprar"));
    let producto = cDP.buscarProductoPorId(opciones)
    let cantidad = Number(prompt("Ingrese la cantidad que desea comprar"));
    producto.incrementarCantidad(cantidad)
    carrito.agregar(producto);
    alert("El producto se añadio de forma exitosa!. El carrito tuyo es: ")
    carrito.mostrar();
    rta = prompt ("Quisiera agregar algo mas al carrito? (Escriba 'Esc' para finalizar compra)").toUpperCase();
} while (rta != "ESC");

alert("El total de su compra es: $"+ carrito.calcularTotal())
alert("El valor del iva es de: $" + carrito.calculoDeIva())
}
else{
alert("Lo sentimos no tienes la edad para comprar");
}