"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _conversation = _interopRequireDefault(require("../../../modelsSOLID/conversation"));

var _connect = _interopRequireDefault(require("../connect"));

var _conversation2 = _interopRequireDefault(require("../conversation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const conversationDb = (0, _conversation2.default)({
  connectDb: _connect.default,
  model: _conversation.default
});
var _default = conversationDb;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYlNPTElEL3Bvc3RncmUtc3FsL2NvbnZlcnNhdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb252ZXJzYXRpb25EYiIsImNvbm5lY3REYiIsIm1vZGVsIiwiQ29udmVyc2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxjQUFjLEdBQUcsNEJBQVE7QUFBRUMsRUFBQUEsU0FBUyxFQUFFQSxnQkFBYjtBQUF3QkMsRUFBQUEsS0FBSyxFQUFFQztBQUEvQixDQUFSLENBQXZCO2VBRWVILGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udmVyc2F0aW9uIGZyb20gXCIuLi8uLi8uLi9tb2RlbHNTT0xJRC9jb252ZXJzYXRpb25cIjtcblxuaW1wb3J0IGNvbm5lY3REYiBmcm9tIFwiLi4vY29ubmVjdFwiO1xuaW1wb3J0IGJ1aWxkRGIgZnJvbSBcIi4uL2NvbnZlcnNhdGlvblwiO1xuXG5jb25zdCBjb252ZXJzYXRpb25EYiA9IGJ1aWxkRGIoeyBjb25uZWN0RGI6IGNvbm5lY3REYiwgbW9kZWw6IENvbnZlcnNhdGlvbiB9KTtcblxuZXhwb3J0IGRlZmF1bHQgY29udmVyc2F0aW9uRGI7XG4iXX0=