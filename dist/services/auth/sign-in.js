"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _livr = _interopRequireDefault(require("livr"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _user = _interopRequireDefault(require("../../models/user"));

var _base = _interopRequireDefault(require("../base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_livr.default.Validator.defaultAutoTrim(true);

class SignIn extends _base.default {
  async validate(data) {
    const rules = {
      data: ["required", {
        nested_object: {
          email: "required",
          password: ["required", {
            min_length: 6
          }]
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
    const savedUser = await _user.default.findOneEntity("email", data.email);

    if (!savedUser) {
      return {
        status: 401,
        data: "Invalid email or password"
      };
    }

    const isMatch = await _bcryptjs.default.compare(data.password, savedUser.password);

    if (isMatch) {
      const token = _jsonwebtoken.default.sign({
        id: savedUser.id,
        email: savedUser.email
      }, "superDuperSecretKey", {
        expiresIn: "1h"
      });

      return {
        status: 200,
        data: {
          id: savedUser.id,
          token: token
        }
      };
    }
  }

}

exports.default = SignIn;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9hdXRoL3NpZ24taW4uanMiXSwibmFtZXMiOlsiTGl2ciIsIlZhbGlkYXRvciIsImRlZmF1bHRBdXRvVHJpbSIsIlNpZ25JbiIsIkJhc2UiLCJ2YWxpZGF0ZSIsImRhdGEiLCJydWxlcyIsIm5lc3RlZF9vYmplY3QiLCJlbWFpbCIsInBhc3N3b3JkIiwibWluX2xlbmd0aCIsInZhbGlkYXRvciIsImV4ZWN1dGUiLCJjbGVhbkRhdGEiLCJzYXZlZFVzZXIiLCJVc2VyIiwiZmluZE9uZUVudGl0eSIsInN0YXR1cyIsImlzTWF0Y2giLCJiY3J5cHQiLCJjb21wYXJlIiwidG9rZW4iLCJqd3QiLCJzaWduIiwiaWQiLCJleHBpcmVzSW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7OztBQUxBQSxjQUFLQyxTQUFMLENBQWVDLGVBQWYsQ0FBK0IsSUFBL0I7O0FBT2UsTUFBTUMsTUFBTixTQUFxQkMsYUFBckIsQ0FBMEI7QUFDdkMsUUFBTUMsUUFBTixDQUFlQyxJQUFmLEVBQXFCO0FBQ25CLFVBQU1DLEtBQUssR0FBRztBQUNaRCxNQUFBQSxJQUFJLEVBQUUsQ0FDSixVQURJLEVBRUo7QUFDRUUsUUFBQUEsYUFBYSxFQUFFO0FBQ2JDLFVBQUFBLEtBQUssRUFBRSxVQURNO0FBRWJDLFVBQUFBLFFBQVEsRUFBRSxDQUFDLFVBQUQsRUFBYTtBQUFFQyxZQUFBQSxVQUFVLEVBQUU7QUFBZCxXQUFiO0FBRkc7QUFEakIsT0FGSTtBQURNLEtBQWQ7QUFZQSxVQUFNQyxTQUFTLEdBQUcsSUFBSVosY0FBS0MsU0FBVCxDQUFtQk0sS0FBbkIsQ0FBbEI7QUFDQSxTQUFLSyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFdBQU9BLFNBQVMsQ0FBQ1AsUUFBVixDQUFtQkMsSUFBbkIsQ0FBUDtBQUNEOztBQUVELFFBQU1PLE9BQU4sQ0FBY0MsU0FBZCxFQUF5QjtBQUN2QixVQUFNO0FBQUVSLE1BQUFBO0FBQUYsUUFBV1EsU0FBakI7QUFFQSxVQUFNQyxTQUFTLEdBQUcsTUFBTUMsY0FBS0MsYUFBTCxDQUFtQixPQUFuQixFQUE0QlgsSUFBSSxDQUFDRyxLQUFqQyxDQUF4Qjs7QUFFQSxRQUFJLENBQUNNLFNBQUwsRUFBZ0I7QUFDZCxhQUFPO0FBQUVHLFFBQUFBLE1BQU0sRUFBRSxHQUFWO0FBQWVaLFFBQUFBLElBQUksRUFBRTtBQUFyQixPQUFQO0FBQ0Q7O0FBRUQsVUFBTWEsT0FBTyxHQUFHLE1BQU1DLGtCQUFPQyxPQUFQLENBQWVmLElBQUksQ0FBQ0ksUUFBcEIsRUFBOEJLLFNBQVMsQ0FBQ0wsUUFBeEMsQ0FBdEI7O0FBRUEsUUFBSVMsT0FBSixFQUFhO0FBQ1gsWUFBTUcsS0FBSyxHQUFHQyxzQkFBSUMsSUFBSixDQUNaO0FBQ0VDLFFBQUFBLEVBQUUsRUFBRVYsU0FBUyxDQUFDVSxFQURoQjtBQUVFaEIsUUFBQUEsS0FBSyxFQUFFTSxTQUFTLENBQUNOO0FBRm5CLE9BRFksRUFLWixxQkFMWSxFQU1aO0FBQUVpQixRQUFBQSxTQUFTLEVBQUU7QUFBYixPQU5ZLENBQWQ7O0FBU0EsYUFBTztBQUFFUixRQUFBQSxNQUFNLEVBQUUsR0FBVjtBQUFlWixRQUFBQSxJQUFJLEVBQUU7QUFBRW1CLFVBQUFBLEVBQUUsRUFBRVYsU0FBUyxDQUFDVSxFQUFoQjtBQUFvQkgsVUFBQUEsS0FBSyxFQUFFQTtBQUEzQjtBQUFyQixPQUFQO0FBQ0Q7QUFDRjs7QUExQ3NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpdnIgZnJvbSBcImxpdnJcIjtcbkxpdnIuVmFsaWRhdG9yLmRlZmF1bHRBdXRvVHJpbSh0cnVlKTtcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcblxuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uL21vZGVscy91c2VyXCI7XG5pbXBvcnQgQmFzZSBmcm9tIFwiLi4vYmFzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduSW4gZXh0ZW5kcyBCYXNlIHtcbiAgYXN5bmMgdmFsaWRhdGUoZGF0YSkge1xuICAgIGNvbnN0IHJ1bGVzID0ge1xuICAgICAgZGF0YTogW1xuICAgICAgICBcInJlcXVpcmVkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBuZXN0ZWRfb2JqZWN0OiB7XG4gICAgICAgICAgICBlbWFpbDogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFtcInJlcXVpcmVkXCIsIHsgbWluX2xlbmd0aDogNiB9XVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG5cbiAgICBjb25zdCB2YWxpZGF0b3IgPSBuZXcgTGl2ci5WYWxpZGF0b3IocnVsZXMpO1xuICAgIHRoaXMudmFsaWRhdG9yID0gdmFsaWRhdG9yO1xuICAgIHJldHVybiB2YWxpZGF0b3IudmFsaWRhdGUoZGF0YSk7XG4gIH1cblxuICBhc3luYyBleGVjdXRlKGNsZWFuRGF0YSkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gY2xlYW5EYXRhO1xuXG4gICAgY29uc3Qgc2F2ZWRVc2VyID0gYXdhaXQgVXNlci5maW5kT25lRW50aXR5KFwiZW1haWxcIiwgZGF0YS5lbWFpbCk7XG5cbiAgICBpZiAoIXNhdmVkVXNlcikge1xuICAgICAgcmV0dXJuIHsgc3RhdHVzOiA0MDEsIGRhdGE6IFwiSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZFwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgaXNNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGRhdGEucGFzc3dvcmQsIHNhdmVkVXNlci5wYXNzd29yZCk7XG5cbiAgICBpZiAoaXNNYXRjaCkge1xuICAgICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBzYXZlZFVzZXIuaWQsXG4gICAgICAgICAgZW1haWw6IHNhdmVkVXNlci5lbWFpbFxuICAgICAgICB9LFxuICAgICAgICBcInN1cGVyRHVwZXJTZWNyZXRLZXlcIixcbiAgICAgICAgeyBleHBpcmVzSW46IFwiMWhcIiB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm4geyBzdGF0dXM6IDIwMCwgZGF0YTogeyBpZDogc2F2ZWRVc2VyLmlkLCB0b2tlbjogdG9rZW4gfSB9O1xuICAgIH1cbiAgfVxufVxuIl19