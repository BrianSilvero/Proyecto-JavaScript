// Creando carrito para tienda de pagina de recetas online
let resultado = 0;
let ticket = "Resumen de la cuenta: \n";
let rta = "";

function iva(precio){
    return precio * 0.21
}
do {
  let producto = prompt("Ingrese el articulo a comprar").toLowerCase();
  let precio = Number(prompt("Ingrese precio del producto"));
  resultado = resultado + precio + iva(precio);
  ticket = ticket + "\n" + producto + "\t$" + (precio + iva(precio));

  rta = prompt(
    "Quisiera agregar algo mas al carrito? (Escriba 'Esc' para finalizar compra)"
  ).toUpperCase();
} while (rta != "ESC");

alert(ticket + "\n\nTotal: " + resultado)
