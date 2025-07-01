import { PrismaClient } from "./generated/client/index.js";
import { cities } from "./cities.js";
import { colles } from "./colles.js";

const prisma = new PrismaClient();

(async () => {
  const diades = await prisma.actuacio.findMany({
    select: { data: true, ciutat: true },
  });
  const diades2 = diades.map((d) => {
    const data = new Intl.DateTimeFormat("en-GB").format(new Date(d.data));
    const [day, month, year] = data.split("/");
    const data2 = day + "-" + month + "-" + year;
    const a = cities[d.ciutat];
    return a;
  });
  console.log(diades2.length);
})();
