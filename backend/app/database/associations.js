// const Alternative = require("../api/alternatives/model");
// const Criteria = require("../api/criteria/model");
// const PenilaianAlternatif = require("../api/penilaianAlternatives/model");

// // Relasi antara Alternative dan PenilaianAlternatif
// Alternative.hasMany(PenilaianAlternatif, {
//   foreignKey: "alternativeId",
//   as: "penilaianAlternatif",
// });

// PenilaianAlternatif.belongsTo(Alternative, {
//   foreignKey: "alternativeId",
//   as: "alternative",
// });

// // Relasi antara Criteria dan PenilaianAlternatif
// Criteria.hasMany(PenilaianAlternatif, {
//   foreignKey: "kriteriaId",
//   as: "penilaianAlternatif",
// });

// PenilaianAlternatif.belongsTo(Criteria, {
//   foreignKey: "kriteriaId",
//   as: "criteria",
// });

// module.exports = { Alternative, Criteria, PenilaianAlternatif };
