import express from "express";
import mysql from "mysql";
import cors from "cors";
import jwt from "bcrypt";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

app.post("/register", (req, res) => {
  const sql = "INSERT INTO login(`name`, `email`, `password`)  VALUES (?)";
});

app.listen(3000, () => {
  console.log("Server sudah running ya Samsudin...!!!");
});
