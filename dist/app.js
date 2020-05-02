"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _models = _interopRequireDefault(require("./models"));

var _database = _interopRequireDefault(require("./utils/database"));

var _auth = _interopRequireDefault(require("./routes/auth"));

var _user = _interopRequireDefault(require("./routes/user"));

var _conversation = _interopRequireDefault(require("./routes/conversation"));

var _message = _interopRequireDefault(require("./routes/message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const app = (0, _express.default)();
const port = 9080;
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
})); // app.get("/", (req, res, next) => {
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

app.get("/", (req, res, next) => res.json({
  info: "Node.js, Express, and Postgres API"
}));
app.use("/auth", _auth.default);
app.use("/user", _user.default);
app.use("/conversation", _conversation.default);
app.use("/message", _message.default);
Object.values(_models.default).forEach(model => {
  model.init(_database.default);
  model.initRelationsAndHooks();
});

_database.default.sync().then(result => {
  console.log("App running on port" + " " + port);
  app.listen(port);
}).catch(err => {
  console.log(err);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiZG90ZW52IiwiY29uZmlnIiwiYXBwIiwicG9ydCIsInVzZSIsImJvZHlQYXJzZXIiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwiZ2V0IiwicmVxIiwicmVzIiwibmV4dCIsImluZm8iLCJhdXRoUm91dGVzIiwidXNlclJvdXRlcyIsImNvbnZlcnNhdGlvblJvdXRlcyIsIm1lc3NhZ2VSb3V0ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtb2RlbHMiLCJmb3JFYWNoIiwibW9kZWwiLCJpbml0Iiwic2VxdWVsaXplIiwiaW5pdFJlbGF0aW9uc0FuZEhvb2tzIiwic3luYyIsInRoZW4iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwibGlzdGVuIiwiY2F0Y2giLCJlcnIiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBR0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFYQUEsZ0JBQU9DLE1BQVA7O0FBYUEsTUFBTUMsR0FBRyxHQUFHLHVCQUFaO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLElBQWI7QUFFQUQsR0FBRyxDQUFDRSxHQUFKLENBQVFDLG9CQUFXQyxJQUFYLEVBQVI7QUFDQUosR0FBRyxDQUFDRSxHQUFKLENBQ0VDLG9CQUFXRSxVQUFYLENBQXNCO0FBQ3BCQyxFQUFBQSxRQUFRLEVBQUU7QUFEVSxDQUF0QixDQURGLEUsQ0FNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFOLEdBQUcsQ0FBQ08sR0FBSixDQUFRLEdBQVIsRUFBYSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsSUFBWCxLQUNYRCxHQUFHLENBQUNMLElBQUosQ0FBUztBQUFFTyxFQUFBQSxJQUFJLEVBQUU7QUFBUixDQUFULENBREY7QUFJQVgsR0FBRyxDQUFDRSxHQUFKLENBQVEsT0FBUixFQUFpQlUsYUFBakI7QUFDQVosR0FBRyxDQUFDRSxHQUFKLENBQVEsT0FBUixFQUFpQlcsYUFBakI7QUFDQWIsR0FBRyxDQUFDRSxHQUFKLENBQVEsZUFBUixFQUF5QlkscUJBQXpCO0FBQ0FkLEdBQUcsQ0FBQ0UsR0FBSixDQUFRLFVBQVIsRUFBb0JhLGdCQUFwQjtBQUVBQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsZUFBZCxFQUFzQkMsT0FBdEIsQ0FBOEJDLEtBQUssSUFBSTtBQUNyQ0EsRUFBQUEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLGlCQUFYO0FBQ0FGLEVBQUFBLEtBQUssQ0FBQ0cscUJBQU47QUFDRCxDQUhEOztBQUtBRCxrQkFDR0UsSUFESCxHQUVHQyxJQUZILENBRVFDLE1BQU0sSUFBSTtBQUNkQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBd0IsR0FBeEIsR0FBOEIzQixJQUExQztBQUNBRCxFQUFBQSxHQUFHLENBQUM2QixNQUFKLENBQVc1QixJQUFYO0FBQ0QsQ0FMSCxFQU1HNkIsS0FOSCxDQU1TQyxHQUFHLElBQUk7QUFDWkosRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlHLEdBQVo7QUFDRCxDQVJIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XG5kb3RlbnYuY29uZmlnKCk7XG5cbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcblxuaW1wb3J0IG1vZGVscyBmcm9tIFwiLi9tb2RlbHNcIjtcbmltcG9ydCBzZXF1ZWxpemUgZnJvbSBcIi4vdXRpbHMvZGF0YWJhc2VcIjtcblxuaW1wb3J0IGF1dGhSb3V0ZXMgZnJvbSBcIi4vcm91dGVzL2F1dGhcIjtcbmltcG9ydCB1c2VyUm91dGVzIGZyb20gXCIuL3JvdXRlcy91c2VyXCI7XG5pbXBvcnQgY29udmVyc2F0aW9uUm91dGVzIGZyb20gXCIuL3JvdXRlcy9jb252ZXJzYXRpb25cIjtcbmltcG9ydCBtZXNzYWdlUm91dGVzIGZyb20gXCIuL3JvdXRlcy9tZXNzYWdlXCI7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IHBvcnQgPSA5MDgwO1xuXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UoXG4gIGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XG4gICAgZXh0ZW5kZWQ6IHRydWVcbiAgfSlcbik7XG5cbi8vIGFwcC5nZXQoXCIvXCIsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuLy8gICByZXMuanNvbih7IGluZm86IFwiTm9kZS5qcywgRXhwcmVzcywgYW5kIFBvc3RncmVzIEFQSVwiIH0pO1xuLy8gfSk7XG5cbi8vIGFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4vLyAgIHJlcy5zZXRIZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiwgXCIqXCIpO1xuLy8gICByZXMuc2V0SGVhZGVyKFxuLy8gICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kc1wiLFxuLy8gICAgIFwiT1BUSU9OUywgR0VULCBQT1NULCBQVVQsIFBBVENILCBERUxFVEVcIlxuLy8gICApO1xuLy8gICByZXMuc2V0SGVhZGVyKFxuLy8gICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVyc1wiLFxuLy8gICAgIFwiQ29udGVudC1UeXBlLCBBdXRob3JpemF0aW9uLCBhdXRvcml6YXRpb25cIlxuLy8gICApO1xuLy8gICBuZXh0KCk7XG4vLyB9KTtcblxuYXBwLmdldChcIi9cIiwgKHJlcSwgcmVzLCBuZXh0KSA9PlxuICByZXMuanNvbih7IGluZm86IFwiTm9kZS5qcywgRXhwcmVzcywgYW5kIFBvc3RncmVzIEFQSVwiIH0pXG4pO1xuXG5hcHAudXNlKFwiL2F1dGhcIiwgYXV0aFJvdXRlcyk7XG5hcHAudXNlKFwiL3VzZXJcIiwgdXNlclJvdXRlcyk7XG5hcHAudXNlKFwiL2NvbnZlcnNhdGlvblwiLCBjb252ZXJzYXRpb25Sb3V0ZXMpO1xuYXBwLnVzZShcIi9tZXNzYWdlXCIsIG1lc3NhZ2VSb3V0ZXMpO1xuXG5PYmplY3QudmFsdWVzKG1vZGVscykuZm9yRWFjaChtb2RlbCA9PiB7XG4gIG1vZGVsLmluaXQoc2VxdWVsaXplKTtcbiAgbW9kZWwuaW5pdFJlbGF0aW9uc0FuZEhvb2tzKCk7XG59KTtcblxuc2VxdWVsaXplXG4gIC5zeW5jKClcbiAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkFwcCBydW5uaW5nIG9uIHBvcnRcIiArIFwiIFwiICsgcG9ydCk7XG4gICAgYXBwLmxpc3Rlbihwb3J0KTtcbiAgfSlcbiAgLmNhdGNoKGVyciA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfSk7XG4iXX0=