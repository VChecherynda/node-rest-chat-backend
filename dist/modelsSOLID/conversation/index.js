"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Id = _interopRequireDefault(require("../Id"));

var _conversation = _interopRequireDefault(require("./conversation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Here add special libraries to our model
const makeConversation = (0, _conversation.default)({
  dbTypes
});
var _default = makeConversation;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHNTT0xJRC9jb252ZXJzYXRpb24vaW5kZXguanMiXSwibmFtZXMiOlsibWFrZUNvbnZlcnNhdGlvbiIsImRiVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFFQTs7OztBQUhBO0FBS0EsTUFBTUEsZ0JBQWdCLEdBQUcsMkJBQXNCO0FBQUVDLEVBQUFBO0FBQUYsQ0FBdEIsQ0FBekI7ZUFFZUQsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIZXJlIGFkZCBzcGVjaWFsIGxpYnJhcmllcyB0byBvdXIgbW9kZWxcbmltcG9ydCBJZCBmcm9tIFwiLi4vSWRcIjtcblxuaW1wb3J0IGJ1aWxkTWFrZUNvbnZlcnNhdGlvbiBmcm9tIFwiLi9jb252ZXJzYXRpb25cIjtcblxuY29uc3QgbWFrZUNvbnZlcnNhdGlvbiA9IGJ1aWxkTWFrZUNvbnZlcnNhdGlvbih7IGRiVHlwZXMgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VDb252ZXJzYXRpb247XG4iXX0=