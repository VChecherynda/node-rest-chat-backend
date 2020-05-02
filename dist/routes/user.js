"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _isAuth = _interopRequireDefault(require("../middleware/is-auth"));

var _user = _interopRequireDefault(require("../controllers/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get("/list", _isAuth.default, _user.default.list);
var _default = router;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdXNlci5qcyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJleHByZXNzIiwiUm91dGVyIiwiZ2V0IiwiaXNBdXRoIiwiY29udHJvbGxlclVzZXIiLCJsaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7Ozs7QUFIQSxNQUFNQSxNQUFNLEdBQUdDLGlCQUFRQyxNQUFSLEVBQWY7O0FBS0FGLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLE9BQVgsRUFBb0JDLGVBQXBCLEVBQTRCQyxjQUFlQyxJQUEzQztlQUVlTixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5pbXBvcnQgaXNBdXRoIGZyb20gXCIuLi9taWRkbGV3YXJlL2lzLWF1dGhcIjtcblxuaW1wb3J0IGNvbnRyb2xsZXJVc2VyIGZyb20gXCIuLi9jb250cm9sbGVycy91c2VyXCI7XG5cbnJvdXRlci5nZXQoXCIvbGlzdFwiLCBpc0F1dGgsIGNvbnRyb2xsZXJVc2VyLmxpc3QpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=