"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _isAuth = _interopRequireDefault(require("../middleware/is-auth"));

var _conversation = _interopRequireDefault(require("../controllers/conversation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get("/list", _isAuth.default, _conversation.default.list);
router.post("/create", _isAuth.default, _conversation.default.create);
var _default = router;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvY29udmVyc2F0aW9uLmpzIl0sIm5hbWVzIjpbInJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJnZXQiLCJpc0F1dGgiLCJjb250cm9sbGVyQ29udmVyc2F0aW9uIiwibGlzdCIsInBvc3QiLCJjcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7OztBQUhBLE1BQU1BLE1BQU0sR0FBR0MsaUJBQVFDLE1BQVIsRUFBZjs7QUFLQUYsTUFBTSxDQUFDRyxHQUFQLENBQVcsT0FBWCxFQUFvQkMsZUFBcEIsRUFBNEJDLHNCQUF1QkMsSUFBbkQ7QUFDQU4sTUFBTSxDQUFDTyxJQUFQLENBQVksU0FBWixFQUF1QkgsZUFBdkIsRUFBK0JDLHNCQUF1QkcsTUFBdEQ7ZUFFZVIsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuaW1wb3J0IGlzQXV0aCBmcm9tIFwiLi4vbWlkZGxld2FyZS9pcy1hdXRoXCI7XG5cbmltcG9ydCBjb250cm9sbGVyQ29udmVyc2F0aW9uIGZyb20gXCIuLi9jb250cm9sbGVycy9jb252ZXJzYXRpb25cIjtcblxucm91dGVyLmdldChcIi9saXN0XCIsIGlzQXV0aCwgY29udHJvbGxlckNvbnZlcnNhdGlvbi5saXN0KTtcbnJvdXRlci5wb3N0KFwiL2NyZWF0ZVwiLCBpc0F1dGgsIGNvbnRyb2xsZXJDb252ZXJzYXRpb24uY3JlYXRlKTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19