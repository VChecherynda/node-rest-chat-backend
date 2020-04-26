"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = _interopRequireDefault(require("../../../modelsSOLID/user"));

var _connect = _interopRequireDefault(require("../connect"));

var _auth = _interopRequireDefault(require("./auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const conversationDb = (0, _auth.default)({
  connectDb: _connect.default,
  model: _user.default
});
var _default = conversationDb;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYlNPTElEL3Bvc3RncmUtc3FsL2F1dGgvaW5kZXguanMiXSwibmFtZXMiOlsiY29udmVyc2F0aW9uRGIiLCJjb25uZWN0RGIiLCJtb2RlbCIsIlVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7OztBQUVBLE1BQU1BLGNBQWMsR0FBRyxtQkFBUTtBQUFFQyxFQUFBQSxTQUFTLEVBQUVBLGdCQUFiO0FBQXdCQyxFQUFBQSxLQUFLLEVBQUVDO0FBQS9CLENBQVIsQ0FBdkI7ZUFFZUgsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gXCIuLi8uLi8uLi9tb2RlbHNTT0xJRC91c2VyXCI7XG5cbmltcG9ydCBjb25uZWN0RGIgZnJvbSBcIi4uL2Nvbm5lY3RcIjtcbmltcG9ydCBidWlsZERiIGZyb20gXCIuL2F1dGhcIjtcblxuY29uc3QgY29udmVyc2F0aW9uRGIgPSBidWlsZERiKHsgY29ubmVjdERiOiBjb25uZWN0RGIsIG1vZGVsOiBVc2VyIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb252ZXJzYXRpb25EYjtcbiJdfQ==