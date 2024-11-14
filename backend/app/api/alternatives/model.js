const { DataTypes } = require("sequelize");
const sequelize = require("../../database/database");

const Alternative = sequelize.define("Alternative", {
  kode: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Alternative;
