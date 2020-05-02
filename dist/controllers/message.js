"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _list = _interopRequireDefault(require("../services/message/list"));

var _create = _interopRequireDefault(require("../services/message/create"));

var _update = _interopRequireDefault(require("../services/message/update"));

var _delete = _interopRequireDefault(require("../services/message/delete"));

var _helper = require("../utils/helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  list: (req, res) => {
    const {
      id
    } = req.params;
    const service = new _list.default();
    const promise = service.run({
      data: id
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
  },
  update: (req, res) => {
    const data = req.body;
    const service = new _update.default();
    const promise = service.run({
      data
    });
    (0, _helper.renderPromiseAsJson)(promise, res);
  },
  delete: (req, res) => {
    const data = req.body;
    const service = new _delete.default();
    const promise = service.run({
      data
    });
    (0, _helper.renderPromiseAsJson)(promise, res);
  }
};
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9tZXNzYWdlLmpzIl0sIm5hbWVzIjpbImxpc3QiLCJyZXEiLCJyZXMiLCJpZCIsInBhcmFtcyIsInNlcnZpY2UiLCJNZXNzYWdlTGlzdCIsInByb21pc2UiLCJydW4iLCJkYXRhIiwiY3JlYXRlIiwiYm9keSIsIk1lc3NhZ2VDcmVhdGUiLCJ1cGRhdGUiLCJNZXNzYWdlVXBkYXRlIiwiZGVsZXRlIiwiTWVzc2FnZURlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7O2VBRWU7QUFDYkEsRUFBQUEsSUFBSSxFQUFFLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ2xCLFVBQU07QUFBRUMsTUFBQUE7QUFBRixRQUFTRixHQUFHLENBQUNHLE1BQW5CO0FBRUEsVUFBTUMsT0FBTyxHQUFHLElBQUlDLGFBQUosRUFBaEI7QUFDQSxVQUFNQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0csR0FBUixDQUFZO0FBQUVDLE1BQUFBLElBQUksRUFBRU47QUFBUixLQUFaLENBQWhCO0FBRUEscUNBQW9CSSxPQUFwQixFQUE2QkwsR0FBN0I7QUFDRCxHQVJZO0FBU2JRLEVBQUFBLE1BQU0sRUFBRSxDQUFDVCxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUNwQixVQUFNTyxJQUFJLEdBQUdSLEdBQUcsQ0FBQ1UsSUFBakI7QUFFQSxVQUFNTixPQUFPLEdBQUcsSUFBSU8sZUFBSixFQUFoQjtBQUNBLFVBQU1MLE9BQU8sR0FBR0YsT0FBTyxDQUFDRyxHQUFSLENBQVk7QUFBRUMsTUFBQUE7QUFBRixLQUFaLENBQWhCO0FBRUEscUNBQW9CRixPQUFwQixFQUE2QkwsR0FBN0I7QUFDRCxHQWhCWTtBQWlCYlcsRUFBQUEsTUFBTSxFQUFFLENBQUNaLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ3BCLFVBQU1PLElBQUksR0FBR1IsR0FBRyxDQUFDVSxJQUFqQjtBQUVBLFVBQU1OLE9BQU8sR0FBRyxJQUFJUyxlQUFKLEVBQWhCO0FBQ0EsVUFBTVAsT0FBTyxHQUFHRixPQUFPLENBQUNHLEdBQVIsQ0FBWTtBQUFFQyxNQUFBQTtBQUFGLEtBQVosQ0FBaEI7QUFFQSxxQ0FBb0JGLE9BQXBCLEVBQTZCTCxHQUE3QjtBQUNELEdBeEJZO0FBeUJiYSxFQUFBQSxNQUFNLEVBQUUsQ0FBQ2QsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDcEIsVUFBTU8sSUFBSSxHQUFHUixHQUFHLENBQUNVLElBQWpCO0FBRUEsVUFBTU4sT0FBTyxHQUFHLElBQUlXLGVBQUosRUFBaEI7QUFDQSxVQUFNVCxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0csR0FBUixDQUFZO0FBQUVDLE1BQUFBO0FBQUYsS0FBWixDQUFoQjtBQUVBLHFDQUFvQkYsT0FBcEIsRUFBNkJMLEdBQTdCO0FBQ0Q7QUFoQ1ksQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZXNzYWdlTGlzdCBmcm9tIFwiLi4vc2VydmljZXMvbWVzc2FnZS9saXN0XCI7XG5pbXBvcnQgTWVzc2FnZUNyZWF0ZSBmcm9tIFwiLi4vc2VydmljZXMvbWVzc2FnZS9jcmVhdGVcIjtcbmltcG9ydCBNZXNzYWdlVXBkYXRlIGZyb20gXCIuLi9zZXJ2aWNlcy9tZXNzYWdlL3VwZGF0ZVwiO1xuaW1wb3J0IE1lc3NhZ2VEZWxldGUgZnJvbSBcIi4uL3NlcnZpY2VzL21lc3NhZ2UvZGVsZXRlXCI7XG5cbmltcG9ydCB7IHJlbmRlclByb21pc2VBc0pzb24gfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGlzdDogKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBuZXcgTWVzc2FnZUxpc3QoKTtcbiAgICBjb25zdCBwcm9taXNlID0gc2VydmljZS5ydW4oeyBkYXRhOiBpZCB9KTtcblxuICAgIHJlbmRlclByb21pc2VBc0pzb24ocHJvbWlzZSwgcmVzKTtcbiAgfSxcbiAgY3JlYXRlOiAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gbmV3IE1lc3NhZ2VDcmVhdGUoKTtcbiAgICBjb25zdCBwcm9taXNlID0gc2VydmljZS5ydW4oeyBkYXRhIH0pO1xuXG4gICAgcmVuZGVyUHJvbWlzZUFzSnNvbihwcm9taXNlLCByZXMpO1xuICB9LFxuICB1cGRhdGU6IChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBuZXcgTWVzc2FnZVVwZGF0ZSgpO1xuICAgIGNvbnN0IHByb21pc2UgPSBzZXJ2aWNlLnJ1bih7IGRhdGEgfSk7XG5cbiAgICByZW5kZXJQcm9taXNlQXNKc29uKHByb21pc2UsIHJlcyk7XG4gIH0sXG4gIGRlbGV0ZTogKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xuXG4gICAgY29uc3Qgc2VydmljZSA9IG5ldyBNZXNzYWdlRGVsZXRlKCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHNlcnZpY2UucnVuKHsgZGF0YSB9KTtcblxuICAgIHJlbmRlclByb21pc2VBc0pzb24ocHJvbWlzZSwgcmVzKTtcbiAgfVxufTtcbiJdfQ==