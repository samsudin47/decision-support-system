const { DataTypes } = require("sequelize");
const sequelize = require("../../database/database");

const PenilaianAlternatif = sequelize.define("penilaianAlternatif", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  periode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nilai: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = PenilaianAlternatif;
