const { createReadStream } = require("node:fs");
const { createInterface } = require("node:readline");
const { PrismaClient } = require("./generated/client");
const prisma = new PrismaClient();

const dateRegex = /\d{2}\/\d{2}\/\d{4}/;
const hourRegex = /\d\d[:\.]\d\d/;
const castellRegex = /\w+de?\d\w*[A-zÀ-ú]*\s\(.*\)/;
const castellNameRegex = /^\S+/;
const castellResultRegex = /\(.+\)$/;

const temporades = [
  1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003,
  2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016,
  2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
];

/* temporades.forEach(async (y, i) => {
  await prisma.temporada.create({
    data: { id: i + 1, year: y },
  });
}); */

var actuacions = [];
var castells = [];
var actuacio = {};
var castell = {};
var previousLine = null;
var indexActuacions = 823;

const rl = createInterface({
  input: createReadStream("data2.txt"),
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
    if ("data" in actuacio) {
      //actuacio.castells = castells;
      actuacions.push(actuacio);
      indexActuacions -= 1;
    }
    actuacio = {};
    actuacio.nom = previousLine;
    //castells = [];
    //console.log(d2);
    actuacio.data = d2;
    actuacio.id = indexActuacions;
    if (1990 < year < 2000) actuacio.temporadaId = year - 1990;
    else actuacio.temporadaId = year - 1999;
  } else if (h) {
    actuacio.dataHora = actuacio.data + "T" + h[0] + ":00Z";
  } else if (c) {
    castell.nom = c[0].match(castellNameRegex)[0];
    tmp = c[0].match(castellResultRegex)[0];
    castell.resultat = tmp.slice(1, -1);
    castell.actuacioId = indexActuacions;
    castells.push(castell);
    castell = {};
  } else if (!previousLine.match(castellRegex)) {
    if (!("ciutat" in actuacio)) actuacio.ciutat = line;
    else {
      actuacio.lloc = actuacio.ciutat;
      actuacio.ciutat = line;
    }
  }
  previousLine = line;
});

rl.on("close", async () => {
  //actuacions.shift();
  actuacions.forEach((e) => (e.data = e.data + "T00:00:00Z"));
  actuacions[0].nom =
    "Diada de les Festes de Santa Oliva d'Olesa de Montserrat";
  const count = await prisma.castell.createMany({
    data: castells,
  });

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
});
