"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _livr = _interopRequireDefault(require("livr"));

var _user = _interopRequireDefault(require("../../models/user"));

var _base = _interopRequireDefault(require("../base"));

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

  async execute(cleanData) {
    const savedUsers = await _user.default.findAllEntity(["id", "name", "email"]);

    if (!savedUsers) {
      return {
        status: 404,
        data: "There is no users"
      };
    }

    const cleanedSavedUsers = savedUsers.map(({
      id,
      name,
      email
    }) => {
      return {
        id,
        name,
        email
      };
    });
    return {
      status: 200,
      data: {
        users: cleanedSavedUsers
      }
    };
  }

}

exports.default = List;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy91c2VyL2xpc3QuanMiXSwibmFtZXMiOlsiTGl2ciIsIlZhbGlkYXRvciIsImRlZmF1bHRBdXRvVHJpbSIsIkxpc3QiLCJCYXNlIiwidmFsaWRhdGUiLCJkYXRhIiwicnVsZXMiLCJ2YWxpZGF0b3IiLCJleGVjdXRlIiwiY2xlYW5EYXRhIiwic2F2ZWRVc2VycyIsIlVzZXIiLCJmaW5kQWxsRW50aXR5Iiwic3RhdHVzIiwiY2xlYW5lZFNhdmVkVXNlcnMiLCJtYXAiLCJpZCIsIm5hbWUiLCJlbWFpbCIsInVzZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBR0E7O0FBQ0E7Ozs7QUFIQUEsY0FBS0MsU0FBTCxDQUFlQyxlQUFmLENBQStCLElBQS9COztBQUtlLE1BQU1DLElBQU4sU0FBbUJDLGFBQW5CLENBQXdCO0FBQ3JDLFFBQU1DLFFBQU4sQ0FBZUMsSUFBZixFQUFxQjtBQUNuQixVQUFNQyxLQUFLLEdBQUc7QUFBRUQsTUFBQUEsSUFBSSxFQUFFO0FBQVIsS0FBZDtBQUVBLFVBQU1FLFNBQVMsR0FBRyxJQUFJUixjQUFLQyxTQUFULENBQW1CTSxLQUFuQixDQUFsQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsV0FBT0EsU0FBUyxDQUFDSCxRQUFWLENBQW1CQyxJQUFuQixDQUFQO0FBQ0Q7O0FBRUQsUUFBTUcsT0FBTixDQUFjQyxTQUFkLEVBQXlCO0FBQ3ZCLFVBQU1DLFVBQVUsR0FBRyxNQUFNQyxjQUFLQyxhQUFMLENBQW1CLENBQUMsSUFBRCxFQUFPLE1BQVAsRUFBZSxPQUFmLENBQW5CLENBQXpCOztBQUVBLFFBQUksQ0FBQ0YsVUFBTCxFQUFpQjtBQUNmLGFBQU87QUFBRUcsUUFBQUEsTUFBTSxFQUFFLEdBQVY7QUFBZVIsUUFBQUEsSUFBSSxFQUFFO0FBQXJCLE9BQVA7QUFDRDs7QUFFRCxVQUFNUyxpQkFBaUIsR0FBR0osVUFBVSxDQUFDSyxHQUFYLENBQWUsQ0FBQztBQUFFQyxNQUFBQSxFQUFGO0FBQU1DLE1BQUFBLElBQU47QUFBWUMsTUFBQUE7QUFBWixLQUFELEtBQXlCO0FBQ2hFLGFBQU87QUFDTEYsUUFBQUEsRUFESztBQUVMQyxRQUFBQSxJQUZLO0FBR0xDLFFBQUFBO0FBSEssT0FBUDtBQUtELEtBTnlCLENBQTFCO0FBUUEsV0FBTztBQUFFTCxNQUFBQSxNQUFNLEVBQUUsR0FBVjtBQUFlUixNQUFBQSxJQUFJLEVBQUU7QUFBRWMsUUFBQUEsS0FBSyxFQUFFTDtBQUFUO0FBQXJCLEtBQVA7QUFDRDs7QUF6Qm9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpdnIgZnJvbSBcImxpdnJcIjtcbkxpdnIuVmFsaWRhdG9yLmRlZmF1bHRBdXRvVHJpbSh0cnVlKTtcblxuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uL21vZGVscy91c2VyXCI7XG5pbXBvcnQgQmFzZSBmcm9tIFwiLi4vYmFzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgQmFzZSB7XG4gIGFzeW5jIHZhbGlkYXRlKGRhdGEpIHtcbiAgICBjb25zdCBydWxlcyA9IHsgZGF0YTogXCJhbnlfb2JqZWN0XCIgfTtcblxuICAgIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBMaXZyLlZhbGlkYXRvcihydWxlcyk7XG4gICAgdGhpcy52YWxpZGF0b3IgPSB2YWxpZGF0b3I7XG4gICAgcmV0dXJuIHZhbGlkYXRvci52YWxpZGF0ZShkYXRhKTtcbiAgfVxuXG4gIGFzeW5jIGV4ZWN1dGUoY2xlYW5EYXRhKSB7XG4gICAgY29uc3Qgc2F2ZWRVc2VycyA9IGF3YWl0IFVzZXIuZmluZEFsbEVudGl0eShbXCJpZFwiLCBcIm5hbWVcIiwgXCJlbWFpbFwiXSk7XG5cbiAgICBpZiAoIXNhdmVkVXNlcnMpIHtcbiAgICAgIHJldHVybiB7IHN0YXR1czogNDA0LCBkYXRhOiBcIlRoZXJlIGlzIG5vIHVzZXJzXCIgfTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkU2F2ZWRVc2VycyA9IHNhdmVkVXNlcnMubWFwKCh7IGlkLCBuYW1lLCBlbWFpbCB9KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZW1haWxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBzdGF0dXM6IDIwMCwgZGF0YTogeyB1c2VyczogY2xlYW5lZFNhdmVkVXNlcnMgfSB9O1xuICB9XG59XG4iXX0=