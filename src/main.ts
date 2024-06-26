import "./style.css";

const flechaIzq = document.getElementById("flechaIzq");
const flechaDer = document.getElementById("flechaDer");
const numeroTurno = document.getElementById("numero-turno");
const reset = document.getElementById("reset-button");
const inputButton = document.getElementById("input-button");
const inputTurnos = document.getElementById("input-turnos");
const textoTurnos = document.getElementById("texto-turno");

let turno: number = 1;
const siguienteMensaje: string = "Por favor, acérquese al mostrador";
const turnoErrorMensaje: string = "Fuera de rango: Entre 1 y 99";

function siguienteTurno(): void {
  if (
    turno < 99 &&
    flechaDer !== null &&
    flechaDer !== undefined &&
    textoTurnos instanceof HTMLParagraphElement &&
    numeroTurno instanceof HTMLHeadingElement
  ) {
    turno++;
    numeroTurno.innerText = turno.toString().padStart(2, "0");
    textoTurnos.innerText = siguienteMensaje;
  }
}

function anteriorTurno(): void {
  if (
    turno > 1 &&
    flechaIzq !== null &&
    flechaIzq !== undefined &&
    textoTurnos instanceof HTMLParagraphElement &&
    numeroTurno instanceof HTMLHeadingElement
  ) {
    turno--;
    numeroTurno.innerText = turno.toString().padStart(2, "0");
    textoTurnos.innerText = siguienteMensaje;
  }
}

function reiniciarTurno(): void {
  if (
    inputTurnos !== null &&
    inputTurnos !== undefined &&
    inputTurnos instanceof HTMLInputElement &&
    textoTurnos instanceof HTMLParagraphElement &&
    numeroTurno instanceof HTMLHeadingElement
  ) {
    turno = 1;
    numeroTurno.innerText = turno.toString().padStart(2, "0");
    textoTurnos.innerText = siguienteMensaje;
    inputTurnos.value = "";
  }
}

function escribirTurno(): void {
  if (
    inputTurnos !== null &&
    inputTurnos !== undefined &&
    inputTurnos instanceof HTMLInputElement &&
    textoTurnos instanceof HTMLParagraphElement &&
    numeroTurno instanceof HTMLHeadingElement
  ) {
    turno = parseInt(inputTurnos.value);
    if (turno > 99 || turno < 1) {
      numeroTurno.innerText = "¡Error!";
      textoTurnos.innerText = turnoErrorMensaje;
    } else {
      numeroTurno.innerText = inputTurnos.value.padStart(2, "0");
      textoTurnos.innerText = siguienteMensaje;
    }
  }
}

if (flechaDer instanceof HTMLImageElement) {
  flechaDer.addEventListener("click", siguienteTurno);
}

if (flechaIzq instanceof HTMLImageElement) {
  flechaIzq.addEventListener("click", anteriorTurno);
}

if (reset instanceof HTMLButtonElement) {
  reset.addEventListener("click", reiniciarTurno);
}

if (inputTurnos instanceof HTMLInputElement) {
  inputTurnos.addEventListener("keydown", escribirTurno);
}

if (inputButton instanceof HTMLButtonElement) {
  inputButton.addEventListener("click", escribirTurno);
}
