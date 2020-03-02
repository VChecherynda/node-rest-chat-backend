const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

const sequelize = require("./utils/database");

const authRoutes = require("./routes/auth");
const usersRoutes = require("./routes/users");
const conversationsRoutes = require("./routes/conversation");
const messagesRoutes = require("./routes/message");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (req, res, next) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, autorization"
  );
  next();
});

app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/conversations", conversationsRoutes);
app.use("/messages", messagesRoutes);

sequelize
  .sync()
  .then(result => {
    console.log("App running on port" + " " + port);
    app.listen(port);
  })
  .catch(err => {
    console.log(err);
  });
