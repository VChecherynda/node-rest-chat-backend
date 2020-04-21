"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _message = _interopRequireDefault(require("../../../modelsSOLID/message"));

var _connect = _interopRequireDefault(require("../connect"));

var _message2 = _interopRequireDefault(require("../message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const messageDb = (0, _message2.default)({
  connectDb: _connect.default,
  model: _message.default
});
var _default = messageDb;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYlNPTElEL3Bvc3RncmUtc3FsL21lc3NhZ2UvaW5kZXguanMiXSwibmFtZXMiOlsibWVzc2FnZURiIiwiY29ubmVjdERiIiwibW9kZWwiLCJDb252ZXJzYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7OztBQUVBLE1BQU1BLFNBQVMsR0FBRyx1QkFBUTtBQUFFQyxFQUFBQSxTQUFTLEVBQUVBLGdCQUFiO0FBQXdCQyxFQUFBQSxLQUFLLEVBQUVDO0FBQS9CLENBQVIsQ0FBbEI7ZUFFZUgsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb252ZXJzYXRpb24gZnJvbSBcIi4uLy4uLy4uL21vZGVsc1NPTElEL21lc3NhZ2VcIjtcblxuaW1wb3J0IGNvbm5lY3REYiBmcm9tIFwiLi4vY29ubmVjdFwiO1xuaW1wb3J0IGJ1aWxkRGIgZnJvbSBcIi4uL21lc3NhZ2VcIjtcblxuY29uc3QgbWVzc2FnZURiID0gYnVpbGREYih7IGNvbm5lY3REYjogY29ubmVjdERiLCBtb2RlbDogQ29udmVyc2F0aW9uIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBtZXNzYWdlRGI7XG4iXX0=