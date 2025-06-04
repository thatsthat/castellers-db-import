const { createReadStream } = require("node:fs");
const { createInterface } = require("node:readline");

const dateRegex = /\d{2}\/\d{2}\/\d{4}/;
const hourRegex = /\d\d:\d\d/;
const castellRegex = /\w+de?\w*[A-zÀ-ú]*\s\(.*\)/;
const castellNameRegex = /^\S+/;
const castellResultRegex = /\(.+\)$/;

var actuacions = [];
var castells = [];
var actuacio = {};
var castell = {};
var indexActuacions = 1;

const rl = createInterface({
  input: createReadStream("data.txt"),
  crlfDelay: Infinity,
});

rl.on("line", (line) => {
  // Desa l'actuació anterior i crea una nova
  const d = line.match(dateRegex);
  if (d) {
    if (actuacio) {
      actuacio.castells = castells;
      actuacions.push(actuacio);
      indexActuacions += 1;
    }
    actuacio = {};
    castells = [];
    actuacio.data = d[0];
    actuacio.id = indexActuacions;
  }
  // Hora detectada
  const h = line.match(hourRegex);
  if (h) {
    actuacio.hora = h[0];
  }
  // Castell detectat
  const c = line.match(castellRegex);
  if (c) {
    castell.nom = c[0].match(castellNameRegex)[0];
    castell.resultat = c[0].match(castellResultRegex)[0];
    castell.actuacioId = indexActuacions;
    castells.push(castell);
    castell = {};
  }
});

rl.on("close", () => {
  const hola = 5;
  console.log(JSON.stringify(actuacions));
});
