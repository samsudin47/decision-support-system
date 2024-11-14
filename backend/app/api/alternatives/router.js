const express = require("express");
const {
  createAlternative,
  getAllAlternative,
  getAlternativeById,
  updateAlternative,
  deleteAlternative,
} = require("./controller");
const router = express.Router();

router.post("/alternatives", createAlternative);
router.get("/alternatives", getAllAlternative);
router.get("/alternatives/:id", getAlternativeById);
router.put("/alternatives/:id", updateAlternative);
router.delete("/alternatives/:id", deleteAlternative);

module.exports = router;
