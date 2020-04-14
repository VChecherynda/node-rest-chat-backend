"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(dbTypes) {
  return {
    id: {
      type: dbTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: dbTypes.STRING,
      allowNull: false
    },
    email: {
      type: dbTypes.STRING,
      allowNull: false
    },
    password: {
      type: dbTypes.STRING,
      allowNull: false
    }
  };
};

exports["default"] = _default;