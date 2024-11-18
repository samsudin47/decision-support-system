const express = require("express");
const {
  createPenilaianAlternatif,
  getAllPenilaianAlternatif,
  getPenilaianAlternatifById,
  updatePenilaianAlternatif,
  deletePenilaianAlternatif,
} = require("./controller");
const router = express.Router();

router.post("/alternatifScore", createPenilaianAlternatif);
router.get("/alternatifScore", getAllPenilaianAlternatif);
router.get("/alternatifScore/:id", getPenilaianAlternatifById);
router.put("/alternatifScore/:id", updatePenilaianAlternatif);
router.delete("/alternatifScore/:id", deletePenilaianAlternatif);

module.exports = router;
