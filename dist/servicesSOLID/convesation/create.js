"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validator = _interopRequireDefault(require("validator"));

var _conversation = _interopRequireDefault(require("../../dbSOLID/postgre-sql/conversation"));

var _base = _interopRequireDefault(require("../base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Create extends _base.default {
  async validate() {
    const rules = {
      data: ["required", {
        userOneId: ["required"],
        userTwoId: ["required"]
      }]
    };
    (0, _validator.default)(data, rules);
  }

  async execute(data) {
    const db = (0, _conversation.default)();
    const conversation = await db.findOne(data);

    if (conversation) {
      return {
        status: 403,
        conversation
      };
    }

    const users = await db.create(data);
    return {
      status: 201,
      users
    };
  }

}

exports.default = Create;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlc1NPTElEL2NvbnZlc2F0aW9uL2NyZWF0ZS5qcyJdLCJuYW1lcyI6WyJDcmVhdGUiLCJCYXNlIiwidmFsaWRhdGUiLCJydWxlcyIsImRhdGEiLCJ1c2VyT25lSWQiLCJ1c2VyVHdvSWQiLCJleGVjdXRlIiwiZGIiLCJjb252ZXJzYXRpb24iLCJmaW5kT25lIiwic3RhdHVzIiwidXNlcnMiLCJjcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7OztBQUVlLE1BQU1BLE1BQU4sU0FBcUJDLGFBQXJCLENBQTBCO0FBQ3ZDLFFBQU1DLFFBQU4sR0FBaUI7QUFDZixVQUFNQyxLQUFLLEdBQUc7QUFDWkMsTUFBQUEsSUFBSSxFQUFFLENBQ0osVUFESSxFQUVKO0FBQ0VDLFFBQUFBLFNBQVMsRUFBRSxDQUFDLFVBQUQsQ0FEYjtBQUVFQyxRQUFBQSxTQUFTLEVBQUUsQ0FBQyxVQUFEO0FBRmIsT0FGSTtBQURNLEtBQWQ7QUFVQSw0QkFBVUYsSUFBVixFQUFnQkQsS0FBaEI7QUFDRDs7QUFFRCxRQUFNSSxPQUFOLENBQWNILElBQWQsRUFBb0I7QUFDbEIsVUFBTUksRUFBRSxHQUFHLDRCQUFYO0FBRUEsVUFBTUMsWUFBWSxHQUFHLE1BQU1ELEVBQUUsQ0FBQ0UsT0FBSCxDQUFXTixJQUFYLENBQTNCOztBQUVBLFFBQUlLLFlBQUosRUFBa0I7QUFDaEIsYUFBTztBQUFFRSxRQUFBQSxNQUFNLEVBQUUsR0FBVjtBQUFlRixRQUFBQTtBQUFmLE9BQVA7QUFDRDs7QUFFRCxVQUFNRyxLQUFLLEdBQUcsTUFBTUosRUFBRSxDQUFDSyxNQUFILENBQVVULElBQVYsQ0FBcEI7QUFDQSxXQUFPO0FBQUVPLE1BQUFBLE1BQU0sRUFBRSxHQUFWO0FBQWVDLE1BQUFBO0FBQWYsS0FBUDtBQUNEOztBQTFCc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdmFsaWRhdG9yIGZyb20gXCJ2YWxpZGF0b3JcIjtcblxuaW1wb3J0IG1ha2VEYiBmcm9tIFwiLi4vLi4vZGJTT0xJRC9wb3N0Z3JlLXNxbC9jb252ZXJzYXRpb25cIjtcbmltcG9ydCBCYXNlIGZyb20gXCIuLi9iYXNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZSBleHRlbmRzIEJhc2Uge1xuICBhc3luYyB2YWxpZGF0ZSgpIHtcbiAgICBjb25zdCBydWxlcyA9IHtcbiAgICAgIGRhdGE6IFtcbiAgICAgICAgXCJyZXF1aXJlZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgdXNlck9uZUlkOiBbXCJyZXF1aXJlZFwiXSxcbiAgICAgICAgICB1c2VyVHdvSWQ6IFtcInJlcXVpcmVkXCJdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuXG4gICAgdmFsaWRhdG9yKGRhdGEsIHJ1bGVzKTtcbiAgfVxuXG4gIGFzeW5jIGV4ZWN1dGUoZGF0YSkge1xuICAgIGNvbnN0IGRiID0gbWFrZURiKCk7XG5cbiAgICBjb25zdCBjb252ZXJzYXRpb24gPSBhd2FpdCBkYi5maW5kT25lKGRhdGEpO1xuXG4gICAgaWYgKGNvbnZlcnNhdGlvbikge1xuICAgICAgcmV0dXJuIHsgc3RhdHVzOiA0MDMsIGNvbnZlcnNhdGlvbiB9O1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgZGIuY3JlYXRlKGRhdGEpO1xuICAgIHJldHVybiB7IHN0YXR1czogMjAxLCB1c2VycyB9O1xuICB9XG59XG4iXX0=