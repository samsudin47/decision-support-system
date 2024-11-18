const express = require("express");
const {
  createCriteria,
  getAllKriteria,
  getKriteriaById,
  updateCriteria,
  deleteCriteria,
} = require("./controller");

const router = express.Router();

router.post("/criteria", createCriteria);
router.get("/criteria", getAllKriteria);
router.get("/criteria/:id", getKriteriaById);
router.put("/criteria/:id", updateCriteria);
router.delete("/criteria/:id", deleteCriteria);

module.exports = router;
