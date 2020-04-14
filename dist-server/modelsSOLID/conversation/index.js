"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Id = _interopRequireDefault(require("../Id"));

var _conversation = _interopRequireDefault(require("./conversation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Here add special libraries to our model
var makeConversation = (0, _conversation["default"])({
  dbTypes: dbTypes
});
var _default = makeConversation;
exports["default"] = _default;