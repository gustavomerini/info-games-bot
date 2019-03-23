const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const errorHandler = require("./src/middleware/error-handller");

// API route files
const SummonerApi = require("./src/api/summoner");

const app = express();

mongoose.connect(process.env.DATA_BASE, { useNewUrlParser: true }, error => {
  if (error) console.log(error);
});

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// Middleware and configs
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Endpoints declaration
app.use("/api/summoner", SummonerApi);

// General Error handler
app.use(errorHandler);

module.exports = app;
