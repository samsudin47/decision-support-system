const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// import package db
const db = require("./app/database/database");
const authRoutes = require("./app/api/auth/router");
const protectedRoutes = require("./app/api/protected/router");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// tes koneksi database
db.query("SELECT 1", (err, results) => {
  if (err) {
    console.error("Error executing test query:", err);
  } else {
    console.log("Database connetion is active");
  }
});

const v1 = "/api";

app.use(`${v1}/cms/auth`, authRoutes);
app.use(`${v1}/cms/protected`, protectedRoutes);

module.exports = app;
