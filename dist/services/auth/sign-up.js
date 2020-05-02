"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _livr = _interopRequireDefault(require("livr"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _base = _interopRequireDefault(require("../base"));

var _user = _interopRequireDefault(require("../../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_livr.default.Validator.defaultAutoTrim(true);

class SignUp extends _base.default {
  async validate(data) {
    const rules = {
      data: ["required", {
        nested_object: {
          name: "required",
          email: ["required", "email"],
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
    const hashedPassword = await _bcryptjs.default.hash(data.password, 12);
    const savedUser = await _user.default.findOneEntity("email", data.email);

    if (savedUser) {
      return {
        status: 401,
        data: "Email is already taken"
      };
    }

    const user = await _user.default.create({
      name: data.name,
      email: data.email,
      password: hashedPassword
    });
    return {
      status: 201,
      data: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    };
  }

}

exports.default = SignUp;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9hdXRoL3NpZ24tdXAuanMiXSwibmFtZXMiOlsiTGl2ciIsIlZhbGlkYXRvciIsImRlZmF1bHRBdXRvVHJpbSIsIlNpZ25VcCIsIkJhc2UiLCJ2YWxpZGF0ZSIsImRhdGEiLCJydWxlcyIsIm5lc3RlZF9vYmplY3QiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsIm1pbl9sZW5ndGgiLCJ2YWxpZGF0b3IiLCJleGVjdXRlIiwiY2xlYW5EYXRhIiwiaGFzaGVkUGFzc3dvcmQiLCJiY3J5cHQiLCJoYXNoIiwic2F2ZWRVc2VyIiwiVXNlciIsImZpbmRPbmVFbnRpdHkiLCJzdGF0dXMiLCJ1c2VyIiwiY3JlYXRlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFDQTs7OztBQUpBQSxjQUFLQyxTQUFMLENBQWVDLGVBQWYsQ0FBK0IsSUFBL0I7O0FBTWUsTUFBTUMsTUFBTixTQUFxQkMsYUFBckIsQ0FBMEI7QUFDdkMsUUFBTUMsUUFBTixDQUFlQyxJQUFmLEVBQXFCO0FBQ25CLFVBQU1DLEtBQUssR0FBRztBQUNaRCxNQUFBQSxJQUFJLEVBQUUsQ0FDSixVQURJLEVBRUo7QUFDRUUsUUFBQUEsYUFBYSxFQUFFO0FBQ2JDLFVBQUFBLElBQUksRUFBRSxVQURPO0FBRWJDLFVBQUFBLEtBQUssRUFBRSxDQUFDLFVBQUQsRUFBYSxPQUFiLENBRk07QUFHYkMsVUFBQUEsUUFBUSxFQUFFLENBQUMsVUFBRCxFQUFhO0FBQUVDLFlBQUFBLFVBQVUsRUFBRTtBQUFkLFdBQWI7QUFIRztBQURqQixPQUZJO0FBRE0sS0FBZDtBQWFBLFVBQU1DLFNBQVMsR0FBRyxJQUFJYixjQUFLQyxTQUFULENBQW1CTSxLQUFuQixDQUFsQjtBQUNBLFNBQUtNLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsV0FBT0EsU0FBUyxDQUFDUixRQUFWLENBQW1CQyxJQUFuQixDQUFQO0FBQ0Q7O0FBRUQsUUFBTVEsT0FBTixDQUFjQyxTQUFkLEVBQXlCO0FBQ3ZCLFVBQU07QUFBRVQsTUFBQUE7QUFBRixRQUFXUyxTQUFqQjtBQUVBLFVBQU1DLGNBQWMsR0FBRyxNQUFNQyxrQkFBT0MsSUFBUCxDQUFZWixJQUFJLENBQUNLLFFBQWpCLEVBQTJCLEVBQTNCLENBQTdCO0FBRUEsVUFBTVEsU0FBUyxHQUFHLE1BQU1DLGNBQUtDLGFBQUwsQ0FBbUIsT0FBbkIsRUFBNEJmLElBQUksQ0FBQ0ksS0FBakMsQ0FBeEI7O0FBRUEsUUFBSVMsU0FBSixFQUFlO0FBQ2IsYUFBTztBQUNMRyxRQUFBQSxNQUFNLEVBQUUsR0FESDtBQUVMaEIsUUFBQUEsSUFBSSxFQUFFO0FBRkQsT0FBUDtBQUlEOztBQUVELFVBQU1pQixJQUFJLEdBQUcsTUFBTUgsY0FBS0ksTUFBTCxDQUFZO0FBQzdCZixNQUFBQSxJQUFJLEVBQUVILElBQUksQ0FBQ0csSUFEa0I7QUFFN0JDLE1BQUFBLEtBQUssRUFBRUosSUFBSSxDQUFDSSxLQUZpQjtBQUc3QkMsTUFBQUEsUUFBUSxFQUFFSztBQUhtQixLQUFaLENBQW5CO0FBTUEsV0FBTztBQUNMTSxNQUFBQSxNQUFNLEVBQUUsR0FESDtBQUVMaEIsTUFBQUEsSUFBSSxFQUFFO0FBQUVtQixRQUFBQSxFQUFFLEVBQUVGLElBQUksQ0FBQ0UsRUFBWDtBQUFlaEIsUUFBQUEsSUFBSSxFQUFFYyxJQUFJLENBQUNkLElBQTFCO0FBQWdDQyxRQUFBQSxLQUFLLEVBQUVhLElBQUksQ0FBQ2I7QUFBNUM7QUFGRCxLQUFQO0FBSUQ7O0FBNUNzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaXZyIGZyb20gXCJsaXZyXCI7XG5MaXZyLlZhbGlkYXRvci5kZWZhdWx0QXV0b1RyaW0odHJ1ZSk7XG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xuXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi4vYmFzZVwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uL21vZGVscy91c2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25VcCBleHRlbmRzIEJhc2Uge1xuICBhc3luYyB2YWxpZGF0ZShkYXRhKSB7XG4gICAgY29uc3QgcnVsZXMgPSB7XG4gICAgICBkYXRhOiBbXG4gICAgICAgIFwicmVxdWlyZWRcIixcbiAgICAgICAge1xuICAgICAgICAgIG5lc3RlZF9vYmplY3Q6IHtcbiAgICAgICAgICAgIG5hbWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgIGVtYWlsOiBbXCJyZXF1aXJlZFwiLCBcImVtYWlsXCJdLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFtcInJlcXVpcmVkXCIsIHsgbWluX2xlbmd0aDogNiB9XVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG5cbiAgICBjb25zdCB2YWxpZGF0b3IgPSBuZXcgTGl2ci5WYWxpZGF0b3IocnVsZXMpO1xuICAgIHRoaXMudmFsaWRhdG9yID0gdmFsaWRhdG9yO1xuICAgIHJldHVybiB2YWxpZGF0b3IudmFsaWRhdGUoZGF0YSk7XG4gIH1cblxuICBhc3luYyBleGVjdXRlKGNsZWFuRGF0YSkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gY2xlYW5EYXRhO1xuXG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChkYXRhLnBhc3N3b3JkLCAxMik7XG5cbiAgICBjb25zdCBzYXZlZFVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmVFbnRpdHkoXCJlbWFpbFwiLCBkYXRhLmVtYWlsKTtcblxuICAgIGlmIChzYXZlZFVzZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogNDAxLFxuICAgICAgICBkYXRhOiBcIkVtYWlsIGlzIGFscmVhZHkgdGFrZW5cIlxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5jcmVhdGUoe1xuICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgZW1haWw6IGRhdGEuZW1haWwsXG4gICAgICBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmRcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXM6IDIwMSxcbiAgICAgIGRhdGE6IHsgaWQ6IHVzZXIuaWQsIG5hbWU6IHVzZXIubmFtZSwgZW1haWw6IHVzZXIuZW1haWwgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==