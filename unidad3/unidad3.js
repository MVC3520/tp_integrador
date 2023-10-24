//15
var numero = parseInt(prompt("Ingrese un número:"));

if (numero === 0) {
  console.log("El número es cero.");
} else if (numero % 2 === 0) {
  console.log("El número es par.");
} else {
  console.log("El número es impar.");
}
//16
var numero = parseInt(prompt("Ingrese un número:"));

if (numero % 3 === 0) {
  console.log("El número es múltiplo de 3.");
} else {
  console.log("El número no es múltiplo de 3.");
}
//17
var letra = prompt("Ingrese una letra:").toLowerCase();

if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
  console.log("La letra ingresada es una vocal.");
} else {
  console.log("La letra ingresada no es una vocal.");
}
//18
// Solicitar al usuario los extremos del rango y el número
var extremoInferior = parseInt(prompt("Ingrese el extremo inferior del rango:"));
var extremoSuperior = parseInt(prompt("Ingrese el extremo superior del rango:"));
var numero = parseInt(prompt("Ingrese un número:"));

// Verificar si el número está dentro del rango
if (numero >= extremoInferior && numero <= extremoSuperior) {
  console.log("El número está dentro del rango.");

  // Verificar si el número es par o impar
  if (numero % 2 === 0) {
    console.log("El número es par.");
  } else {
    console.log("El número es impar.");
  }
} else {
  console.log("El número no está dentro del rango.");

  // Verificar si el número es impar
  if (numero % 2 !== 0) {
    console.log("El número es impar.");
  }
}
//19
// Solicitar al usuario los números y el operador
var numero1 = parseFloat(prompt("Ingrese el primer número:"));
var numero2 = parseFloat(prompt("Ingrese el segundo número:"));
var operador = prompt("Ingrese un operador (+, -, *, /):");

// Realizar la operación solicitada entre ambos números
var resultado;
switch (operador) {
  case "+":
    resultado = numero1 + numero2;
    break;
  case "-":
    resultado = numero1 - numero2;
    break;
  case "*":
    resultado = numero1 * numero2;
    break;
  case "/":
    resultado = numero1 / numero2;
    break;
  default:
    console.log("Operador inválido.");
}

// Informar el resultado de la operación
console.log("El resultado de la operación es: " + resultado);
//20
function determinarTipoTriangulo() {
    // Solicitar al usuario que ingrese los tres lados del triángulo
    var lado1 = parseFloat(prompt("Ingrese el primer lado del triángulo:"));
    var lado2 = parseFloat(prompt("Ingrese el segundo lado del triángulo:"));
    var lado3 = parseFloat(prompt("Ingrese el tercer lado del triángulo:"));
  
    // Verificar si los lados ingresados forman un triángulo válido
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
      // Verificar si el triángulo es equilátero (todos los lados iguales)
      if (lado1 === lado2 && lado1 === lado3) {
        console.log("El triángulo es equilátero.");
      }
      // Verificar si el triángulo es isósceles (dos lados iguales)
      else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("El triángulo es isósceles.");
      }
      // Si no es equilátero ni isósceles, entonces es escaleno
      else {
        console.log("El triángulo es escaleno.");
      }
    } else {
      console.log("Los lados ingresados no forman un triángulo válido.");
    }
  }
  
  // Llamar a la función para ejecutarla
  determinarTipoTriangulo();
  //21
  function calcularSueldo() {
    // Solicitar al usuario que ingrese la categoría y las horas extras
    var categoria = parseInt(prompt("Ingrese la categoría del empleado (1, 2 o 3):"));
    var horasExtras = parseInt(prompt("Ingrese la cantidad de horas extras trabajadas:"));
  
    // Definir el sueldo básico según la categoría ingresada
    var sueldoBasico;
    if (categoria === 1) {
      sueldoBasico = 2000;
    } else if (categoria === 2) {
      sueldoBasico = 3000;
    } else if (categoria === 3) {
      sueldoBasico = 4000;
    } else {
      console.log("La categoría ingresada no es válida.");
      return; // Salir de la función si la categoría no es válida
    }
  
    // Verificar si corresponde aplicar un bono por horas extras
    var bonoExtra = 0;
    if (categoria === 1 && horasExtras > 20) {
      bonoExtra = 500;
    } else if (categoria === 3 && horasExtras > 30) {
      bonoExtra = 1000;
    }
  
    // Calcular el sueldo mensual sumando el sueldo básico y el bono por horas extras
    var sueldoMensual = sueldoBasico + bonoExtra;
  
    // Verificar si el sueldo supera los u$s 4000
    if (sueldoMensual > 4000) {
      console.log("El sueldo mensual del empleado es de u$s " + sueldoMensual + " y supera los u$s 4000.");
    } else {
      console.log("El sueldo mensual del empleado es de u$s " + sueldoMensual + " y no supera los u$s 4000.");
    }
  }
  
  // Llamar a la función para ejecutarla
  calcularSueldo();