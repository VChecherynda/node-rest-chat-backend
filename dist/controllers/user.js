"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _list = _interopRequireDefault(require("../services/user/list"));

var _helper = require("../utils/helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  list: (req, res) => {
    const data = req.body;
    const service = new _list.default();
    const promise = service.run(data);
    (0, _helper.renderPromiseAsJson)(promise, res);
  }
};
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy91c2VyLmpzIl0sIm5hbWVzIjpbImxpc3QiLCJyZXEiLCJyZXMiLCJkYXRhIiwiYm9keSIsInNlcnZpY2UiLCJVc2Vyc0xpc3QiLCJwcm9taXNlIiwicnVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7ZUFFZTtBQUNiQSxFQUFBQSxJQUFJLEVBQUUsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDbEIsVUFBTUMsSUFBSSxHQUFHRixHQUFHLENBQUNHLElBQWpCO0FBRUEsVUFBTUMsT0FBTyxHQUFHLElBQUlDLGFBQUosRUFBaEI7QUFDQSxVQUFNQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0csR0FBUixDQUFZTCxJQUFaLENBQWhCO0FBRUEscUNBQW9CSSxPQUFwQixFQUE2QkwsR0FBN0I7QUFDRDtBQVJZLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlcnNMaXN0IGZyb20gXCIuLi9zZXJ2aWNlcy91c2VyL2xpc3RcIjtcblxuaW1wb3J0IHsgcmVuZGVyUHJvbWlzZUFzSnNvbiB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsaXN0OiAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gbmV3IFVzZXJzTGlzdCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSBzZXJ2aWNlLnJ1bihkYXRhKTtcblxuICAgIHJlbmRlclByb21pc2VBc0pzb24ocHJvbWlzZSwgcmVzKTtcbiAgfVxufTtcbiJdfQ==