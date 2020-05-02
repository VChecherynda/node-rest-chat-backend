"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("../controllers/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.post("/sign-in", _auth.default.signIn);
router.post("/sign-up", _auth.default.signUp);
var _default = router;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvYXV0aC5qcyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJleHByZXNzIiwiUm91dGVyIiwicG9zdCIsImNvbnRyb2xsZXJBdXRoIiwic2lnbkluIiwic2lnblVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBR0E7Ozs7QUFGQSxNQUFNQSxNQUFNLEdBQUdDLGlCQUFRQyxNQUFSLEVBQWY7O0FBSUFGLE1BQU0sQ0FBQ0csSUFBUCxDQUFZLFVBQVosRUFBd0JDLGNBQWVDLE1BQXZDO0FBQ0FMLE1BQU0sQ0FBQ0csSUFBUCxDQUFZLFVBQVosRUFBd0JDLGNBQWVFLE1BQXZDO2VBRWVOLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuaW1wb3J0IGNvbnRyb2xsZXJBdXRoIGZyb20gXCIuLi9jb250cm9sbGVycy9hdXRoXCI7XG5cbnJvdXRlci5wb3N0KFwiL3NpZ24taW5cIiwgY29udHJvbGxlckF1dGguc2lnbkluKTtcbnJvdXRlci5wb3N0KFwiL3NpZ24tdXBcIiwgY29udHJvbGxlckF1dGguc2lnblVwKTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19