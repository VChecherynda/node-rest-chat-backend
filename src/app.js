import dotenv from "dotenv";
dotenv.config();

import https from "https";
import fs from "fs";

import express from "express";
import bodyParser from "body-parser";

import models from "./models";
import sequelize from "./utils/database";

import authRoutes from "./routes/auth";
import userRoutes from "./routes/user";
import conversationRoutes from "./routes/conversation";
import messageRoutes from "./routes/message";

// const options = {
//   key: fs.readFileSync("key.pem"),
//   cert: fs.readFileSync("cert.pem")
// };

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// app.get("/", (req, res, next) => {
//   res.json({ info: "Node.js, Express, and Postgres API" });
// });

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "OPTIONS, GET, POST, PUT, PATCH, DELETE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization, autorization"
//   );
//   next();
// });

app.get("/", (req, res, next) =>
  res.json({ info: "Node.js, Express, and Postgres API" })
);

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/conversation", conversationRoutes);
app.use("/message", messageRoutes);

Object.values(models).forEach(model => {
  model.init(sequelize);
  model.initRelationsAndHooks();
});

sequelize
  .sync()
  .then(result => {
    https
      .createServer(
        {
          key: fs.readFileSync("key.pem"),
          cert: fs.readFileSync("cert.pem")
        },
        app
      )
      .listen(port, function() {
        console.log(`App listening on port ${port}!`);
      });
  })
  .catch(err => {
    console.log(err);
  });
