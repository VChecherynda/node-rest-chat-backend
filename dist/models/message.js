"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _v = _interopRequireDefault(require("uuid/v4"));

var _base = _interopRequireDefault(require("./base"));

var _user = _interopRequireDefault(require("./user"));

var _conversation = _interopRequireDefault(require("./conversation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Message extends _base.default {
  static initRelations() {
    this.associate = () => {
      this.hasOne(_user.default, {
        foreignKey: "userId"
      });
      this.hasOne(_conversation.default, {
        foreignKey: "conversationId"
      });
    };
  }

}

_defineProperty(Message, "schema", {
  id: {
    type: _sequelize.DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: (0, _v.default)()
  },
  userId: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  conversationId: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  text: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  }
});

var _default = Message;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvbWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJNZXNzYWdlIiwiQmFzZSIsImluaXRSZWxhdGlvbnMiLCJhc3NvY2lhdGUiLCJoYXNPbmUiLCJVc2VyIiwiZm9yZWlnbktleSIsIkNvbnZlcnNhdGlvbiIsImlkIiwidHlwZSIsIkRUIiwiVVVJRCIsInByaW1hcnlLZXkiLCJhbGxvd051bGwiLCJkZWZhdWx0VmFsdWUiLCJ1c2VySWQiLCJTVFJJTkciLCJjb252ZXJzYXRpb25JZCIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsTUFBTUEsT0FBTixTQUFzQkMsYUFBdEIsQ0FBMkI7QUFzQnpCLFNBQU9DLGFBQVAsR0FBdUI7QUFDckIsU0FBS0MsU0FBTCxHQUFpQixNQUFNO0FBQ3JCLFdBQUtDLE1BQUwsQ0FBWUMsYUFBWixFQUFrQjtBQUFFQyxRQUFBQSxVQUFVLEVBQUU7QUFBZCxPQUFsQjtBQUNBLFdBQUtGLE1BQUwsQ0FBWUcscUJBQVosRUFBMEI7QUFBRUQsUUFBQUEsVUFBVSxFQUFFO0FBQWQsT0FBMUI7QUFDRCxLQUhEO0FBSUQ7O0FBM0J3Qjs7Z0JBQXJCTixPLFlBQ1k7QUFDZFEsRUFBQUEsRUFBRSxFQUFFO0FBQ0ZDLElBQUFBLElBQUksRUFBRUMscUJBQUdDLElBRFA7QUFFRkMsSUFBQUEsVUFBVSxFQUFFLElBRlY7QUFHRkMsSUFBQUEsU0FBUyxFQUFFLEtBSFQ7QUFJRkMsSUFBQUEsWUFBWSxFQUFFO0FBSlosR0FEVTtBQU9kQyxFQUFBQSxNQUFNLEVBQUU7QUFDTk4sSUFBQUEsSUFBSSxFQUFFQyxxQkFBR00sTUFESDtBQUVOSCxJQUFBQSxTQUFTLEVBQUU7QUFGTCxHQVBNO0FBV2RJLEVBQUFBLGNBQWMsRUFBRTtBQUNkUixJQUFBQSxJQUFJLEVBQUVDLHFCQUFHTSxNQURLO0FBRWRILElBQUFBLFNBQVMsRUFBRTtBQUZHLEdBWEY7QUFlZEssRUFBQUEsSUFBSSxFQUFFO0FBQ0pULElBQUFBLElBQUksRUFBRUMscUJBQUdNLE1BREw7QUFFSkgsSUFBQUEsU0FBUyxFQUFFO0FBRlA7QUFmUSxDOztlQTZCSGIsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFUeXBlcyBhcyBEVCB9IGZyb20gXCJzZXF1ZWxpemVcIjtcbmltcG9ydCBVVUlEVjQgZnJvbSBcInV1aWQvdjRcIjtcblxuaW1wb3J0IEJhc2UgZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vdXNlclwiO1xuaW1wb3J0IENvbnZlcnNhdGlvbiBmcm9tIFwiLi9jb252ZXJzYXRpb25cIjtcblxuY2xhc3MgTWVzc2FnZSBleHRlbmRzIEJhc2Uge1xuICBzdGF0aWMgc2NoZW1hID0ge1xuICAgIGlkOiB7XG4gICAgICB0eXBlOiBEVC5VVUlELFxuICAgICAgcHJpbWFyeUtleTogdHJ1ZSxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBkZWZhdWx0VmFsdWU6IFVVSURWNCgpXG4gICAgfSxcbiAgICB1c2VySWQ6IHtcbiAgICAgIHR5cGU6IERULlNUUklORyxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIGNvbnZlcnNhdGlvbklkOiB7XG4gICAgICB0eXBlOiBEVC5TVFJJTkcsXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICB0eXBlOiBEVC5TVFJJTkcsXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfVxuICB9O1xuXG4gIHN0YXRpYyBpbml0UmVsYXRpb25zKCkge1xuICAgIHRoaXMuYXNzb2NpYXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5oYXNPbmUoVXNlciwgeyBmb3JlaWduS2V5OiBcInVzZXJJZFwiIH0pO1xuICAgICAgdGhpcy5oYXNPbmUoQ29udmVyc2F0aW9uLCB7IGZvcmVpZ25LZXk6IFwiY29udmVyc2F0aW9uSWRcIiB9KTtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2U7XG4iXX0=