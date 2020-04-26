"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _auth = _interopRequireDefault(require("./routesSOLID/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

// import usersRoutes from "./routesSOLID/user";
// import conversationsRoutes from "./routesSOLID/conversation";
// import messagesRoutes from "./routesSOLID/message";
const app = (0, _express.default)();
const port = 8080; // app.use(bodyParser.json());
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

app.use("/", (req, res) => {
  res.send("HELLO WORLD!");
});
app.use("/auth", _auth.default); // app.use("/users", usersRoutes);
// app.use("/conversations", conversationsRoutes);
// app.use("/messages", messagesRoutes);

app.listen(port);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHBTT0xJRC5qcyJdLCJuYW1lcyI6WyJkb3RlbnYiLCJjb25maWciLCJhcHAiLCJwb3J0IiwidXNlIiwicmVxIiwicmVzIiwic2VuZCIsImF1dGhSb3V0ZXMiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBR0E7O0FBQ0E7O0FBRUE7Ozs7QUFMQUEsZ0JBQU9DLE1BQVA7O0FBTUE7QUFDQTtBQUNBO0FBRUEsTUFBTUMsR0FBRyxHQUFHLHVCQUFaO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLElBQWIsQyxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUQsR0FBRyxDQUFDRSxHQUFKLENBQVEsR0FBUixFQUFhLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ3pCQSxFQUFBQSxHQUFHLENBQUNDLElBQUosQ0FBUyxjQUFUO0FBQ0QsQ0FGRDtBQUdBTCxHQUFHLENBQUNFLEdBQUosQ0FBUSxPQUFSLEVBQWlCSSxhQUFqQixFLENBQ0E7QUFDQTtBQUNBOztBQUVBTixHQUFHLENBQUNPLE1BQUosQ0FBV04sSUFBWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xuZG90ZW52LmNvbmZpZygpO1xuXG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XG5cbmltcG9ydCBhdXRoUm91dGVzIGZyb20gXCIuL3JvdXRlc1NPTElEL2F1dGhcIjtcbi8vIGltcG9ydCB1c2Vyc1JvdXRlcyBmcm9tIFwiLi9yb3V0ZXNTT0xJRC91c2VyXCI7XG4vLyBpbXBvcnQgY29udmVyc2F0aW9uc1JvdXRlcyBmcm9tIFwiLi9yb3V0ZXNTT0xJRC9jb252ZXJzYXRpb25cIjtcbi8vIGltcG9ydCBtZXNzYWdlc1JvdXRlcyBmcm9tIFwiLi9yb3V0ZXNTT0xJRC9tZXNzYWdlXCI7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IHBvcnQgPSA4MDgwO1xuXG4vLyBhcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbi8vIGFwcC51c2UoXG4vLyAgIGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XG4vLyAgICAgZXh0ZW5kZWQ6IHRydWVcbi8vICAgfSlcbi8vICk7XG5cbi8vIGFwcC5nZXQoXCIvXCIsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuLy8gICByZXMuanNvbih7IGluZm86IFwiTm9kZS5qcywgRXhwcmVzcywgYW5kIFBvc3RncmVzIEFQSVwiIH0pO1xuLy8gfSk7XG5cbi8vIGFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4vLyAgIHJlcy5zZXRIZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiwgXCIqXCIpO1xuLy8gICByZXMuc2V0SGVhZGVyKFxuLy8gICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kc1wiLFxuLy8gICAgIFwiT1BUSU9OUywgR0VULCBQT1NULCBQVVQsIFBBVENILCBERUxFVEVcIlxuLy8gICApO1xuLy8gICByZXMuc2V0SGVhZGVyKFxuLy8gICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVyc1wiLFxuLy8gICAgIFwiQ29udGVudC1UeXBlLCBBdXRob3JpemF0aW9uLCBhdXRvcml6YXRpb25cIlxuLy8gICApO1xuLy8gICBuZXh0KCk7XG4vLyB9KTtcblxuYXBwLnVzZShcIi9cIiwgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKFwiSEVMTE8gV09STEQhXCIpO1xufSk7XG5hcHAudXNlKFwiL2F1dGhcIiwgYXV0aFJvdXRlcyk7XG4vLyBhcHAudXNlKFwiL3VzZXJzXCIsIHVzZXJzUm91dGVzKTtcbi8vIGFwcC51c2UoXCIvY29udmVyc2F0aW9uc1wiLCBjb252ZXJzYXRpb25zUm91dGVzKTtcbi8vIGFwcC51c2UoXCIvbWVzc2FnZXNcIiwgbWVzc2FnZXNSb3V0ZXMpO1xuXG5hcHAubGlzdGVuKHBvcnQpO1xuIl19