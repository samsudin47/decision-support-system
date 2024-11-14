const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

// import package db
const db = require("./app/database/database");
const authRoutes = require("./app/api/auth/router");
const protectedRoutes = require("./app/api/protected/router");
const alternativeRoutes = require("./app/api/alternatives/router");

const app = express();
// konfigurasi cors
const corsOption = {
  origin: "http://localhost:5173",
  methods: "GET, POST, DELETE,",
  allowHeaders: "Content-Type, Authorization",
};

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors(corsOption));

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
app.use(`${v1}/cms/`, alternativeRoutes);

module.exports = app;
