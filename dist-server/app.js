"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var app = express();
var port = 8080;

var sequelize = require("./utils/database");

var authRoutes = require("./routes/auth");

var usersRoutes = require("./routes/users");

var conversationsRoutes = require("./routes/conversation");

var messagesRoutes = require("./routes/message");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get("/", function (req, res, next) {
  res.json({
    info: "Node.js, Express, and Postgres API"
  });
});
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, autorization");
  next();
});
app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/conversations", conversationsRoutes);
app.use("/messages", messagesRoutes);
sequelize.sync().then(function (result) {
  console.log("App running on port" + " " + port);
  app.listen(port);
})["catch"](function (err) {
  console.log(err);
});