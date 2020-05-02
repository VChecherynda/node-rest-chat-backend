"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = _interopRequireDefault(require("./user"));

var _conversation = _interopRequireDefault(require("./conversation"));

var _message = _interopRequireDefault(require("./message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_user.default.options = {
  modelName: "user"
};
_conversation.default.options = {
  modelName: "conversation"
};
_message.default.options = {
  modelName: "message"
};
var _default = {
  User: _user.default,
  Conversation: _conversation.default,
  Message: _message.default
};
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvaW5kZXguanMiXSwibmFtZXMiOlsiVXNlciIsIm9wdGlvbnMiLCJtb2RlbE5hbWUiLCJDb252ZXJzYXRpb24iLCJNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQUEsY0FBS0MsT0FBTCxHQUFlO0FBQ2JDLEVBQUFBLFNBQVMsRUFBRTtBQURFLENBQWY7QUFJQUMsc0JBQWFGLE9BQWIsR0FBdUI7QUFDckJDLEVBQUFBLFNBQVMsRUFBRTtBQURVLENBQXZCO0FBSUFFLGlCQUFRSCxPQUFSLEdBQWtCO0FBQ2hCQyxFQUFBQSxTQUFTLEVBQUU7QUFESyxDQUFsQjtlQUllO0FBQ2JGLEVBQUFBLElBQUksRUFBSkEsYUFEYTtBQUViRyxFQUFBQSxZQUFZLEVBQVpBLHFCQUZhO0FBR2JDLEVBQUFBLE9BQU8sRUFBUEE7QUFIYSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSBcIi4vdXNlclwiO1xuaW1wb3J0IENvbnZlcnNhdGlvbiBmcm9tIFwiLi9jb252ZXJzYXRpb25cIjtcbmltcG9ydCBNZXNzYWdlIGZyb20gXCIuL21lc3NhZ2VcIjtcblxuVXNlci5vcHRpb25zID0ge1xuICBtb2RlbE5hbWU6IFwidXNlclwiXG59O1xuXG5Db252ZXJzYXRpb24ub3B0aW9ucyA9IHtcbiAgbW9kZWxOYW1lOiBcImNvbnZlcnNhdGlvblwiXG59O1xuXG5NZXNzYWdlLm9wdGlvbnMgPSB7XG4gIG1vZGVsTmFtZTogXCJtZXNzYWdlXCJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVXNlcixcbiAgQ29udmVyc2F0aW9uLFxuICBNZXNzYWdlXG59O1xuIl19