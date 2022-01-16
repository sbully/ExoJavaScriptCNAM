const svg = document.querySelector(".svg");
var svgns = "http://www.w3.org/2000/svg";

const modulo = document.querySelector("#modulo");
const table = document.querySelector("#table");

const playButtonTable = document.querySelector("#btn-t");
const playButtonModulo = document.querySelector("#btn-m");
const stepTable = document.querySelector("#step-t");
const stepModulo = document.querySelector("#step-m");

const cx = 200;
const cy = 200;
const r = 150;
var enable = false;
var listElement = [
  stepModulo,
  stepTable,
  playButtonModulo,
  playButtonTable,
  modulo,
  table,
];
var idInterval;

function initSVG() {
  svg.innerHTML = "";
  var shape = document.createElementNS(svgns, "circle");
  shape.setAttributeNS(null, "cx", cx);
  shape.setAttributeNS(null, "cy", cy);
  shape.setAttributeNS(null, "r", r);
  svg.appendChild(shape);
}

function DrawSVG() {
  initSVG();

  var newLine;
  var slices = parseInt(modulo.value);

  var tabcoord = [];
  /* var tabcoord = new Map(); */
  for (var i = 0; i < slices; i++) {
    fromAngle = (i * 360) / slices - 90;
    toAngle = ((i + 1) * 360) / slices - 90;

    tabcoord.push({
      coordX: cx + r * Math.cos((fromAngle * Math.PI) / 180),
      coordY: cy + r * Math.sin((fromAngle * Math.PI) / 180),
    });
    /*     var index = (i * parseFloat(table.value)).toFixed(2);
    console.log(index);
    tabcoord.set(index, {
      coordX: cx + r * Math.cos((fromAngle * Math.PI) / 180),
      coordY: cy + r * Math.sin((fromAngle * Math.PI) / 180),
    });*/
  }
  for (var i = 1; i < slices; i++) {
    newLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    var toCoor = i * parseFloat(table.value);
    while (toCoor >= slices) toCoor -= slices;
    newLine.setAttribute("x1", tabcoord[i].coordX);
    newLine.setAttribute("y1", tabcoord[i].coordY);
    newLine.setAttribute("x2", tabcoord[toCoor].coordX);
    newLine.setAttribute("y2", tabcoord[toCoor].coordY);
    svg.appendChild(newLine);
  }

  /*  for (var [key, value] of tabcoord) {
    newLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    var toCoor = (parseFloat(key) * parseFloat(table.value)).toFixed(2);
    while (toCoor >= slices) toCoor -= slices;
    console.log("toCoor" + toCoor);
    console.log("key:" + key + " value:" + value);
    newLine.setAttribute("x1", tabcoord.get(key).coordX);
    newLine.setAttribute("y1", tabcoord.get(key).coordY);
    newLine.setAttribute("x2", tabcoord.get(toCoor).coordX);
    newLine.setAttribute("y2", tabcoord.get(toCoor).coordY);
    svg.appendChild(newLine);
  } */
}

function changeModulo() {
  EnableButton(playButtonModulo);
  if (!idInterval) {
    idInterval = setInterval(() => {
      modulo.value = parseInt(modulo.value) + parseInt(stepModulo.value);
      DrawSVG();
    }, 100);
  } else {
    clearInterval(idInterval);
    idInterval = "";
  }
}

function changeTable() {
  EnableButton(playButtonTable);
  if (!idInterval) {
    idInterval = setInterval(() => {
      table.value = (
        parseFloat(table.value) + parseFloat(stepTable.value)
      ).toFixed(2);
      DrawSVG();
    }, 100);
  } else {
    clearInterval(idInterval);
    idInterval = "";
  }
}

function EnableButton(element) {
  enable = !enable;
  for (var node of listElement) {
    if (node != element) {
      node.disabled = enable;
    } else node.innerHTML = enable ? "Pause" : "Play";
  }
}

initSVG();

playButtonTable.onclick = changeTable;
playButtonModulo.onclick = changeModulo;
modulo.addEventListener("change", DrawSVG);
table.addEventListener("change", DrawSVG);
