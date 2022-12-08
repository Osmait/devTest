import sequelize from "../config/db.js";
import { consultarAPi } from "../helper/consult.js";
import Bitmex from "../models/bitMex.js";

export const getBitmex = async (req, res) => {
  const data = await consultarAPi();

  for await (const i of data) {
    const dataDB = await sequelize.query(
      `SELECT * FROM bitmexes WHERE id = ${i.id}`
    );
    if (dataDB[1].rowCount !== 0) {
      continue;
    }
    await Bitmex.create(i);
    console.log();
  }

  const dtRespont = await Bitmex.findAll();

  res.json(dtRespont);
};
