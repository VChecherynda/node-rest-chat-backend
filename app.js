const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const sequelize = require("./utils/database");

const authRoutes = require("./routes/auth");

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

sequelize
  .sync()
  .then(result => {
    console.log("App running on port" + " " + port);
    app.listen(port);
  })
  .catch(err => {
    console.log(err);
  });
