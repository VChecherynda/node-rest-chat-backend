"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _list = _interopRequireDefault(require("../services/conversation/list"));

var _create = _interopRequireDefault(require("../services/conversation/create"));

var _helper = require("../utils/helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  list: (req, res) => {
    const data = req.body;
    const service = new _list.default();
    const promise = service.run({
      data
    });
    (0, _helper.renderPromiseAsJson)(promise, res);
  },
  create: (req, res) => {
    const data = req.body;
    const service = new _create.default();
    const promise = service.run({
      data
    });
    (0, _helper.renderPromiseAsJson)(promise, res);
  }
};
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9jb252ZXJzYXRpb24uanMiXSwibmFtZXMiOlsibGlzdCIsInJlcSIsInJlcyIsImRhdGEiLCJib2R5Iiwic2VydmljZSIsIkNvbnZlcnNhdGlvbkxpc3QiLCJwcm9taXNlIiwicnVuIiwiY3JlYXRlIiwiQ29udmVyc2F0aW9uQ3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7ZUFFZTtBQUNiQSxFQUFBQSxJQUFJLEVBQUUsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDbEIsVUFBTUMsSUFBSSxHQUFHRixHQUFHLENBQUNHLElBQWpCO0FBRUEsVUFBTUMsT0FBTyxHQUFHLElBQUlDLGFBQUosRUFBaEI7QUFDQSxVQUFNQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0csR0FBUixDQUFZO0FBQUVMLE1BQUFBO0FBQUYsS0FBWixDQUFoQjtBQUVBLHFDQUFvQkksT0FBcEIsRUFBNkJMLEdBQTdCO0FBQ0QsR0FSWTtBQVNiTyxFQUFBQSxNQUFNLEVBQUUsQ0FBQ1IsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDcEIsVUFBTUMsSUFBSSxHQUFHRixHQUFHLENBQUNHLElBQWpCO0FBRUEsVUFBTUMsT0FBTyxHQUFHLElBQUlLLGVBQUosRUFBaEI7QUFDQSxVQUFNSCxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0csR0FBUixDQUFZO0FBQUVMLE1BQUFBO0FBQUYsS0FBWixDQUFoQjtBQUVBLHFDQUFvQkksT0FBcEIsRUFBNkJMLEdBQTdCO0FBQ0Q7QUFoQlksQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb252ZXJzYXRpb25MaXN0IGZyb20gXCIuLi9zZXJ2aWNlcy9jb252ZXJzYXRpb24vbGlzdFwiO1xuaW1wb3J0IENvbnZlcnNhdGlvbkNyZWF0ZSBmcm9tIFwiLi4vc2VydmljZXMvY29udmVyc2F0aW9uL2NyZWF0ZVwiO1xuXG5pbXBvcnQgeyByZW5kZXJQcm9taXNlQXNKc29uIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpc3Q6IChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBuZXcgQ29udmVyc2F0aW9uTGlzdCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSBzZXJ2aWNlLnJ1bih7IGRhdGEgfSk7XG5cbiAgICByZW5kZXJQcm9taXNlQXNKc29uKHByb21pc2UsIHJlcyk7XG4gIH0sXG4gIGNyZWF0ZTogKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xuXG4gICAgY29uc3Qgc2VydmljZSA9IG5ldyBDb252ZXJzYXRpb25DcmVhdGUoKTtcbiAgICBjb25zdCBwcm9taXNlID0gc2VydmljZS5ydW4oeyBkYXRhIH0pO1xuXG4gICAgcmVuZGVyUHJvbWlzZUFzSnNvbihwcm9taXNlLCByZXMpO1xuICB9XG59O1xuIl19