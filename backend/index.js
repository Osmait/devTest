import express from "express";
import sequelize from "./config/db.js";
import { getBitmex } from "./controller/bitmex.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;

sequelize.authenticate();

app.get("/announcement", getBitmex);

app.listen(PORT, () => {
  console.log(`server on port${PORT}`);
});
