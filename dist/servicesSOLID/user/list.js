"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validator = _interopRequireDefault(require("validator"));

var _conversation = _interopRequireDefault(require("../../dbSOLID/postgre-sql/conversation"));

var _base = _interopRequireDefault(require("../base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// exports.getUsers = (req, res, next) => {
//   User.findAll({
//     attributes: ["id", "name", "email"]
//   })
//     .then(users => {
//       if (!users) {
//         return res.status(404).json({ message: "There are no users" });
//       }
//       res.status(200).json({
//         users: users
//       });
//     })
//     .catch(err => {
//       const error = new Error(err);
//       error.httpStatusCode = 500;
//       return next(error);
//     });
// };
class List extends _base.default {
  async validate() {
    const rules = {};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlc1NPTElEL3VzZXIvbGlzdC5qcyJdLCJuYW1lcyI6WyJMaXN0IiwiQmFzZSIsInZhbGlkYXRlIiwicnVsZXMiLCJkYXRhIiwiZXhlY3V0ZSIsImRiIiwicmVzdWx0IiwiZmluZEFsbCIsInN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsTUFBTUEsSUFBTixTQUFtQkMsYUFBbkIsQ0FBd0I7QUFDckMsUUFBTUMsUUFBTixHQUFpQjtBQUNmLFVBQU1DLEtBQUssR0FBRyxFQUFkO0FBRUEsV0FBTyx3QkFBVUMsSUFBVixFQUFnQkQsS0FBaEIsQ0FBUDtBQUNEOztBQUVELFFBQU1FLE9BQU4sQ0FBY0QsSUFBZCxFQUFvQjtBQUNsQixVQUFNRSxFQUFFLEdBQUcsNEJBQVg7QUFFQSxVQUFNQyxNQUFNLEdBQUcsTUFBTUQsRUFBRSxDQUFDRSxPQUFILEVBQXJCO0FBRUEsV0FBTztBQUFFQyxNQUFBQSxNQUFNLEVBQUUsR0FBVjtBQUFlRixNQUFBQTtBQUFmLEtBQVA7QUFDRDs7QUFib0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdmFsaWRhdG9yIGZyb20gXCJ2YWxpZGF0b3JcIjtcblxuaW1wb3J0IG1ha2VEYiBmcm9tIFwiLi4vLi4vZGJTT0xJRC9wb3N0Z3JlLXNxbC9jb252ZXJzYXRpb25cIjtcbmltcG9ydCBCYXNlIGZyb20gXCIuLi9iYXNlXCI7XG5cbi8vIGV4cG9ydHMuZ2V0VXNlcnMgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbi8vICAgVXNlci5maW5kQWxsKHtcbi8vICAgICBhdHRyaWJ1dGVzOiBbXCJpZFwiLCBcIm5hbWVcIiwgXCJlbWFpbFwiXVxuLy8gICB9KVxuLy8gICAgIC50aGVuKHVzZXJzID0+IHtcbi8vICAgICAgIGlmICghdXNlcnMpIHtcbi8vICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogXCJUaGVyZSBhcmUgbm8gdXNlcnNcIiB9KTtcbi8vICAgICAgIH1cblxuLy8gICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuLy8gICAgICAgICB1c2VyczogdXNlcnNcbi8vICAgICAgIH0pO1xuLy8gICAgIH0pXG4vLyAgICAgLmNhdGNoKGVyciA9PiB7XG4vLyAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihlcnIpO1xuLy8gICAgICAgZXJyb3IuaHR0cFN0YXR1c0NvZGUgPSA1MDA7XG4vLyAgICAgICByZXR1cm4gbmV4dChlcnJvcik7XG4vLyAgICAgfSk7XG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgQmFzZSB7XG4gIGFzeW5jIHZhbGlkYXRlKCkge1xuICAgIGNvbnN0IHJ1bGVzID0ge307XG5cbiAgICByZXR1cm4gdmFsaWRhdG9yKGRhdGEsIHJ1bGVzKTtcbiAgfVxuXG4gIGFzeW5jIGV4ZWN1dGUoZGF0YSkge1xuICAgIGNvbnN0IGRiID0gbWFrZURiKCk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5maW5kQWxsKCk7XG5cbiAgICByZXR1cm4geyBzdGF0dXM6IDIwMCwgcmVzdWx0IH07XG4gIH1cbn1cbiJdfQ==