/*---------------------------Variante 1 --------------------------- */
const redButtonV1 = document.querySelector(".redButtonV1");
const greenButtonV1 = document.querySelector(".greenButtonV1");
const blueButtonV1 = document.querySelector(".blueButtonV1");
const colorContainerV1 = document.querySelector(".v1");
const inputRedHexaV1 = document.querySelector(".redHexaV1");
const inputGreenHexaV1 = document.querySelector(".greenHexaV1");
const inputBlueHexaV1 = document.querySelector(".blueHexaV1");

function onClickButton(event) {
  switch (event.target.value) {
    case "R":
      inputRedHexaV1.value = incrementValue(inputRedHexaV1.value);
      break;
    case "G":
      inputGreenHexaV1.value = incrementValue(inputGreenHexaV1.value);
      break;
    case "B":
      inputBlueHexaV1.value = incrementValue(inputBlueHexaV1.value);
      break;
    default:
      break;
  }
  changeColorV1();
}
function incrementValue(value) {
  value = parseInt(value, 16) + 10;
  if (value >= 265) value = 00;
  if (value > 255) value = 255;

  return value.toString(16).toUpperCase().length == 1
    ? "0" + value.toString(16).toUpperCase()
    : value.toString(16).toUpperCase();
}

function changeColorV1() {
  colorContainerV1.style.backgroundColor =
    "#" + inputRedHexaV1.value + inputGreenHexaV1.value + inputBlueHexaV1.value;
}

redButtonV1.onclick = onClickButton;
greenButtonV1.onclick = onClickButton;
blueButtonV1.onclick = onClickButton;

/*-------------------------Variante 2 --------------------------- */
const redRangeV2 = document.querySelector(".redRangeV2");
const greenRangeV2 = document.querySelector(".greenRangeV2");
const blueRangev2 = document.querySelector(".blueRangeV2");
const colorContainerV2 = document.querySelector(".v2");
const inputRedHexaV2 = document.querySelector(".redHexaV2");
const inputGreenHexaV2 = document.querySelector(".greenHexaV2");
const inputBlueHexaV2 = document.querySelector(".blueHexaV2");

function onClickButtonV2(event) {
  switch (event.target.name) {
    case "R":
      inputRedHexaV2.value = decimalToHexa(event.target.value);

      break;
    case "G":
      inputGreenHexaV2.value = decimalToHexa(event.target.value);
      break;
    case "B":
      inputBlueHexaV2.value = decimalToHexa(event.target.value);
      break;
    default:
      break;
  }
  changeColorV2();
}
function decimalToHexa(value) {
  value = parseInt(value);
  return value.toString(16).toUpperCase().length == 1
    ? "0" + value.toString(16).toUpperCase()
    : value.toString(16).toUpperCase();
}

function changeColorV2() {
  colorContainerV2.style.backgroundColor =
    "#" + inputRedHexaV2.value + inputGreenHexaV2.value + inputBlueHexaV2.value;
}
redRangeV2.onchange = onClickButtonV2;
greenRangeV2.onchange = onClickButtonV2;
blueRangev2.onchange = onClickButtonV2;

/*-------------------------Variante 3 --------------------------- */

const redButtonV3 = document.querySelector(".redButtonV3");
const greenButtonV3 = document.querySelector(".greenButtonV3");
const blueButtonV3 = document.querySelector(".blueButtonV3");
const colorContainerV3 = document.querySelector(".v3");
const inputRedHexaV3 = document.querySelector(".redHexaV3");
const inputGreenHexaV3 = document.querySelector(".greenHexaV3");
const inputBlueHexaV3 = document.querySelector(".blueHexaV3");
var idRed;
var idGreen;
var idBlue;

function onClickButtonV3(event) {
  switch (event.target.value) {
    case "R":
      if (!idRed) {
        idRed = setInterval(incrementValueV3, 100, inputRedHexaV3);
      } else {
        clearInterval(idRed);
        idRed = "";
      }
      break;
    case "G":
      if (!idGreen) {
        idGreen = setInterval(incrementValueV3, 100, inputGreenHexaV3);
      } else {
        clearInterval(idGreen);
        idGreen = "";
      }

      break;
    case "B":
      if (!idBlue) {
        idBlue = setInterval(incrementValueV3, 100, inputBlueHexaV3);
      } else {
        clearInterval(idBlue);
        idBlue = "";
      }
      break;
    default:
      break;
  }
}

function incrementValueV3(element) {
  var value = element.value;
  value = parseInt(value, 16) + 1;

  if (value > 255) value = 00;

  element.value =
    value.toString(16).toUpperCase().length == 1
      ? "0" + value.toString(16).toUpperCase()
      : value.toString(16).toUpperCase();
  changeColorV3();
}

function changeColorV3() {
  colorContainerV3.style.backgroundColor =
    "#" + inputRedHexaV3.value + inputGreenHexaV3.value + inputBlueHexaV3.value;
}

redButtonV3.onclick = onClickButtonV3;
greenButtonV3.onclick = onClickButtonV3;
blueButtonV3.onclick = onClickButtonV3;
