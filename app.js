const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

const sequelize = require("./utils/database");

const authRoutes = require("./routes/auth");
const conversationsRoutes = require("./routes/conversation");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (req, res, next) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
});

app.use("/auth", authRoutes);
app.use("/conversations", conversationsRoutes);

sequelize
  .sync()
  .then(result => {
    console.log("App running on port" + " " + port);
    app.listen(port);
  })
  .catch(err => {
    console.log(err);
  });
