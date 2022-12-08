import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "postgres://osmait:123456@localhost:5432/prueba"
);

export default sequelize;
