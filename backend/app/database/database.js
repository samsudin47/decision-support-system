require("dotenv").config();
const { Sequelize } = require("sequelize");

// inisialisasi sequelize dengan konfigurasi dari .env
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT || 3306,
    logging: false,
  }
);

// function test connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connected to MySQL database using sequelize");
  } catch (error) {
    console.error("Error connecting to MySQL: ", error);
  }
}

testConnection();

module.exports = sequelize;
