import { createReadStream } from "node:fs";
import { createInterface } from "node:readline";
import { cities } from "./cities.js";
import { colles } from "./colles.js";
import { PrismaClient } from "./generated/client/index.js";
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
});

for (var nom in colles) {
  await prisma.colla.create({
    data: { name: nom, id: colles[nom] },
  });
} */

var actuacions = [];
var castells = [];
var actuacio = {};
var castell = {};
var previousLine = null;
var indexActuacions = 1;
var currentCollaId = null;
var collesActuacio = [];

const rl = createInterface({
  input: createReadStream("data3.txt"),
  crlfDelay: Infinity,
});

rl.on("line", (line) => {
  // Desa l'actuació anterior i crea una nova
  const isDate = line.match(dateRegex);
  const isHour = line.match(hourRegex);
  const isCastell = line.match(castellRegex);
  const isCity = line in cities;
  const isColla = line in colles;
  const isIniciCastells = line === "Colles i resultats";

  if (isDate) {
    // Switch from dd/MM/yyyy to MM/dd/yyyy format
    const [day, month, year] = isDate[0].split("/");
    const d2 = year + "-" + month + "-" + day;
    if ("data" in actuacio) {
      //actuacio.castells = castells;
      actuacio.colles = { connect: collesActuacio };
      actuacions.push(actuacio);
      indexActuacions += 1;
    }
    actuacio = {};
    collesActuacio = [];
    actuacio.nom = previousLine;
    //castells = [];
    //console.log(d2);
    actuacio.data = d2;
    actuacio.id = indexActuacions;
    if (1990 < year < 2000) actuacio.temporadaId = year - 1990;
    else actuacio.temporadaId = year - 1999;
  } else if (isHour) {
    actuacio.dataHora = actuacio.data + "T" + isHour[0] + ":00Z";
  } else if (isColla) {
    currentCollaId = colles[line];
    collesActuacio.push({ id: currentCollaId });
    // Desa la colla anterior (si n'hi ha)
    //if (!(previousLine === "Colles i resultats")) actuacio.castells = castells;
  } else if (isCastell) {
    castell.nom = isCastell[0].match(castellNameRegex)[0];
    const tmp = isCastell[0].match(castellResultRegex)[0];
    castell.resultat = tmp.slice(1, -1);
    castell.actuacioId = indexActuacions;
    castell.collaId = currentCollaId;
    castells.push(castell);
    castell = {};
  } else if (isCity) {
    actuacio.ciutat = line;
  } else if (isIniciCastells) {
  } else {
    if (previousLine) {
      if (("nom" in actuacio) & !previousLine.match(castellRegex))
        actuacio.lloc = line;
    }
  }
  previousLine = line;
});

rl.on("close", async () => {
  const count = await prisma.castell.createMany({
    data: castells,
  });
  console.log(count);
  /*
  for (let i = 0; i < actuacions.length; i++) {
    actuacions[i].data = actuacions[i].data + "T00:00:00Z";
    const count = await prisma.actuacio.create({
      data: actuacions[i],
    });
    setTimeout(() => {
      console.log(actuacions[i].id);
    }, 1000);
  }
  */
});
