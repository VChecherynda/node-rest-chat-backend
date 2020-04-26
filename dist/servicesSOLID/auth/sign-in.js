"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validator = _interopRequireDefault(require("validator"));

var _auth = _interopRequireDefault(require("../../dbSOLID/postgre-sql/auth"));

var _base = _interopRequireDefault(require("../base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SignIn extends _base.default {
  async validate() {
    const rules = {
      data: ["required", {
        email: ["required"],
        password: ["required"]
      }]
    };
    return (0, _validator.default)(data, rules);
  }

  async execute(data) {
    const db = (0, _auth.default)();
    const savedUser = await db.findOne(data.email);

    if (!savedUser) {
      return {
        status: 401,
        message: "Invalid email or password"
      };
    }

    const isMatch = await bcrypt.compare(data.password, savedUser.password);

    if (isMatch) {
      const token = jwt.sign({
        id: savedUser.id,
        email: savedUser.email
      }, "superDuperSecretKey", {
        expiresIn: "1h"
      });
      const result = {
        id: savedUser.id,
        token: token
      };
      return {
        status: 201,
        result
      };
    }
  }

}

exports.default = SignIn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlc1NPTElEL2F1dGgvc2lnbi1pbi5qcyJdLCJuYW1lcyI6WyJTaWduSW4iLCJCYXNlIiwidmFsaWRhdGUiLCJydWxlcyIsImRhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwiZXhlY3V0ZSIsImRiIiwic2F2ZWRVc2VyIiwiZmluZE9uZSIsInN0YXR1cyIsIm1lc3NhZ2UiLCJpc01hdGNoIiwiYmNyeXB0IiwiY29tcGFyZSIsInRva2VuIiwiand0Iiwic2lnbiIsImlkIiwiZXhwaXJlc0luIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7QUFFZSxNQUFNQSxNQUFOLFNBQXFCQyxhQUFyQixDQUEwQjtBQUN2QyxRQUFNQyxRQUFOLEdBQWlCO0FBQ2YsVUFBTUMsS0FBSyxHQUFHO0FBQ1pDLE1BQUFBLElBQUksRUFBRSxDQUNKLFVBREksRUFFSjtBQUNFQyxRQUFBQSxLQUFLLEVBQUUsQ0FBQyxVQUFELENBRFQ7QUFFRUMsUUFBQUEsUUFBUSxFQUFFLENBQUMsVUFBRDtBQUZaLE9BRkk7QUFETSxLQUFkO0FBVUEsV0FBTyx3QkFBVUYsSUFBVixFQUFnQkQsS0FBaEIsQ0FBUDtBQUNEOztBQUVELFFBQU1JLE9BQU4sQ0FBY0gsSUFBZCxFQUFvQjtBQUNsQixVQUFNSSxFQUFFLEdBQUcsb0JBQVg7QUFFQSxVQUFNQyxTQUFTLEdBQUcsTUFBTUQsRUFBRSxDQUFDRSxPQUFILENBQVdOLElBQUksQ0FBQ0MsS0FBaEIsQ0FBeEI7O0FBRUEsUUFBSSxDQUFDSSxTQUFMLEVBQWdCO0FBQ2QsYUFBTztBQUFFRSxRQUFBQSxNQUFNLEVBQUUsR0FBVjtBQUFlQyxRQUFBQSxPQUFPLEVBQUU7QUFBeEIsT0FBUDtBQUNEOztBQUVELFVBQU1DLE9BQU8sR0FBRyxNQUFNQyxNQUFNLENBQUNDLE9BQVAsQ0FBZVgsSUFBSSxDQUFDRSxRQUFwQixFQUE4QkcsU0FBUyxDQUFDSCxRQUF4QyxDQUF0Qjs7QUFFQSxRQUFJTyxPQUFKLEVBQWE7QUFDWCxZQUFNRyxLQUFLLEdBQUdDLEdBQUcsQ0FBQ0MsSUFBSixDQUNaO0FBQ0VDLFFBQUFBLEVBQUUsRUFBRVYsU0FBUyxDQUFDVSxFQURoQjtBQUVFZCxRQUFBQSxLQUFLLEVBQUVJLFNBQVMsQ0FBQ0o7QUFGbkIsT0FEWSxFQUtaLHFCQUxZLEVBTVo7QUFBRWUsUUFBQUEsU0FBUyxFQUFFO0FBQWIsT0FOWSxDQUFkO0FBU0EsWUFBTUMsTUFBTSxHQUFHO0FBQUVGLFFBQUFBLEVBQUUsRUFBRVYsU0FBUyxDQUFDVSxFQUFoQjtBQUFvQkgsUUFBQUEsS0FBSyxFQUFFQTtBQUEzQixPQUFmO0FBQ0EsYUFBTztBQUFFTCxRQUFBQSxNQUFNLEVBQUUsR0FBVjtBQUFlVSxRQUFBQTtBQUFmLE9BQVA7QUFDRDtBQUNGOztBQXZDc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdmFsaWRhdG9yIGZyb20gXCJ2YWxpZGF0b3JcIjtcblxuaW1wb3J0IG1ha2VEYiBmcm9tIFwiLi4vLi4vZGJTT0xJRC9wb3N0Z3JlLXNxbC9hdXRoXCI7XG5pbXBvcnQgQmFzZSBmcm9tIFwiLi4vYmFzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduSW4gZXh0ZW5kcyBCYXNlIHtcbiAgYXN5bmMgdmFsaWRhdGUoKSB7XG4gICAgY29uc3QgcnVsZXMgPSB7XG4gICAgICBkYXRhOiBbXG4gICAgICAgIFwicmVxdWlyZWRcIixcbiAgICAgICAge1xuICAgICAgICAgIGVtYWlsOiBbXCJyZXF1aXJlZFwiXSxcbiAgICAgICAgICBwYXNzd29yZDogW1wicmVxdWlyZWRcIl1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG5cbiAgICByZXR1cm4gdmFsaWRhdG9yKGRhdGEsIHJ1bGVzKTtcbiAgfVxuXG4gIGFzeW5jIGV4ZWN1dGUoZGF0YSkge1xuICAgIGNvbnN0IGRiID0gbWFrZURiKCk7XG5cbiAgICBjb25zdCBzYXZlZFVzZXIgPSBhd2FpdCBkYi5maW5kT25lKGRhdGEuZW1haWwpO1xuXG4gICAgaWYgKCFzYXZlZFVzZXIpIHtcbiAgICAgIHJldHVybiB7IHN0YXR1czogNDAxLCBtZXNzYWdlOiBcIkludmFsaWQgZW1haWwgb3IgcGFzc3dvcmRcIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IGlzTWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShkYXRhLnBhc3N3b3JkLCBzYXZlZFVzZXIucGFzc3dvcmQpO1xuXG4gICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogc2F2ZWRVc2VyLmlkLFxuICAgICAgICAgIGVtYWlsOiBzYXZlZFVzZXIuZW1haWxcbiAgICAgICAgfSxcbiAgICAgICAgXCJzdXBlckR1cGVyU2VjcmV0S2V5XCIsXG4gICAgICAgIHsgZXhwaXJlc0luOiBcIjFoXCIgfVxuICAgICAgKTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0geyBpZDogc2F2ZWRVc2VyLmlkLCB0b2tlbjogdG9rZW4gfTtcbiAgICAgIHJldHVybiB7IHN0YXR1czogMjAxLCByZXN1bHQgfTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==