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

class Create extends _base.default {
  async validate(data) {
    const rules = {
      data: ["required", {
        nested_object: {
          userId: "required",
          conversationId: "required",
          text: "required"
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

    if (!data.text) {
      return {
        status: 403,
        data: {
          message: "Message could not be empty"
        }
      };
    }

    const savedConversation = await _message.default.create({
      userId: data.userId,
      conversationId: data.conversationId,
      text: data.text
    });
    return {
      status: 201,
      data: {
        id: savedConversation.toJSON().id,
        userId: data.userId,
        conversationId: data.conversationId,
        text: savedConversation.toJSON().text,
        createdAt: savedConversation.toJSON().createdAt
      }
    };
  }

}

exports.default = Create;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9tZXNzYWdlL2NyZWF0ZS5qcyJdLCJuYW1lcyI6WyJMaXZyIiwiVmFsaWRhdG9yIiwiZGVmYXVsdEF1dG9UcmltIiwiQ3JlYXRlIiwiQmFzZSIsInZhbGlkYXRlIiwiZGF0YSIsInJ1bGVzIiwibmVzdGVkX29iamVjdCIsInVzZXJJZCIsImNvbnZlcnNhdGlvbklkIiwidGV4dCIsInZhbGlkYXRvciIsImV4ZWN1dGUiLCJjbGVhbkRhdGEiLCJzdGF0dXMiLCJtZXNzYWdlIiwic2F2ZWRDb252ZXJzYXRpb24iLCJNZXNzYWdlIiwiY3JlYXRlIiwiaWQiLCJ0b0pTT04iLCJjcmVhdGVkQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7OztBQUhBQSxjQUFLQyxTQUFMLENBQWVDLGVBQWYsQ0FBK0IsSUFBL0I7O0FBS2UsTUFBTUMsTUFBTixTQUFxQkMsYUFBckIsQ0FBMEI7QUFDdkMsUUFBTUMsUUFBTixDQUFlQyxJQUFmLEVBQXFCO0FBQ25CLFVBQU1DLEtBQUssR0FBRztBQUNaRCxNQUFBQSxJQUFJLEVBQUUsQ0FDSixVQURJLEVBRUo7QUFDRUUsUUFBQUEsYUFBYSxFQUFFO0FBQ2JDLFVBQUFBLE1BQU0sRUFBRSxVQURLO0FBRWJDLFVBQUFBLGNBQWMsRUFBRSxVQUZIO0FBR2JDLFVBQUFBLElBQUksRUFBRTtBQUhPO0FBRGpCLE9BRkk7QUFETSxLQUFkO0FBYUEsVUFBTUMsU0FBUyxHQUFHLElBQUlaLGNBQUtDLFNBQVQsQ0FBbUJNLEtBQW5CLENBQWxCO0FBQ0EsU0FBS0ssU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxXQUFPQSxTQUFTLENBQUNQLFFBQVYsQ0FBbUJDLElBQW5CLENBQVA7QUFDRDs7QUFFRCxRQUFNTyxPQUFOLENBQWNDLFNBQWQsRUFBeUI7QUFDdkIsVUFBTTtBQUFFUixNQUFBQTtBQUFGLFFBQVdRLFNBQWpCOztBQUVBLFFBQUksQ0FBQ1IsSUFBSSxDQUFDSyxJQUFWLEVBQWdCO0FBQ2QsYUFBTztBQUNMSSxRQUFBQSxNQUFNLEVBQUUsR0FESDtBQUVMVCxRQUFBQSxJQUFJLEVBQUU7QUFBRVUsVUFBQUEsT0FBTyxFQUFFO0FBQVg7QUFGRCxPQUFQO0FBSUQ7O0FBRUQsVUFBTUMsaUJBQWlCLEdBQUcsTUFBTUMsaUJBQVFDLE1BQVIsQ0FBZTtBQUM3Q1YsTUFBQUEsTUFBTSxFQUFFSCxJQUFJLENBQUNHLE1BRGdDO0FBRTdDQyxNQUFBQSxjQUFjLEVBQUVKLElBQUksQ0FBQ0ksY0FGd0I7QUFHN0NDLE1BQUFBLElBQUksRUFBRUwsSUFBSSxDQUFDSztBQUhrQyxLQUFmLENBQWhDO0FBTUEsV0FBTztBQUNMSSxNQUFBQSxNQUFNLEVBQUUsR0FESDtBQUVMVCxNQUFBQSxJQUFJLEVBQUU7QUFDSmMsUUFBQUEsRUFBRSxFQUFFSCxpQkFBaUIsQ0FBQ0ksTUFBbEIsR0FBMkJELEVBRDNCO0FBRUpYLFFBQUFBLE1BQU0sRUFBRUgsSUFBSSxDQUFDRyxNQUZUO0FBR0pDLFFBQUFBLGNBQWMsRUFBRUosSUFBSSxDQUFDSSxjQUhqQjtBQUlKQyxRQUFBQSxJQUFJLEVBQUVNLGlCQUFpQixDQUFDSSxNQUFsQixHQUEyQlYsSUFKN0I7QUFLSlcsUUFBQUEsU0FBUyxFQUFFTCxpQkFBaUIsQ0FBQ0ksTUFBbEIsR0FBMkJDO0FBTGxDO0FBRkQsS0FBUDtBQVVEOztBQTlDc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGl2ciBmcm9tIFwibGl2clwiO1xuTGl2ci5WYWxpZGF0b3IuZGVmYXVsdEF1dG9UcmltKHRydWUpO1xuXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi4vYmFzZVwiO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIi4uLy4uL21vZGVscy9tZXNzYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZSBleHRlbmRzIEJhc2Uge1xuICBhc3luYyB2YWxpZGF0ZShkYXRhKSB7XG4gICAgY29uc3QgcnVsZXMgPSB7XG4gICAgICBkYXRhOiBbXG4gICAgICAgIFwicmVxdWlyZWRcIixcbiAgICAgICAge1xuICAgICAgICAgIG5lc3RlZF9vYmplY3Q6IHtcbiAgICAgICAgICAgIHVzZXJJZDogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgY29udmVyc2F0aW9uSWQ6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgIHRleHQ6IFwicmVxdWlyZWRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG5cbiAgICBjb25zdCB2YWxpZGF0b3IgPSBuZXcgTGl2ci5WYWxpZGF0b3IocnVsZXMpO1xuICAgIHRoaXMudmFsaWRhdG9yID0gdmFsaWRhdG9yO1xuICAgIHJldHVybiB2YWxpZGF0b3IudmFsaWRhdGUoZGF0YSk7XG4gIH1cblxuICBhc3luYyBleGVjdXRlKGNsZWFuRGF0YSkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gY2xlYW5EYXRhO1xuXG4gICAgaWYgKCFkYXRhLnRleHQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogNDAzLFxuICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6IFwiTWVzc2FnZSBjb3VsZCBub3QgYmUgZW1wdHlcIiB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHNhdmVkQ29udmVyc2F0aW9uID0gYXdhaXQgTWVzc2FnZS5jcmVhdGUoe1xuICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcbiAgICAgIGNvbnZlcnNhdGlvbklkOiBkYXRhLmNvbnZlcnNhdGlvbklkLFxuICAgICAgdGV4dDogZGF0YS50ZXh0XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzOiAyMDEsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiBzYXZlZENvbnZlcnNhdGlvbi50b0pTT04oKS5pZCxcbiAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcbiAgICAgICAgY29udmVyc2F0aW9uSWQ6IGRhdGEuY29udmVyc2F0aW9uSWQsXG4gICAgICAgIHRleHQ6IHNhdmVkQ29udmVyc2F0aW9uLnRvSlNPTigpLnRleHQsXG4gICAgICAgIGNyZWF0ZWRBdDogc2F2ZWRDb252ZXJzYXRpb24udG9KU09OKCkuY3JlYXRlZEF0XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19