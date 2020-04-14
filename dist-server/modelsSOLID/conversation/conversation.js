"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// In this file we describe how out model would look like
// Here we don't use any dependencies
var _default = function _default(_ref) {
  var dbTypes = _ref.dbTypes;
  return {
    id: {
      type: dbTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    userOneId: {
      type: dbTypes.INTEGER,
      allowNull: false
    },
    userTwoId: {
      type: dbTypes.INTEGER,
      allowNull: false
    }
  };
};

exports["default"] = _default;