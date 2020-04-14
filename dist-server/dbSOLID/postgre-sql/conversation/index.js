"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _conversation = _interopRequireDefault(require("../../../modelsSOLID/conversation"));

var _connect = _interopRequireDefault(require("../connect"));

var _conversation2 = _interopRequireDefault(require("../conversation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var conversationDb = (0, _conversation2["default"])({
  connectDb: _connect["default"],
  model: _conversation["default"]
});
var _default = conversationDb;
exports["default"] = _default;