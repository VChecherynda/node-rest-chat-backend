import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";

import authRoutes from "./routesSOLID/auth";
// import usersRoutes from "./routesSOLID/user";
// import conversationsRoutes from "./routesSOLID/conversation";
// import messagesRoutes from "./routesSOLID/message";

const app = express();
const port = 8080;

// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true
//   })
// );

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

// app.use("/auth", authRoutes);
// app.use("/users", usersRoutes);
// app.use("/conversations", conversationsRoutes);
// app.use("/messages", messagesRoutes);

app.listen(port);
