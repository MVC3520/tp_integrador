let saldo = 1000;

const cajeroForm = document.getElementById('cajeroForm');
const opcionSelect = document.getElementById('opcion');
const cantidadDepositoContainer = document.getElementById('cantidadDepositoContainer');
const cantidadRetiroContainer = document.getElementById('cantidadRetiroContainer');
const cantidadDepositoInput = document.getElementById('cantidadDeposito');
const cantidadRetiroInput = document.getElementById('cantidadRetiro');
const resultadoElement = document.getElementById('resultado');

cajeroForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const opcion = opcionSelect.value;

  if (opcion === 'consultar') {
    consultarSaldo();
  } else if (opcion === 'depositar') {
    const cantidadDeposito = parseFloat(cantidadDepositoInput.value);

    if (isNaN(cantidadDeposito) || cantidadDeposito <= 0) {
      mostrarMensaje('Cantidad de depósito inválida');
  } else {
    depositar(cantidadDeposito);
  }
} else if (opcion === 'retirar') {
  const cantidadRetiro = parseFloat(cantidadRetiroInput.value);

  if (isNaN(cantidadRetiro) || cantidadRetiro <= 0) {
    mostrarMensaje('Cantidad de retiro inválida');
  } else if (cantidadRetiro > saldo) {
    mostrarMensaje('No tiene saldo suficiente');
  } else {
    retirar(cantidadRetiro);
  }
}
});

function consultarSaldo() {
mostrarMensaje('Saldo actual: ' + formatCurrency(saldo));
}

function depositar(cantidadDeposito) {
saldo += cantidadDeposito;
mostrarMensaje('Dinero depositado: ' + formatCurrency(cantidadDeposito) + '. Su saldo actual es de: ' + formatCurrency(saldo));
}

function retirar(cantidadRetiro) {
saldo -= cantidadRetiro;
mostrarMensaje('Dinero entregado: ' + formatCurrency(cantidadRetiro) + '. Su saldo actual es de: ' + formatCurrency(saldo));
}

function mostrarMensaje(mensaje) {
  resultadoElement.textContent = mensaje;
}

function formatCurrency(amount) {
  return '$' + amount.toFixed(2);
}

opcionSelect.addEventListener('change', function() {
  const opcion = opcionSelect.value;

  if (opcion === 'consultar') {
    cantidadDepositoContainer.style.display = 'none';
    cantidadRetiroContainer.style.display = 'none';
  } else if (opcion === 'depositar') {
    cantidadDepositoContainer.style.display = 'block';
    cantidadRetiroContainer.style.display = 'none';
  } else if (opcion === 'retirar') {
    cantidadDepositoContainer.style.display = 'none';
    cantidadRetiroContainer.style.display = 'block';
  }
});