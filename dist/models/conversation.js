"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _v = _interopRequireDefault(require("uuid/v4"));

var _base = _interopRequireDefault(require("./base"));

var _user = _interopRequireDefault(require("./user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Conversation extends _base.default {
  static initRelations() {
    this.associate = () => {
      this.hasOne(_user.default, {
        foreignKey: "userOneId"
      });
      this.hasOne(_user.default, {
        foreignKey: "userTwoId"
      });
    };
  }

}

_defineProperty(Conversation, "schema", {
  id: {
    type: _sequelize.DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: (0, _v.default)()
  },
  userOneId: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  userTwoId: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  }
});

var _default = Conversation;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvY29udmVyc2F0aW9uLmpzIl0sIm5hbWVzIjpbIkNvbnZlcnNhdGlvbiIsIkJhc2UiLCJpbml0UmVsYXRpb25zIiwiYXNzb2NpYXRlIiwiaGFzT25lIiwiVXNlciIsImZvcmVpZ25LZXkiLCJpZCIsInR5cGUiLCJEVCIsIlVVSUQiLCJwcmltYXJ5S2V5IiwiYWxsb3dOdWxsIiwiZGVmYXVsdFZhbHVlIiwidXNlck9uZUlkIiwiU1RSSU5HIiwidXNlclR3b0lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7OztBQUVBLE1BQU1BLFlBQU4sU0FBMkJDLGFBQTNCLENBQWdDO0FBa0I5QixTQUFPQyxhQUFQLEdBQXVCO0FBQ3JCLFNBQUtDLFNBQUwsR0FBaUIsTUFBTTtBQUNyQixXQUFLQyxNQUFMLENBQVlDLGFBQVosRUFBa0I7QUFBRUMsUUFBQUEsVUFBVSxFQUFFO0FBQWQsT0FBbEI7QUFDQSxXQUFLRixNQUFMLENBQVlDLGFBQVosRUFBa0I7QUFBRUMsUUFBQUEsVUFBVSxFQUFFO0FBQWQsT0FBbEI7QUFDRCxLQUhEO0FBSUQ7O0FBdkI2Qjs7Z0JBQTFCTixZLFlBQ1k7QUFDZE8sRUFBQUEsRUFBRSxFQUFFO0FBQ0ZDLElBQUFBLElBQUksRUFBRUMscUJBQUdDLElBRFA7QUFFRkMsSUFBQUEsVUFBVSxFQUFFLElBRlY7QUFHRkMsSUFBQUEsU0FBUyxFQUFFLEtBSFQ7QUFJRkMsSUFBQUEsWUFBWSxFQUFFO0FBSlosR0FEVTtBQU9kQyxFQUFBQSxTQUFTLEVBQUU7QUFDVE4sSUFBQUEsSUFBSSxFQUFFQyxxQkFBR00sTUFEQTtBQUVUSCxJQUFBQSxTQUFTLEVBQUU7QUFGRixHQVBHO0FBV2RJLEVBQUFBLFNBQVMsRUFBRTtBQUNUUixJQUFBQSxJQUFJLEVBQUVDLHFCQUFHTSxNQURBO0FBRVRILElBQUFBLFNBQVMsRUFBRTtBQUZGO0FBWEcsQzs7ZUF5QkhaLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhVHlwZXMgYXMgRFQgfSBmcm9tIFwic2VxdWVsaXplXCI7XG5pbXBvcnQgVVVJRFY0IGZyb20gXCJ1dWlkL3Y0XCI7XG5cbmltcG9ydCBCYXNlIGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuL3VzZXJcIjtcblxuY2xhc3MgQ29udmVyc2F0aW9uIGV4dGVuZHMgQmFzZSB7XG4gIHN0YXRpYyBzY2hlbWEgPSB7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IERULlVVSUQsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogVVVJRFY0KClcbiAgICB9LFxuICAgIHVzZXJPbmVJZDoge1xuICAgICAgdHlwZTogRFQuU1RSSU5HLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgdXNlclR3b0lkOiB7XG4gICAgICB0eXBlOiBEVC5TVFJJTkcsXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfVxuICB9O1xuXG4gIHN0YXRpYyBpbml0UmVsYXRpb25zKCkge1xuICAgIHRoaXMuYXNzb2NpYXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5oYXNPbmUoVXNlciwgeyBmb3JlaWduS2V5OiBcInVzZXJPbmVJZFwiIH0pO1xuICAgICAgdGhpcy5oYXNPbmUoVXNlciwgeyBmb3JlaWduS2V5OiBcInVzZXJUd29JZFwiIH0pO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udmVyc2F0aW9uO1xuIl19