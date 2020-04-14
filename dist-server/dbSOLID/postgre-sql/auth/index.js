"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireDefault(require("../../../modelsSOLID/user"));

var _connect = _interopRequireDefault(require("../connect"));

var _auth = _interopRequireDefault(require("./auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var conversationDb = (0, _auth["default"])({
  connectDb: _connect["default"],
  model: _user["default"]
});
var _default = conversationDb;
exports["default"] = _default;