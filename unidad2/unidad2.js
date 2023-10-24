//9
var nombre = prompt("Ingrese su nombre");
var apellido = prompt("Ingrese su apellido");

var mensaje = "Bienvenido " + nombre + " " + apellido;
console.log(mensaje);
//10
var diametro = parseFloat(prompt("Ingrese el diámetro del círculo"));

var radio = diametro / 2;
var perimetro = 2 * Math.PI * radio;
var area = Math.PI * Math.pow(radio, 2);

console.log("El perímetro del círculo es: " + perimetro.toFixed(2));
console.log("El área del círculo es: " + area.toFixed(2));
//11
var numero1 = parseFloat(prompt("Ingrese el primer número"));
var numero2 = parseFloat(prompt("Ingrese el segundo número"));
var numero3 = parseFloat(prompt("Ingrese el tercer número"));
var numero4 = parseFloat(prompt("Ingrese el cuarto número"));

var suma = numero1 + numero2 + numero3 + numero4;
var promedio = suma / 4;

console.log("La suma de los números es: " + suma);
console.log("El promedio de los números es: " + promedio);
//12
var valorHora = parseFloat(prompt("Ingrese el valor de la hora"));
var horasTrabajadas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas en el mes"));

var sueldoMensual = valorHora * horasTrabajadas;

console.log("El sueldo mensual del empleado es: " + sueldoMensual);
//13
var valorHora = parseFloat(prompt("Ingrese el valor de la hora"));
var horasTrabajadas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas en el mes"));
var antiguedad = parseInt(prompt("Ingrese los años de antigüedad en la empresa"));

var sueldoMensual = valorHora * horasTrabajadas;
var bonoAntiguedad = sueldoMensual * (antiguedad * 0.15);
sueldoMensual += bonoAntiguedad;

console.log("El sueldo mensual del empleado es: " + sueldoMensual);
//14
// Solicitar al usuario los datos necesarios
var valorHora14 = parseFloat(prompt("Ingrese el valor de la hora:"));
var horasTrabajadas14 = parseInt(prompt("Ingrese la cantidad de horas trabajadas en el mes:"));
var antiguedad14 = parseInt(prompt("Ingrese los años de antigüedad:"));
var segurosVendidos14 = parseInt(prompt("Ingrese la cantidad de seguros vendidos:"));
var valorSeguroMasCaro14 = parseFloat(prompt("Ingrese el valor del seguro más caro vendido:"));

// Calcular el sueldo mensual
var bonoSeguroMasCaro14 = (valorSeguroMasCaro14 * 0.5);
var bonoSegurosVendidos14 = (segurosVendidos14 * 0.25 * valorHora14);
var bonoAntiguedad14 = (antiguedad14 * 0.15 * valorHora14);
var sueldoMensual14 = (horasTrabajadas14 * valorHora14) + bonoSeguroMasCaro14 + bonoSegurosVendidos14 + bonoAntiguedad14;

// Calcular el valor promedio de la hora
var valorPromedioHora14 = sueldoMensual14 / horasTrabajadas14;

// Mostrar los resultados
console.log("Sueldo mensual del empleado: $" + sueldoMensual14.toFixed(2));
console.log("Valor promedio de la hora del empleado: $" + valorPromedioHora14.toFixed(2));