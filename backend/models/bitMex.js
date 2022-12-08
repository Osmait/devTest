import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Bitmex = sequelize.define("bitmex", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  link: {
    type: DataTypes.TEXT,
  },
  title: {
    type: DataTypes.TEXT,
  },
  content: {
    type: DataTypes.TEXT,
  },
  date: {
    type: DataTypes.DATE,
  },
});

// Bitmex.sync({ force: true });

export default Bitmex;
