const { DataTypes } = require("sequelize");
const sequelize = require("../../database/database");

const Criteria = sequelize.define("Criteria", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  kode: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  kriteriaId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bobot: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      isFloat: true,
      min: 0,
    },
  },
  type: {
    type: DataTypes.ENUM("Cost", "Benefit"), // Atribut untuk dropdown dengan pilihan "cost" dan "benefit"
    allowNull: false,
  },
});

module.exports = Criteria;
