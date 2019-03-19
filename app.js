const express = require("express");
const app = express();
const path = require("path");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("morgan");

const SummonerApi = require("./src/api/summoner");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/summoner", SummonerApi);

// error handler
app.use(function(err, req, res, next) {
  const message = err.data.status.message;
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  if (message) {
    res.send(message);
  } else {
    res.send("error");
  }
});

module.exports = app;
