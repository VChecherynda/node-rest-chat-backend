"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validator = _interopRequireDefault(require("validator"));

var _auth = _interopRequireDefault(require("../../dbSOLID/postgre-sql/auth"));

var _base = _interopRequireDefault(require("../base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SignUp extends _base.default {
  async validate() {
    const rules = {
      data: ["required", {
        name: ["required"],
        email: ["required"],
        password: ["required"]
      }]
    };
    return (0, _validator.default)(data, rules);
  }

  async execute(data) {
    const db = (0, _auth.default)();
    const hashedPassword = await bcrypt.hash(data.password, 12);
    const savedUser = await db.create({ ...data,
      password: hashedPassword
    });
    return {
      status: 201,
      savedUser
    };
  }

}

exports.default = SignUp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlc1NPTElEL2F1dGgvc2lnbi11cC5qcyJdLCJuYW1lcyI6WyJTaWduVXAiLCJCYXNlIiwidmFsaWRhdGUiLCJydWxlcyIsImRhdGEiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImV4ZWN1dGUiLCJkYiIsImhhc2hlZFBhc3N3b3JkIiwiYmNyeXB0IiwiaGFzaCIsInNhdmVkVXNlciIsImNyZWF0ZSIsInN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOzs7O0FBRWUsTUFBTUEsTUFBTixTQUFxQkMsYUFBckIsQ0FBMEI7QUFDdkMsUUFBTUMsUUFBTixHQUFpQjtBQUNmLFVBQU1DLEtBQUssR0FBRztBQUNaQyxNQUFBQSxJQUFJLEVBQUUsQ0FDSixVQURJLEVBRUo7QUFDRUMsUUFBQUEsSUFBSSxFQUFFLENBQUMsVUFBRCxDQURSO0FBRUVDLFFBQUFBLEtBQUssRUFBRSxDQUFDLFVBQUQsQ0FGVDtBQUdFQyxRQUFBQSxRQUFRLEVBQUUsQ0FBQyxVQUFEO0FBSFosT0FGSTtBQURNLEtBQWQ7QUFXQSxXQUFPLHdCQUFVSCxJQUFWLEVBQWdCRCxLQUFoQixDQUFQO0FBQ0Q7O0FBRUQsUUFBTUssT0FBTixDQUFjSixJQUFkLEVBQW9CO0FBQ2xCLFVBQU1LLEVBQUUsR0FBRyxvQkFBWDtBQUVBLFVBQU1DLGNBQWMsR0FBRyxNQUFNQyxNQUFNLENBQUNDLElBQVAsQ0FBWVIsSUFBSSxDQUFDRyxRQUFqQixFQUEyQixFQUEzQixDQUE3QjtBQUVBLFVBQU1NLFNBQVMsR0FBRyxNQUFNSixFQUFFLENBQUNLLE1BQUgsQ0FBVSxFQUFFLEdBQUdWLElBQUw7QUFBV0csTUFBQUEsUUFBUSxFQUFFRztBQUFyQixLQUFWLENBQXhCO0FBRUEsV0FBTztBQUFFSyxNQUFBQSxNQUFNLEVBQUUsR0FBVjtBQUFlRixNQUFBQTtBQUFmLEtBQVA7QUFDRDs7QUF4QnNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHZhbGlkYXRvciBmcm9tIFwidmFsaWRhdG9yXCI7XG5cbmltcG9ydCBtYWtlRGIgZnJvbSBcIi4uLy4uL2RiU09MSUQvcG9zdGdyZS1zcWwvYXV0aFwiO1xuaW1wb3J0IEJhc2UgZnJvbSBcIi4uL2Jhc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnblVwIGV4dGVuZHMgQmFzZSB7XG4gIGFzeW5jIHZhbGlkYXRlKCkge1xuICAgIGNvbnN0IHJ1bGVzID0ge1xuICAgICAgZGF0YTogW1xuICAgICAgICBcInJlcXVpcmVkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBbXCJyZXF1aXJlZFwiXSxcbiAgICAgICAgICBlbWFpbDogW1wicmVxdWlyZWRcIl0sXG4gICAgICAgICAgcGFzc3dvcmQ6IFtcInJlcXVpcmVkXCJdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHZhbGlkYXRvcihkYXRhLCBydWxlcyk7XG4gIH1cblxuICBhc3luYyBleGVjdXRlKGRhdGEpIHtcbiAgICBjb25zdCBkYiA9IG1ha2VEYigpO1xuXG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChkYXRhLnBhc3N3b3JkLCAxMik7XG5cbiAgICBjb25zdCBzYXZlZFVzZXIgPSBhd2FpdCBkYi5jcmVhdGUoeyAuLi5kYXRhLCBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQgfSk7XG5cbiAgICByZXR1cm4geyBzdGF0dXM6IDIwMSwgc2F2ZWRVc2VyIH07XG4gIH1cbn1cbiJdfQ==