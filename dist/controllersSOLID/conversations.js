"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _list = _interopRequireDefault(require("../servicesSOLID/conversation/list"));

var _create = _interopRequireDefault(require("../servicesSOLID/conversation/create"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  list: (req, res) => {
    const context = req.session.context;
    const params = req.body;
    const service = new _list.default({
      context
    });
    const promise = service.run(params);
    renderPromiseAsJson(res, promise);
  },
  create: (req, res) => {
    const context = req.session.context;
    const params = req.body;
    const service = new _create.default({
      context
    });
    const promise = service.run(params);
    renderPromiseAsJson(res, promise);
  }
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyc1NPTElEL2NvbnZlcnNhdGlvbnMuanMiXSwibmFtZXMiOlsibGlzdCIsInJlcSIsInJlcyIsImNvbnRleHQiLCJzZXNzaW9uIiwicGFyYW1zIiwiYm9keSIsInNlcnZpY2UiLCJDb252ZXJzYXRpb25MaXN0IiwicHJvbWlzZSIsInJ1biIsInJlbmRlclByb21pc2VBc0pzb24iLCJjcmVhdGUiLCJDb252ZXJzYXRpb25DcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztlQUVlO0FBQ2JBLEVBQUFBLElBQUksRUFBRSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUNsQixVQUFNQyxPQUFPLEdBQUdGLEdBQUcsQ0FBQ0csT0FBSixDQUFZRCxPQUE1QjtBQUNBLFVBQU1FLE1BQU0sR0FBR0osR0FBRyxDQUFDSyxJQUFuQjtBQUVBLFVBQU1DLE9BQU8sR0FBRyxJQUFJQyxhQUFKLENBQXFCO0FBQUVMLE1BQUFBO0FBQUYsS0FBckIsQ0FBaEI7QUFDQSxVQUFNTSxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0csR0FBUixDQUFZTCxNQUFaLENBQWhCO0FBRUFNLElBQUFBLG1CQUFtQixDQUFDVCxHQUFELEVBQU1PLE9BQU4sQ0FBbkI7QUFDRCxHQVRZO0FBVWJHLEVBQUFBLE1BQU0sRUFBRSxDQUFDWCxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUNwQixVQUFNQyxPQUFPLEdBQUdGLEdBQUcsQ0FBQ0csT0FBSixDQUFZRCxPQUE1QjtBQUNBLFVBQU1FLE1BQU0sR0FBR0osR0FBRyxDQUFDSyxJQUFuQjtBQUVBLFVBQU1DLE9BQU8sR0FBRyxJQUFJTSxlQUFKLENBQXVCO0FBQUVWLE1BQUFBO0FBQUYsS0FBdkIsQ0FBaEI7QUFDQSxVQUFNTSxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0csR0FBUixDQUFZTCxNQUFaLENBQWhCO0FBRUFNLElBQUFBLG1CQUFtQixDQUFDVCxHQUFELEVBQU1PLE9BQU4sQ0FBbkI7QUFDRDtBQWxCWSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnZlcnNhdGlvbkxpc3QgZnJvbSBcIi4uL3NlcnZpY2VzU09MSUQvY29udmVyc2F0aW9uL2xpc3RcIjtcbmltcG9ydCBDb252ZXJzYXRpb25DcmVhdGUgZnJvbSBcIi4uL3NlcnZpY2VzU09MSUQvY29udmVyc2F0aW9uL2NyZWF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpc3Q6IChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSByZXEuc2Vzc2lvbi5jb250ZXh0O1xuICAgIGNvbnN0IHBhcmFtcyA9IHJlcS5ib2R5O1xuXG4gICAgY29uc3Qgc2VydmljZSA9IG5ldyBDb252ZXJzYXRpb25MaXN0KHsgY29udGV4dCB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gc2VydmljZS5ydW4ocGFyYW1zKTtcblxuICAgIHJlbmRlclByb21pc2VBc0pzb24ocmVzLCBwcm9taXNlKTtcbiAgfSxcbiAgY3JlYXRlOiAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gcmVxLnNlc3Npb24uY29udGV4dDtcbiAgICBjb25zdCBwYXJhbXMgPSByZXEuYm9keTtcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBuZXcgQ29udmVyc2F0aW9uQ3JlYXRlKHsgY29udGV4dCB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gc2VydmljZS5ydW4ocGFyYW1zKTtcblxuICAgIHJlbmRlclByb21pc2VBc0pzb24ocmVzLCBwcm9taXNlKTtcbiAgfVxufTtcbiJdfQ==