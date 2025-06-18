const { createReadStream } = require("node:fs");
const { createInterface } = require("node:readline");
const { PrismaClient } = require("./generated/client");
const prisma = new PrismaClient();

const dateRegex = /\d{2}\/\d{2}\/\d{4}/;
const hourRegex = /\d\d[:\.]\d\d/;
const castellRegex = /\w+de?\d\w*[A-zÀ-ú]*\s\(.*\)/;
const castellNameRegex = /^\S+/;
const castellResultRegex = /\(.+\)$/;

var actuacions = [];
var castells = [];
var actuacio = {};
var castell = {};
var indexActuacions = 0;

const rl = createInterface({
  input: createReadStream("data.txt"),
  crlfDelay: Infinity,
});

rl.on("line", (line) => {
  // Desa l'actuació anterior i crea una nova
  const d = line.match(dateRegex);
  const h = line.match(hourRegex);
  const c = line.match(castellRegex);
  if (d) {
    // Switch from dd/MM/yyyy to MM/dd/yyyy format
    const [day, month, year] = d[0].split("/");
    const d2 = year + "-" + month + "-" + day;
    if (actuacio) {
      //actuacio.castells = castells;
      actuacions.push(actuacio);
      indexActuacions += 1;
    }
    actuacio = {};
    //castells = [];
    //console.log(d2);
    actuacio.data = d2;
    actuacio.id = indexActuacions;
  } else if (h) {
    actuacio.dataHora = actuacio.data + "T" + h[0] + ":00Z";
  } else if (c) {
    castell.nom = c[0].match(castellNameRegex)[0];
    tmp = c[0].match(castellResultRegex)[0];
    castell.resultat = tmp.slice(1, -1);
    castell.actuacioId = indexActuacions;
    castells.push(castell);
    castell = {};
  } else {
    if (!("ciutat" in actuacio)) actuacio.ciutat = line;
    else {
      actuacio.lloc = actuacio.ciutat;
      actuacio.ciutat = line;
    }
  }
});

rl.on("close", async () => {
  //actuacions.shift();
  //actuacions.forEach((e) => (e.data = e.data + "T00:00:00Z"));

  const count = await prisma.castell.createMany({
    data: castells,
  });
  console.log(count);

  /*const count = await prisma.actuacio.createMany({
    data: [
      {
        data: "1991-06-29T00:00:00Z",
        id: 813,
        ciutat: "Cornellà de Llobregat",
      },
      {
        data: "1991-06-24T00:00:00Z",
        id: 814,
        ciutat: "Cornellà de Llobregat",
      },
      {
        data: "1991-06-09T00:00:00Z",
        id: 815,
        ciutat: "Cornellà de Llobregat",
      },
    ],
  });
  console.log(count);*/
  //console.dir(castells, { maxArrayLength: null });
});
