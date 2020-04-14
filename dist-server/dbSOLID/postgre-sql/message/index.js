"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _message = _interopRequireDefault(require("../../../modelsSOLID/message"));

var _connect = _interopRequireDefault(require("../connect"));

var _message2 = _interopRequireDefault(require("../message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var messageDb = (0, _message2["default"])({
  connectDb: _connect["default"],
  model: _message["default"]
});
var _default = messageDb;
exports["default"] = _default;