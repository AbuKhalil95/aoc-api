import Sequelize from "sequelize";

const sequalize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DB,
    timezone: process.env.DB_TZ,
		dialectOptions: {
			timezone: "local",
		}
  }
);

export default sequalize;
