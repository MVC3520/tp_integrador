/*hacerlo en javascript Resolver los ejercicios utilizando variables y operadores. Para el ingreso y egreso de
información por el momento con datos propios.
1.Realice un algoritmo que muestre el nombre y apellido de un usuario
2. Realice un algoritmo que muestre el promedio de 3 notas
3. Realice el algoritmo para calcular e informar el perímetro del triángulo.
4. Realice el algoritmo para calcular e informar el perímetro y el área del cuadrado.
5. Realice el algoritmo para calcular e informar el perímetro y el área del rectángulo.
6. Realice el algoritmo para calcular e informar el resto de la división entera entre los
valores.
7. Realice el algoritmo que arme y muestre el mensaje "Bienvenido", seguido del
nombre y apellido del usuario.
8. Realice el algoritmo para calcular e informar el perímetro y el área del círculo. Se
considerará para este ejercicio que el valor de PI será 3.1416.*/

//1
var nombre = "Juan";
var apellido = "Perez";

console.log("Nombre: " + nombre);
console.log("Apellido: " + apellido);
//2
var nota1 = 7;
var nota2 = 8;
var nota3 = 9;

var promedio = (nota1 + nota2 + nota3) / 3;

console.log("Promedio: " + promedio);
//3
var lado1 = 5;
var lado2 = 4;
var lado3 = 6;

var perimetro = lado1 + lado2 + lado3;

console.log("Perímetro del triángulo: " + perimetro);
//4
var lado = 10;

var perimetro = lado * 4;
var area = lado * lado;

console.log("Perímetro del cuadrado: " + perimetro);
console.log("Área del cuadrado: " + area);
//5
var base = 8;
var altura = 6;

var perimetro = (base + altura) * 2;
var area = base * altura;

console.log("Perímetro del rectángulo: " + perimetro);
console.log("Área del rectángulo: " + area);
//6
var dividendo = 15;
var divisor = 4;

var resto = dividendo % divisor;

console.log("Resto de la división: " + resto);
//7
var nombre = "Juan";
var apellido = "Perez";

console.log("Bienvenido, " + nombre + " " + apellido);
//8
var radio = 5;
const PI = 3.1416;

var perimetro = 2 * PI * radio;
var area = PI * Math.pow(radio, 2);

console.log("Perímetro: " + perimetro);
console.log("Área: " + area);
