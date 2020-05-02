"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _signIn = _interopRequireDefault(require("../services/auth/sign-in"));

var _signUp = _interopRequireDefault(require("../services/auth/sign-up"));

var _helper = require("../utils/helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  signIn: (req, res) => {
    const data = req.body;
    const service = new _signIn.default();
    const promise = service.run({
      data
    });
    (0, _helper.renderPromiseAsJson)(promise, res);
  },
  signUp: (req, res) => {
    const data = req.body;
    const service = new _signUp.default();
    const promise = service.run({
      data
    });
    (0, _helper.renderPromiseAsJson)(promise, res);
  }
};
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9hdXRoLmpzIl0sIm5hbWVzIjpbInNpZ25JbiIsInJlcSIsInJlcyIsImRhdGEiLCJib2R5Iiwic2VydmljZSIsIlNpZ25JbiIsInByb21pc2UiLCJydW4iLCJzaWduVXAiLCJTaWduVXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7OztlQUVlO0FBQ2JBLEVBQUFBLE1BQU0sRUFBRSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUNwQixVQUFNQyxJQUFJLEdBQUdGLEdBQUcsQ0FBQ0csSUFBakI7QUFFQSxVQUFNQyxPQUFPLEdBQUcsSUFBSUMsZUFBSixFQUFoQjtBQUNBLFVBQU1DLE9BQU8sR0FBR0YsT0FBTyxDQUFDRyxHQUFSLENBQVk7QUFBRUwsTUFBQUE7QUFBRixLQUFaLENBQWhCO0FBRUEscUNBQW9CSSxPQUFwQixFQUE2QkwsR0FBN0I7QUFDRCxHQVJZO0FBU2JPLEVBQUFBLE1BQU0sRUFBRSxDQUFDUixHQUFELEVBQU1DLEdBQU4sS0FBYztBQUNwQixVQUFNQyxJQUFJLEdBQUdGLEdBQUcsQ0FBQ0csSUFBakI7QUFFQSxVQUFNQyxPQUFPLEdBQUcsSUFBSUssZUFBSixFQUFoQjtBQUNBLFVBQU1ILE9BQU8sR0FBR0YsT0FBTyxDQUFDRyxHQUFSLENBQVk7QUFBRUwsTUFBQUE7QUFBRixLQUFaLENBQWhCO0FBRUEscUNBQW9CSSxPQUFwQixFQUE2QkwsR0FBN0I7QUFDRDtBQWhCWSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpZ25JbiBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC9zaWduLWluXCI7XG5pbXBvcnQgU2lnblVwIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoL3NpZ24tdXBcIjtcblxuaW1wb3J0IHsgcmVuZGVyUHJvbWlzZUFzSnNvbiB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzaWduSW46IChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBuZXcgU2lnbkluKCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHNlcnZpY2UucnVuKHsgZGF0YSB9KTtcblxuICAgIHJlbmRlclByb21pc2VBc0pzb24ocHJvbWlzZSwgcmVzKTtcbiAgfSxcbiAgc2lnblVwOiAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gbmV3IFNpZ25VcCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSBzZXJ2aWNlLnJ1bih7IGRhdGEgfSk7XG5cbiAgICByZW5kZXJQcm9taXNlQXNKc29uKHByb21pc2UsIHJlcyk7XG4gIH1cbn07XG4iXX0=