"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validator = _interopRequireDefault(require("validator"));

var _conversation = _interopRequireDefault(require("../../dbSOLID/postgre-sql/conversation"));

var _base = _interopRequireDefault(require("../base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class List extends _base.default {
  async validate() {
    const rules = {
      data: ["required", {
        userOneId: ["required"],
        userTwoId: ["required"]
      }]
    };
    return (0, _validator.default)(data, rules);
  }

  async execute(data) {
    const db = (0, _conversation.default)();
    const result = await db.findAll();
    return {
      status: 200,
      result
    };
  }

}

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlc1NPTElEL2NvbnZlc2F0aW9uL2xpc3QuanMiXSwibmFtZXMiOlsiTGlzdCIsIkJhc2UiLCJ2YWxpZGF0ZSIsInJ1bGVzIiwiZGF0YSIsInVzZXJPbmVJZCIsInVzZXJUd29JZCIsImV4ZWN1dGUiLCJkYiIsInJlc3VsdCIsImZpbmRBbGwiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7OztBQUVlLE1BQU1BLElBQU4sU0FBbUJDLGFBQW5CLENBQXdCO0FBQ3JDLFFBQU1DLFFBQU4sR0FBaUI7QUFDZixVQUFNQyxLQUFLLEdBQUc7QUFDWkMsTUFBQUEsSUFBSSxFQUFFLENBQ0osVUFESSxFQUVKO0FBQ0VDLFFBQUFBLFNBQVMsRUFBRSxDQUFDLFVBQUQsQ0FEYjtBQUVFQyxRQUFBQSxTQUFTLEVBQUUsQ0FBQyxVQUFEO0FBRmIsT0FGSTtBQURNLEtBQWQ7QUFVQSxXQUFPLHdCQUFVRixJQUFWLEVBQWdCRCxLQUFoQixDQUFQO0FBQ0Q7O0FBRUQsUUFBTUksT0FBTixDQUFjSCxJQUFkLEVBQW9CO0FBQ2xCLFVBQU1JLEVBQUUsR0FBRyw0QkFBWDtBQUVBLFVBQU1DLE1BQU0sR0FBRyxNQUFNRCxFQUFFLENBQUNFLE9BQUgsRUFBckI7QUFDQSxXQUFPO0FBQUVDLE1BQUFBLE1BQU0sRUFBRSxHQUFWO0FBQWVGLE1BQUFBO0FBQWYsS0FBUDtBQUNEOztBQXBCb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdmFsaWRhdG9yIGZyb20gXCJ2YWxpZGF0b3JcIjtcblxuaW1wb3J0IG1ha2VEYiBmcm9tIFwiLi4vLi4vZGJTT0xJRC9wb3N0Z3JlLXNxbC9jb252ZXJzYXRpb25cIjtcbmltcG9ydCBCYXNlIGZyb20gXCIuLi9iYXNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBCYXNlIHtcbiAgYXN5bmMgdmFsaWRhdGUoKSB7XG4gICAgY29uc3QgcnVsZXMgPSB7XG4gICAgICBkYXRhOiBbXG4gICAgICAgIFwicmVxdWlyZWRcIixcbiAgICAgICAge1xuICAgICAgICAgIHVzZXJPbmVJZDogW1wicmVxdWlyZWRcIl0sXG4gICAgICAgICAgdXNlclR3b0lkOiBbXCJyZXF1aXJlZFwiXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcblxuICAgIHJldHVybiB2YWxpZGF0b3IoZGF0YSwgcnVsZXMpO1xuICB9XG5cbiAgYXN5bmMgZXhlY3V0ZShkYXRhKSB7XG4gICAgY29uc3QgZGIgPSBtYWtlRGIoKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmZpbmRBbGwoKTtcbiAgICByZXR1cm4geyBzdGF0dXM6IDIwMCwgcmVzdWx0IH07XG4gIH1cbn1cbiJdfQ==