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

class Create extends _base.default {
  async validate(data) {
    const rules = {
      data: ["required", {
        nested_object: {
          userOneId: "required",
          userTwoId: "required"
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
    const savedConversation = await _conversation.default.findOneEntity("userTwoId", data.userTwoId);

    if (savedConversation) {
      return {
        status: 403,
        data: "Conversation is exists"
      };
    }

    const conversation = await _conversation.default.create({
      userOneId: data.userOneId,
      userTwoId: data.userTwoId
    });
    return {
      status: 201,
      data: {
        id: conversation.id,
        message: "Conversation created"
      }
    };
  }

}

exports.default = Create;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9jb252ZXJzYXRpb24vY3JlYXRlLmpzIl0sIm5hbWVzIjpbIkxpdnIiLCJWYWxpZGF0b3IiLCJkZWZhdWx0QXV0b1RyaW0iLCJDcmVhdGUiLCJCYXNlIiwidmFsaWRhdGUiLCJkYXRhIiwicnVsZXMiLCJuZXN0ZWRfb2JqZWN0IiwidXNlck9uZUlkIiwidXNlclR3b0lkIiwidmFsaWRhdG9yIiwiZXhlY3V0ZSIsImNsZWFuRGF0YSIsInNhdmVkQ29udmVyc2F0aW9uIiwiQ29udmVyc2F0aW9uIiwiZmluZE9uZUVudGl0eSIsInN0YXR1cyIsImNvbnZlcnNhdGlvbiIsImNyZWF0ZSIsImlkIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUNBOzs7O0FBSEFBLGNBQUtDLFNBQUwsQ0FBZUMsZUFBZixDQUErQixJQUEvQjs7QUFLZSxNQUFNQyxNQUFOLFNBQXFCQyxhQUFyQixDQUEwQjtBQUN2QyxRQUFNQyxRQUFOLENBQWVDLElBQWYsRUFBcUI7QUFDbkIsVUFBTUMsS0FBSyxHQUFHO0FBQ1pELE1BQUFBLElBQUksRUFBRSxDQUNKLFVBREksRUFFSjtBQUNFRSxRQUFBQSxhQUFhLEVBQUU7QUFDYkMsVUFBQUEsU0FBUyxFQUFFLFVBREU7QUFFYkMsVUFBQUEsU0FBUyxFQUFFO0FBRkU7QUFEakIsT0FGSTtBQURNLEtBQWQ7QUFZQSxVQUFNQyxTQUFTLEdBQUcsSUFBSVgsY0FBS0MsU0FBVCxDQUFtQk0sS0FBbkIsQ0FBbEI7QUFDQSxTQUFLSSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFdBQU9BLFNBQVMsQ0FBQ04sUUFBVixDQUFtQkMsSUFBbkIsQ0FBUDtBQUNEOztBQUVELFFBQU1NLE9BQU4sQ0FBY0MsU0FBZCxFQUF5QjtBQUN2QixVQUFNO0FBQUVQLE1BQUFBO0FBQUYsUUFBV08sU0FBakI7QUFFQSxVQUFNQyxpQkFBaUIsR0FBRyxNQUFNQyxzQkFBYUMsYUFBYixDQUM5QixXQUQ4QixFQUU5QlYsSUFBSSxDQUFDSSxTQUZ5QixDQUFoQzs7QUFLQSxRQUFJSSxpQkFBSixFQUF1QjtBQUNyQixhQUFPO0FBQ0xHLFFBQUFBLE1BQU0sRUFBRSxHQURIO0FBRUxYLFFBQUFBLElBQUksRUFBRTtBQUZELE9BQVA7QUFJRDs7QUFFRCxVQUFNWSxZQUFZLEdBQUcsTUFBTUgsc0JBQWFJLE1BQWIsQ0FBb0I7QUFDN0NWLE1BQUFBLFNBQVMsRUFBRUgsSUFBSSxDQUFDRyxTQUQ2QjtBQUU3Q0MsTUFBQUEsU0FBUyxFQUFFSixJQUFJLENBQUNJO0FBRjZCLEtBQXBCLENBQTNCO0FBS0EsV0FBTztBQUNMTyxNQUFBQSxNQUFNLEVBQUUsR0FESDtBQUVMWCxNQUFBQSxJQUFJLEVBQUU7QUFBRWMsUUFBQUEsRUFBRSxFQUFFRixZQUFZLENBQUNFLEVBQW5CO0FBQXVCQyxRQUFBQSxPQUFPLEVBQUU7QUFBaEM7QUFGRCxLQUFQO0FBSUQ7O0FBM0NzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaXZyIGZyb20gXCJsaXZyXCI7XG5MaXZyLlZhbGlkYXRvci5kZWZhdWx0QXV0b1RyaW0odHJ1ZSk7XG5cbmltcG9ydCBCYXNlIGZyb20gXCIuLi9iYXNlXCI7XG5pbXBvcnQgQ29udmVyc2F0aW9uIGZyb20gXCIuLi8uLi9tb2RlbHMvY29udmVyc2F0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZSBleHRlbmRzIEJhc2Uge1xuICBhc3luYyB2YWxpZGF0ZShkYXRhKSB7XG4gICAgY29uc3QgcnVsZXMgPSB7XG4gICAgICBkYXRhOiBbXG4gICAgICAgIFwicmVxdWlyZWRcIixcbiAgICAgICAge1xuICAgICAgICAgIG5lc3RlZF9vYmplY3Q6IHtcbiAgICAgICAgICAgIHVzZXJPbmVJZDogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgdXNlclR3b0lkOiBcInJlcXVpcmVkXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuXG4gICAgY29uc3QgdmFsaWRhdG9yID0gbmV3IExpdnIuVmFsaWRhdG9yKHJ1bGVzKTtcbiAgICB0aGlzLnZhbGlkYXRvciA9IHZhbGlkYXRvcjtcbiAgICByZXR1cm4gdmFsaWRhdG9yLnZhbGlkYXRlKGRhdGEpO1xuICB9XG5cbiAgYXN5bmMgZXhlY3V0ZShjbGVhbkRhdGEpIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGNsZWFuRGF0YTtcblxuICAgIGNvbnN0IHNhdmVkQ29udmVyc2F0aW9uID0gYXdhaXQgQ29udmVyc2F0aW9uLmZpbmRPbmVFbnRpdHkoXG4gICAgICBcInVzZXJUd29JZFwiLFxuICAgICAgZGF0YS51c2VyVHdvSWRcbiAgICApO1xuXG4gICAgaWYgKHNhdmVkQ29udmVyc2F0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6IDQwMyxcbiAgICAgICAgZGF0YTogXCJDb252ZXJzYXRpb24gaXMgZXhpc3RzXCJcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgY29udmVyc2F0aW9uID0gYXdhaXQgQ29udmVyc2F0aW9uLmNyZWF0ZSh7XG4gICAgICB1c2VyT25lSWQ6IGRhdGEudXNlck9uZUlkLFxuICAgICAgdXNlclR3b0lkOiBkYXRhLnVzZXJUd29JZFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1czogMjAxLFxuICAgICAgZGF0YTogeyBpZDogY29udmVyc2F0aW9uLmlkLCBtZXNzYWdlOiBcIkNvbnZlcnNhdGlvbiBjcmVhdGVkXCIgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==