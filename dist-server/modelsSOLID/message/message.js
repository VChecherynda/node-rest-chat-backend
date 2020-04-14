"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(_ref) {
  var dbTypes = _ref.dbTypes;
  return {
    id: {
      type: dbTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: dbTypes.INTEGER,
      allowNull: false
    },
    conversationId: {
      type: dbTypes.INTEGER,
      allowNull: false
    },
    text: {
      type: dbTypes.String,
      allowNull: false
    }
  };
};

exports["default"] = _default;