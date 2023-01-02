// EJERCICIO 1
console.log("EJERCICIO 1");
// datos de entrada. Objeto producto; propiedades: cantidad, precio, tipo.
let product = { count: 3, price: 12.55, type: "ropa" };
// CALCULAR EL PRECIO
// en el caso de no tengamos stock del producto, el resultado será 0
let precioTotal = product.count > 0 ? product.count * product.price : 0;
console.log("Precio total sin inpuestos:", precioTotal.toFixed(2), "€.");

// CALCULAR EL IVA
let IVA; //se declara la variable, cuyo valor dependerá del tipo de producto que sea.
switch (product.type) {
  case "alimentacion": // tipo impositivo reducido para alimentación
    IVA = 0.1;
    console.log(
      "Se aplica el tipo de IVA del 10% por ser un articulo de",
      product.type,
      "."
    );
    break;
  case "libro": // tipo impositivo reducido para libros
    IVA = 0.04;
    console.log(
      "Se aplica el tipo de IVA del 4% por ser un articulo de",
      product.type,
      "."
    );
    break;
  default: // tipo impositivo general
    IVA = 0.21;
    console.log(
      "Se aplica el tipo de IVA del 21% por ser un articulo de",
      product.type,
      "."
    );
}
// calculo del IVA unitario
var IVAunitario = product.price * IVA;
console.log("Impuestos por unidad", IVAunitario.toFixed(2), "€.");

// EJERCICIO 2-2 AVANZADO
console.log("AVANZADO 2-2");
// CALCULAR EL PRECIO TOTAL
// calculo del precio total unitario
let precioConIva = IVAunitario + product.price;

// con esta funcion calculamos el precio total
function PrecioTotal(product) {
  return product.count > 0 ? product.count * precioConIva : 0;
}

let resultado = PrecioTotal(product).toFixed(2);
console.log(
  "El valor total de los productos es:",
  resultado,
  "€, impuestos incluidos."
);

// EXTRA Calcular sueldo neto en nómina
console.log("EXTRA");

// datos de entrada
let empleado = {
  bruto: 14500,
  hijos: 2,
  pagas: 12,
};
console.log("Sueldo bruto anual:", empleado.bruto, "€.");

// Calculos con las retenciones dependiendo del importe bruto
var retenciones;
var bonificacion = 0.02;

switch (true) {
  case empleado.bruto < 12450:
    retenciones = 0;
    console.log("Retenciones del 0%");
    break;
  // Para las retenciones superiores al 0% sera aplicable una bonificación del 2% en caso de tener hijos.
  case empleado.bruto >= 12450 && empleado.bruto < 20200:
    retenciones = empleado.hijos > 0 ? 0.19 - bonificacion : 0.19;
    console.log("Retenciones del 19%.");
    break;
  case empleado.bruto >= 20200 && empleado.bruto < 35200:
    retenciones = empleado.hijos > 0 ? 0.24 - bonificacion : 0.24;
    console.log("Retenciones del 24%.");
    break;
  case empleado.bruto >= 35200 && empleado.bruto < 60000:
    retenciones = empleado.hijos > 0 ? 0.3 - bonificacion : 0.3;
    console.log("Retenciones del 30%.");
    break;
  case empleado.bruto >= 60000:
    retenciones = empleado.hijos > 0 ? 0.37 - bonificacion : 0.37;
    console.log("Retenciones del 37%.");
    break;
}
if (empleado.hijos > 0) {
  console.log("Bonificación del 2% por hijos.");
} else console.log("Bonificación por hijos no aplicable.");

// calculo del sueldo neto anual
var netoanual = empleado.bruto * (1 - retenciones);
console.log("Neto anual:", netoanual, "€.");

// calculo del sueldo neto ajustado al número de pagas recibidas
var netomensual = (netoanual / empleado.pagas).toFixed(2);
console.log(
  `Neto mensual: ${empleado.pagas} pagas, por importe de ${netomensual} €.`
);
