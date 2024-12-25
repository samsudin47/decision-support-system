const express = require("express");
const router = express.Router();
const controller = require("./controller");
const { getAllUsers } = require("./controller");

router.post("/register", controller.register);
router.post("/login", controller.login);
router.get("/users", getAllUsers);

module.exports = router;
