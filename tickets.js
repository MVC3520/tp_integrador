// Agregar un evento click al botón "Resumen"
document.getElementById("resumenButton").addEventListener("click", function () {
    // Obtener la cantidad y categoría seleccionadas
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const categoria = parseInt(document.getElementById("categoria").value);

    // Calcular el total a pagar según la categoría
    let total = 0;
    switch (categoria) {
        case 1: // Estudiante (80% descuento)
            total = cantidad * 200 * 0.2;
            break;
        case 2: // Trainee (50% descuento)
            total = cantidad * 200 * 0.5;
            break;
        case 3: // Junior (15% descuento)
            total = cantidad * 200 * 0.85;
            break;
        default:
            total = cantidad * 200; // Sin descuento
            break;
    }

    // Actualizar el contenido de la sección "Total a Pagar"
    document.getElementById("total").textContent = total.toFixed(2); // Mostrar el total con dos decimales
});

// Agregar un evento click al botón "Borrar"
document.getElementById("borrarButton").addEventListener("click", function () {
    // Restablecer los campos
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("categoria").value = 0;
    document.getElementById("total").textContent = "0";
});