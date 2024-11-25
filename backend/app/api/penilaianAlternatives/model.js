const { DataTypes } = require("sequelize");
const sequelize = require("../../database/database");
const Alternative = require("../alternatives/model");
const Criteria = require("../criteria/model");

const PenilaianAlternatif = sequelize.define(
  "PenilaianAlternatif",
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

// Relasi antara PenilaianAlternatif dan Alternative
PenilaianAlternatif.belongsTo(Alternative, {
  foreignKey: "alternativeId", // Menyambungkan PenilaianAlternatif dengan Alternative melalui foreignKey
  as: "alternative", // Alias untuk relasi ini
});

// Relasi antara PenilaianAlternatif dan Criteria
PenilaianAlternatif.belongsTo(Criteria, {
  foreignKey: "kriteriaId", // Menyambungkan PenilaianAlternatif dengan Criteria melalui foreignKey
  as: "criteria", // Alias untuk relasi ini
});

module.exports = PenilaianAlternatif;
