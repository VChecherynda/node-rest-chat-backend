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

class Update extends _base.default {
  async validate(data) {
    const rules = {
      data: ["required", {
        nested_object: {
          id: "required",
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
    const savedMessage = await _message.default.findById(data.id);
    savedMessage.text = data.text;
    const updatedMessage = await savedMessage.save();
    return {
      status: 201,
      data: {
        id: updatedMessage.toJSON().id,
        message: updatedMessage.toJSON().text
      }
    };
  }

}

exports.default = Update;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9tZXNzYWdlL3VwZGF0ZS5qcyJdLCJuYW1lcyI6WyJMaXZyIiwiVmFsaWRhdG9yIiwiZGVmYXVsdEF1dG9UcmltIiwiVXBkYXRlIiwiQmFzZSIsInZhbGlkYXRlIiwiZGF0YSIsInJ1bGVzIiwibmVzdGVkX29iamVjdCIsImlkIiwidGV4dCIsInZhbGlkYXRvciIsImV4ZWN1dGUiLCJjbGVhbkRhdGEiLCJzYXZlZE1lc3NhZ2UiLCJNZXNzYWdlIiwiZmluZEJ5SWQiLCJ1cGRhdGVkTWVzc2FnZSIsInNhdmUiLCJzdGF0dXMiLCJ0b0pTT04iLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBR0E7O0FBQ0E7Ozs7QUFIQUEsY0FBS0MsU0FBTCxDQUFlQyxlQUFmLENBQStCLElBQS9COztBQUtlLE1BQU1DLE1BQU4sU0FBcUJDLGFBQXJCLENBQTBCO0FBQ3ZDLFFBQU1DLFFBQU4sQ0FBZUMsSUFBZixFQUFxQjtBQUNuQixVQUFNQyxLQUFLLEdBQUc7QUFDWkQsTUFBQUEsSUFBSSxFQUFFLENBQ0osVUFESSxFQUVKO0FBQ0VFLFFBQUFBLGFBQWEsRUFBRTtBQUNiQyxVQUFBQSxFQUFFLEVBQUUsVUFEUztBQUViQyxVQUFBQSxJQUFJLEVBQUU7QUFGTztBQURqQixPQUZJO0FBRE0sS0FBZDtBQVlBLFVBQU1DLFNBQVMsR0FBRyxJQUFJWCxjQUFLQyxTQUFULENBQW1CTSxLQUFuQixDQUFsQjtBQUNBLFNBQUtJLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsV0FBT0EsU0FBUyxDQUFDTixRQUFWLENBQW1CQyxJQUFuQixDQUFQO0FBQ0Q7O0FBRUQsUUFBTU0sT0FBTixDQUFjQyxTQUFkLEVBQXlCO0FBQ3ZCLFVBQU07QUFBRVAsTUFBQUE7QUFBRixRQUFXTyxTQUFqQjtBQUVBLFVBQU1DLFlBQVksR0FBRyxNQUFNQyxpQkFBUUMsUUFBUixDQUFpQlYsSUFBSSxDQUFDRyxFQUF0QixDQUEzQjtBQUNBSyxJQUFBQSxZQUFZLENBQUNKLElBQWIsR0FBb0JKLElBQUksQ0FBQ0ksSUFBekI7QUFFQSxVQUFNTyxjQUFjLEdBQUcsTUFBTUgsWUFBWSxDQUFDSSxJQUFiLEVBQTdCO0FBRUEsV0FBTztBQUNMQyxNQUFBQSxNQUFNLEVBQUUsR0FESDtBQUVMYixNQUFBQSxJQUFJLEVBQUU7QUFDSkcsUUFBQUEsRUFBRSxFQUFFUSxjQUFjLENBQUNHLE1BQWYsR0FBd0JYLEVBRHhCO0FBRUpZLFFBQUFBLE9BQU8sRUFBRUosY0FBYyxDQUFDRyxNQUFmLEdBQXdCVjtBQUY3QjtBQUZELEtBQVA7QUFPRDs7QUFsQ3NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpdnIgZnJvbSBcImxpdnJcIjtcbkxpdnIuVmFsaWRhdG9yLmRlZmF1bHRBdXRvVHJpbSh0cnVlKTtcblxuaW1wb3J0IEJhc2UgZnJvbSBcIi4uL2Jhc2VcIjtcbmltcG9ydCBNZXNzYWdlIGZyb20gXCIuLi8uLi9tb2RlbHMvbWVzc2FnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGRhdGUgZXh0ZW5kcyBCYXNlIHtcbiAgYXN5bmMgdmFsaWRhdGUoZGF0YSkge1xuICAgIGNvbnN0IHJ1bGVzID0ge1xuICAgICAgZGF0YTogW1xuICAgICAgICBcInJlcXVpcmVkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBuZXN0ZWRfb2JqZWN0OiB7XG4gICAgICAgICAgICBpZDogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgdGV4dDogXCJyZXF1aXJlZFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcblxuICAgIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBMaXZyLlZhbGlkYXRvcihydWxlcyk7XG4gICAgdGhpcy52YWxpZGF0b3IgPSB2YWxpZGF0b3I7XG4gICAgcmV0dXJuIHZhbGlkYXRvci52YWxpZGF0ZShkYXRhKTtcbiAgfVxuXG4gIGFzeW5jIGV4ZWN1dGUoY2xlYW5EYXRhKSB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBjbGVhbkRhdGE7XG5cbiAgICBjb25zdCBzYXZlZE1lc3NhZ2UgPSBhd2FpdCBNZXNzYWdlLmZpbmRCeUlkKGRhdGEuaWQpO1xuICAgIHNhdmVkTWVzc2FnZS50ZXh0ID0gZGF0YS50ZXh0O1xuXG4gICAgY29uc3QgdXBkYXRlZE1lc3NhZ2UgPSBhd2FpdCBzYXZlZE1lc3NhZ2Uuc2F2ZSgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1czogMjAxLFxuICAgICAgZGF0YToge1xuICAgICAgICBpZDogdXBkYXRlZE1lc3NhZ2UudG9KU09OKCkuaWQsXG4gICAgICAgIG1lc3NhZ2U6IHVwZGF0ZWRNZXNzYWdlLnRvSlNPTigpLnRleHRcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=