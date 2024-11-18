const { DataTypes } = require("sequelize");
const sequelize = require("../../database/database");

const PenilaianAlternatif = sequelize.define(
  "penilaianAlternatif",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    periode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alternativeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "alternatives",
        key: "id",
      },
    },
    kriteria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nilai: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
  },
  {
    timestamps: true,
    tableName: "penilaian_alternatif",
  }
);

module.exports = PenilaianAlternatif;
