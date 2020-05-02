"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _livr = _interopRequireDefault(require("livr"));

var _base = _interopRequireDefault(require("../base"));

var _message = _interopRequireDefault(require("../../models/message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_livr.default.Validator.defaultAutoTrim(true);

class Delete extends _base.default {
  async validate(data) {
    const rules = {
      data: ["required", {
        nested_object: {
          id: "required"
        }
      }]
    };
    const validator = new _livr.default.Validator(rules);
    this.validator = validator;
    return validator.validate(data);
  }

  async execute(cleanData) {
    const {
      data
    } = cleanData;
    const savedMessage = await _message.default.findById(data.id);
    const deletedMessage = {
      messageId: savedMessage.id,
      conversationId: savedMessage.conversationId
    };
    await savedMessage.destroy();
    return {
      status: 201,
      data: { ...deletedMessage,
        message: "Message was deleted"
      }
    };
  }

}

exports.default = Delete;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9tZXNzYWdlL2RlbGV0ZS5qcyJdLCJuYW1lcyI6WyJMaXZyIiwiVmFsaWRhdG9yIiwiZGVmYXVsdEF1dG9UcmltIiwiRGVsZXRlIiwiQmFzZSIsInZhbGlkYXRlIiwiZGF0YSIsInJ1bGVzIiwibmVzdGVkX29iamVjdCIsImlkIiwidmFsaWRhdG9yIiwiZXhlY3V0ZSIsImNsZWFuRGF0YSIsInNhdmVkTWVzc2FnZSIsIk1lc3NhZ2UiLCJmaW5kQnlJZCIsImRlbGV0ZWRNZXNzYWdlIiwibWVzc2FnZUlkIiwiY29udmVyc2F0aW9uSWQiLCJkZXN0cm95Iiwic3RhdHVzIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUNBOzs7O0FBSEFBLGNBQUtDLFNBQUwsQ0FBZUMsZUFBZixDQUErQixJQUEvQjs7QUFLZSxNQUFNQyxNQUFOLFNBQXFCQyxhQUFyQixDQUEwQjtBQUN2QyxRQUFNQyxRQUFOLENBQWVDLElBQWYsRUFBcUI7QUFDbkIsVUFBTUMsS0FBSyxHQUFHO0FBQ1pELE1BQUFBLElBQUksRUFBRSxDQUNKLFVBREksRUFFSjtBQUNFRSxRQUFBQSxhQUFhLEVBQUU7QUFDYkMsVUFBQUEsRUFBRSxFQUFFO0FBRFM7QUFEakIsT0FGSTtBQURNLEtBQWQ7QUFXQSxVQUFNQyxTQUFTLEdBQUcsSUFBSVYsY0FBS0MsU0FBVCxDQUFtQk0sS0FBbkIsQ0FBbEI7QUFDQSxTQUFLRyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFdBQU9BLFNBQVMsQ0FBQ0wsUUFBVixDQUFtQkMsSUFBbkIsQ0FBUDtBQUNEOztBQUVELFFBQU1LLE9BQU4sQ0FBY0MsU0FBZCxFQUF5QjtBQUN2QixVQUFNO0FBQUVOLE1BQUFBO0FBQUYsUUFBV00sU0FBakI7QUFFQSxVQUFNQyxZQUFZLEdBQUcsTUFBTUMsaUJBQVFDLFFBQVIsQ0FBaUJULElBQUksQ0FBQ0csRUFBdEIsQ0FBM0I7QUFFQSxVQUFNTyxjQUFjLEdBQUc7QUFDckJDLE1BQUFBLFNBQVMsRUFBRUosWUFBWSxDQUFDSixFQURIO0FBRXJCUyxNQUFBQSxjQUFjLEVBQUVMLFlBQVksQ0FBQ0s7QUFGUixLQUF2QjtBQUtBLFVBQU1MLFlBQVksQ0FBQ00sT0FBYixFQUFOO0FBRUEsV0FBTztBQUNMQyxNQUFBQSxNQUFNLEVBQUUsR0FESDtBQUVMZCxNQUFBQSxJQUFJLEVBQUUsRUFDSixHQUFHVSxjQURDO0FBRUpLLFFBQUFBLE9BQU8sRUFBRTtBQUZMO0FBRkQsS0FBUDtBQU9EOztBQXJDc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGl2ciBmcm9tIFwibGl2clwiO1xuTGl2ci5WYWxpZGF0b3IuZGVmYXVsdEF1dG9UcmltKHRydWUpO1xuXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi4vYmFzZVwiO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIi4uLy4uL21vZGVscy9tZXNzYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbGV0ZSBleHRlbmRzIEJhc2Uge1xuICBhc3luYyB2YWxpZGF0ZShkYXRhKSB7XG4gICAgY29uc3QgcnVsZXMgPSB7XG4gICAgICBkYXRhOiBbXG4gICAgICAgIFwicmVxdWlyZWRcIixcbiAgICAgICAge1xuICAgICAgICAgIG5lc3RlZF9vYmplY3Q6IHtcbiAgICAgICAgICAgIGlkOiBcInJlcXVpcmVkXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuXG4gICAgY29uc3QgdmFsaWRhdG9yID0gbmV3IExpdnIuVmFsaWRhdG9yKHJ1bGVzKTtcbiAgICB0aGlzLnZhbGlkYXRvciA9IHZhbGlkYXRvcjtcbiAgICByZXR1cm4gdmFsaWRhdG9yLnZhbGlkYXRlKGRhdGEpO1xuICB9XG5cbiAgYXN5bmMgZXhlY3V0ZShjbGVhbkRhdGEpIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGNsZWFuRGF0YTtcblxuICAgIGNvbnN0IHNhdmVkTWVzc2FnZSA9IGF3YWl0IE1lc3NhZ2UuZmluZEJ5SWQoZGF0YS5pZCk7XG5cbiAgICBjb25zdCBkZWxldGVkTWVzc2FnZSA9IHtcbiAgICAgIG1lc3NhZ2VJZDogc2F2ZWRNZXNzYWdlLmlkLFxuICAgICAgY29udmVyc2F0aW9uSWQ6IHNhdmVkTWVzc2FnZS5jb252ZXJzYXRpb25JZFxuICAgIH07XG5cbiAgICBhd2FpdCBzYXZlZE1lc3NhZ2UuZGVzdHJveSgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1czogMjAxLFxuICAgICAgZGF0YToge1xuICAgICAgICAuLi5kZWxldGVkTWVzc2FnZSxcbiAgICAgICAgbWVzc2FnZTogXCJNZXNzYWdlIHdhcyBkZWxldGVkXCJcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=