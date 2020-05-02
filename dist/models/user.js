"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _v = _interopRequireDefault(require("uuid/v4"));

var _base = _interopRequireDefault(require("./base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class User extends _base.default {}

_defineProperty(User, "schema", {
  id: {
    type: _sequelize.DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: (0, _v.default)()
  },
  name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  }
});

var _default = User;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvdXNlci5qcyJdLCJuYW1lcyI6WyJVc2VyIiwiQmFzZSIsImlkIiwidHlwZSIsIkRUIiwiVVVJRCIsInByaW1hcnlLZXkiLCJhbGxvd051bGwiLCJkZWZhdWx0VmFsdWUiLCJuYW1lIiwiU1RSSU5HIiwiZW1haWwiLCJwYXNzd29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7QUFFQSxNQUFNQSxJQUFOLFNBQW1CQyxhQUFuQixDQUF3Qjs7Z0JBQWxCRCxJLFlBQ1k7QUFDZEUsRUFBQUEsRUFBRSxFQUFFO0FBQ0ZDLElBQUFBLElBQUksRUFBRUMscUJBQUdDLElBRFA7QUFFRkMsSUFBQUEsVUFBVSxFQUFFLElBRlY7QUFHRkMsSUFBQUEsU0FBUyxFQUFFLEtBSFQ7QUFJRkMsSUFBQUEsWUFBWSxFQUFFO0FBSlosR0FEVTtBQU9kQyxFQUFBQSxJQUFJLEVBQUU7QUFBRU4sSUFBQUEsSUFBSSxFQUFFQyxxQkFBR00sTUFBWDtBQUFtQkgsSUFBQUEsU0FBUyxFQUFFO0FBQTlCLEdBUFE7QUFRZEksRUFBQUEsS0FBSyxFQUFFO0FBQUVSLElBQUFBLElBQUksRUFBRUMscUJBQUdNLE1BQVg7QUFBbUJILElBQUFBLFNBQVMsRUFBRTtBQUE5QixHQVJPO0FBU2RLLEVBQUFBLFFBQVEsRUFBRTtBQUFFVCxJQUFBQSxJQUFJLEVBQUVDLHFCQUFHTSxNQUFYO0FBQW1CSCxJQUFBQSxTQUFTLEVBQUU7QUFBOUI7QUFUSSxDOztlQWFIUCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVR5cGVzIGFzIERUIH0gZnJvbSBcInNlcXVlbGl6ZVwiO1xuaW1wb3J0IFVVSURWNCBmcm9tIFwidXVpZC92NFwiO1xuXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9iYXNlXCI7XG5cbmNsYXNzIFVzZXIgZXh0ZW5kcyBCYXNlIHtcbiAgc3RhdGljIHNjaGVtYSA9IHtcbiAgICBpZDoge1xuICAgICAgdHlwZTogRFQuVVVJRCxcbiAgICAgIHByaW1hcnlLZXk6IHRydWUsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBVVUlEVjQoKVxuICAgIH0sXG4gICAgbmFtZTogeyB0eXBlOiBEVC5TVFJJTkcsIGFsbG93TnVsbDogZmFsc2UgfSxcbiAgICBlbWFpbDogeyB0eXBlOiBEVC5TVFJJTkcsIGFsbG93TnVsbDogZmFsc2UgfSxcbiAgICBwYXNzd29yZDogeyB0eXBlOiBEVC5TVFJJTkcsIGFsbG93TnVsbDogZmFsc2UgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIl19