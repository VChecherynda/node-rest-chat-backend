"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _user = _interopRequireDefault(require("./user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Here add special libraries to our model
var makeUser = (0, _user["default"])({
  dbTypes: _sequelize.DataTypes
});
var _default = makeUser;
exports["default"] = _default;