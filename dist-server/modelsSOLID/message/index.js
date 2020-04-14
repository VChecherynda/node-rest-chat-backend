"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Id = _interopRequireDefault(require("../Id"));

var _message = _interopRequireDefault(require("./message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Here add special libraries to our model
var makeMessage = (0, _message["default"])({
  dbTypes: dbTypes
});
var _default = makeMessage;
exports["default"] = _default;