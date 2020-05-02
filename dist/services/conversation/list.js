"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _livr = _interopRequireDefault(require("livr"));

var _base = _interopRequireDefault(require("../base"));

var _conversation = _interopRequireDefault(require("../../models/conversation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_livr.default.Validator.defaultAutoTrim(true);

class List extends _base.default {
  async validate(data) {
    const rules = {
      data: "any_object"
    };
    const validator = new _livr.default.Validator(rules);
    this.validator = validator;
    return validator.validate(data);
  }

  async execute() {
    const savedConversations = await _conversation.default.findAllEntity(["id", "userOneId", "userTwoId"]);
    const cleanedSavedConversations = savedConversations.map(({
      id,
      userOneId,
      userTwoId
    }) => {
      return {
        id,
        userOneId,
        userTwoId
      };
    });
    return {
      status: 200,
      data: {
        conversations: cleanedSavedConversations
      }
    };
  }

}

exports.default = List;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9jb252ZXJzYXRpb24vbGlzdC5qcyJdLCJuYW1lcyI6WyJMaXZyIiwiVmFsaWRhdG9yIiwiZGVmYXVsdEF1dG9UcmltIiwiTGlzdCIsIkJhc2UiLCJ2YWxpZGF0ZSIsImRhdGEiLCJydWxlcyIsInZhbGlkYXRvciIsImV4ZWN1dGUiLCJzYXZlZENvbnZlcnNhdGlvbnMiLCJDb252ZXJzYXRpb24iLCJmaW5kQWxsRW50aXR5IiwiY2xlYW5lZFNhdmVkQ29udmVyc2F0aW9ucyIsIm1hcCIsImlkIiwidXNlck9uZUlkIiwidXNlclR3b0lkIiwic3RhdHVzIiwiY29udmVyc2F0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUNBOzs7O0FBSEFBLGNBQUtDLFNBQUwsQ0FBZUMsZUFBZixDQUErQixJQUEvQjs7QUFLZSxNQUFNQyxJQUFOLFNBQW1CQyxhQUFuQixDQUF3QjtBQUNyQyxRQUFNQyxRQUFOLENBQWVDLElBQWYsRUFBcUI7QUFDbkIsVUFBTUMsS0FBSyxHQUFHO0FBQUVELE1BQUFBLElBQUksRUFBRTtBQUFSLEtBQWQ7QUFFQSxVQUFNRSxTQUFTLEdBQUcsSUFBSVIsY0FBS0MsU0FBVCxDQUFtQk0sS0FBbkIsQ0FBbEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFdBQU9BLFNBQVMsQ0FBQ0gsUUFBVixDQUFtQkMsSUFBbkIsQ0FBUDtBQUNEOztBQUVELFFBQU1HLE9BQU4sR0FBZ0I7QUFDZCxVQUFNQyxrQkFBa0IsR0FBRyxNQUFNQyxzQkFBYUMsYUFBYixDQUEyQixDQUMxRCxJQUQwRCxFQUUxRCxXQUYwRCxFQUcxRCxXQUgwRCxDQUEzQixDQUFqQztBQU1BLFVBQU1DLHlCQUF5QixHQUFHSCxrQkFBa0IsQ0FBQ0ksR0FBbkIsQ0FDaEMsQ0FBQztBQUFFQyxNQUFBQSxFQUFGO0FBQU1DLE1BQUFBLFNBQU47QUFBaUJDLE1BQUFBO0FBQWpCLEtBQUQsS0FBa0M7QUFDaEMsYUFBTztBQUNMRixRQUFBQSxFQURLO0FBRUxDLFFBQUFBLFNBRks7QUFHTEMsUUFBQUE7QUFISyxPQUFQO0FBS0QsS0FQK0IsQ0FBbEM7QUFVQSxXQUFPO0FBQUVDLE1BQUFBLE1BQU0sRUFBRSxHQUFWO0FBQWVaLE1BQUFBLElBQUksRUFBRTtBQUFFYSxRQUFBQSxhQUFhLEVBQUVOO0FBQWpCO0FBQXJCLEtBQVA7QUFDRDs7QUEzQm9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpdnIgZnJvbSBcImxpdnJcIjtcbkxpdnIuVmFsaWRhdG9yLmRlZmF1bHRBdXRvVHJpbSh0cnVlKTtcblxuaW1wb3J0IEJhc2UgZnJvbSBcIi4uL2Jhc2VcIjtcbmltcG9ydCBDb252ZXJzYXRpb24gZnJvbSBcIi4uLy4uL21vZGVscy9jb252ZXJzYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIEJhc2Uge1xuICBhc3luYyB2YWxpZGF0ZShkYXRhKSB7XG4gICAgY29uc3QgcnVsZXMgPSB7IGRhdGE6IFwiYW55X29iamVjdFwiIH07XG5cbiAgICBjb25zdCB2YWxpZGF0b3IgPSBuZXcgTGl2ci5WYWxpZGF0b3IocnVsZXMpO1xuICAgIHRoaXMudmFsaWRhdG9yID0gdmFsaWRhdG9yO1xuICAgIHJldHVybiB2YWxpZGF0b3IudmFsaWRhdGUoZGF0YSk7XG4gIH1cblxuICBhc3luYyBleGVjdXRlKCkge1xuICAgIGNvbnN0IHNhdmVkQ29udmVyc2F0aW9ucyA9IGF3YWl0IENvbnZlcnNhdGlvbi5maW5kQWxsRW50aXR5KFtcbiAgICAgIFwiaWRcIixcbiAgICAgIFwidXNlck9uZUlkXCIsXG4gICAgICBcInVzZXJUd29JZFwiXG4gICAgXSk7XG5cbiAgICBjb25zdCBjbGVhbmVkU2F2ZWRDb252ZXJzYXRpb25zID0gc2F2ZWRDb252ZXJzYXRpb25zLm1hcChcbiAgICAgICh7IGlkLCB1c2VyT25lSWQsIHVzZXJUd29JZCB9KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgdXNlck9uZUlkLFxuICAgICAgICAgIHVzZXJUd29JZFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4geyBzdGF0dXM6IDIwMCwgZGF0YTogeyBjb252ZXJzYXRpb25zOiBjbGVhbmVkU2F2ZWRDb252ZXJzYXRpb25zIH0gfTtcbiAgfVxufVxuIl19