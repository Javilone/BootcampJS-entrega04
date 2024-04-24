import "./style.css";

const flechaIzq = document.getElementById("flechaIzq");
const flechaDer = document.getElementById("flechaDer");
const numeroTurno = document.getElementById("numero-turno");
const reset = document.getElementById("reset-button");
const inputButton = document.getElementById("input-button");
const inputTurnos = document.getElementById("input-turnos");
const textoTurnos = document.getElementById("texto-turno");

let turno = 1;

function cambiarTurno(cambiar: string): void {
  if (
    inputTurnos !== null &&
    inputTurnos !== undefined &&
    inputTurnos instanceof HTMLInputElement &&
    textoTurnos instanceof HTMLParagraphElement &&
    numeroTurno instanceof HTMLHeadingElement
  ) {
    if (cambiar === "flechaDer" && turno < 99) {
      turno++;
      numeroTurno.innerText = turno.toString().padStart(2, "0");
      textoTurnos.innerText = "Por favor, acérquese al mostrador";
    } else if (cambiar === "flechaIzq" && turno > 1) {
      turno--;
      numeroTurno.innerText = turno.toString().padStart(2, "0");
      textoTurnos.innerText = "Por favor, acérquese al mostrador";
    } else if (cambiar === "reset") {
      turno = 1;
      numeroTurno.innerText = turno.toString().padStart(2, "0");
      textoTurnos.innerText = "Por favor, acérquese al mostrador";
      inputTurnos.value = "";
    } else if (cambiar === "input") {
      turno = parseInt(inputTurnos.value);
      if (turno > 99 || turno < 1) {
        numeroTurno.innerText = "¡Error!";
        textoTurnos.innerText = "Fuera de rango: Entre 1 y 99";
      } else {
        numeroTurno.innerText = inputTurnos.value.padStart(2, "0");
        textoTurnos.innerText = "Por favor, acérquese al mostrador";
      }
    }
  }
}

if (flechaDer !== null && flechaDer !== undefined) {
  flechaDer.addEventListener("click", () => cambiarTurno("flechaDer"));
}

if (flechaIzq !== null && flechaIzq !== undefined) {
  flechaIzq.addEventListener("click", () => cambiarTurno("flechaIzq"));
}

if (reset !== null && reset !== undefined) {
  reset.addEventListener("click", () => cambiarTurno("reset"));
}

if (inputTurnos !== null && inputTurnos !== undefined) {
  inputTurnos.addEventListener("keydown", () => cambiarTurno("input"));
}

if (inputButton !== null && inputButton !== undefined) {
  inputButton.addEventListener("click", () => cambiarTurno("input"));
}
