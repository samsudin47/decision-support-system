const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/middleware");
const controller = require("./controller");

router.get("/protected", verifyToken, controller.getProtectedData);

module.exports = router;
