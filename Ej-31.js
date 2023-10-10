/*
Enunciado Ejercicio 31:

Dado un numero, indicar que tipo de angulo es.

Ejemplos:

console.log(angulo(47)) => "Angulo Agudo"
console.log(angulo(90)) => "Angulo Recto"
console.log(angulo(145)) => "Angulo Obtuso"
console.log(angulo(180)) => "Angulo Llano"

Como hacerlo:

- Crear una funcion con parametro angulo
- Condiciones para detectar el angulo
- Devolver resultado

*/

function angle(degrees) {
  let result = " ";

  if (degrees < 90 && degrees > 0) {
    result = "Acute angle";
  } else if (degrees === 90) {
    result = "Right angle";
  } else if (degrees > 90 && degrees < 180) {
    result = "Obtuse angle";
  } else if (degrees === 180) {
    result = "Straight angle";
  } else if (degrees > 180 && degrees < 360) {
    result = "Concave angle";
  } else if (degrees === 360) {
    result = "Complete angle";
  } else if (degrees === 0) {
    result = "Null angle";
  }

  return result;
}

console.log(angle(80));
