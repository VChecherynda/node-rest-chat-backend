"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _signIn = _interopRequireDefault(require("../servicesSOLID/auth/sign-in"));

var _signUp = _interopRequireDefault(require("../servicesSOLID/auth/sign-up"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  signIn: (req, res) => {
    const context = req.session.context;
    const params = req.body;
    const service = new _signIn.default({
      context
    });
    const promise = service.run(params);
    renderPromiseAsJson(res, promise);
  },
  signUp: (req, res) => {
    const context = req.session.context;
    const params = req.body;
    const service = new _signUp.default({
      context
    });
    const promise = service.run(params);
    renderPromiseAsJson(res, promise);
  }
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyc1NPTElEL2F1dGguanMiXSwibmFtZXMiOlsic2lnbkluIiwicmVxIiwicmVzIiwiY29udGV4dCIsInNlc3Npb24iLCJwYXJhbXMiLCJib2R5Iiwic2VydmljZSIsIlNpZ25JbiIsInByb21pc2UiLCJydW4iLCJyZW5kZXJQcm9taXNlQXNKc29uIiwic2lnblVwIiwiU2lnblVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7ZUFFZTtBQUNiQSxFQUFBQSxNQUFNLEVBQUUsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDcEIsVUFBTUMsT0FBTyxHQUFHRixHQUFHLENBQUNHLE9BQUosQ0FBWUQsT0FBNUI7QUFDQSxVQUFNRSxNQUFNLEdBQUdKLEdBQUcsQ0FBQ0ssSUFBbkI7QUFFQSxVQUFNQyxPQUFPLEdBQUcsSUFBSUMsZUFBSixDQUFXO0FBQUVMLE1BQUFBO0FBQUYsS0FBWCxDQUFoQjtBQUNBLFVBQU1NLE9BQU8sR0FBR0YsT0FBTyxDQUFDRyxHQUFSLENBQVlMLE1BQVosQ0FBaEI7QUFFQU0sSUFBQUEsbUJBQW1CLENBQUNULEdBQUQsRUFBTU8sT0FBTixDQUFuQjtBQUNELEdBVFk7QUFVYkcsRUFBQUEsTUFBTSxFQUFFLENBQUNYLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ3BCLFVBQU1DLE9BQU8sR0FBR0YsR0FBRyxDQUFDRyxPQUFKLENBQVlELE9BQTVCO0FBQ0EsVUFBTUUsTUFBTSxHQUFHSixHQUFHLENBQUNLLElBQW5CO0FBRUEsVUFBTUMsT0FBTyxHQUFHLElBQUlNLGVBQUosQ0FBVztBQUFFVixNQUFBQTtBQUFGLEtBQVgsQ0FBaEI7QUFDQSxVQUFNTSxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0csR0FBUixDQUFZTCxNQUFaLENBQWhCO0FBRUFNLElBQUFBLG1CQUFtQixDQUFDVCxHQUFELEVBQU1PLE9BQU4sQ0FBbkI7QUFDRDtBQWxCWSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpZ25JbiBmcm9tIFwiLi4vc2VydmljZXNTT0xJRC9hdXRoL3NpZ24taW5cIjtcbmltcG9ydCBTaWduVXAgZnJvbSBcIi4uL3NlcnZpY2VzU09MSUQvYXV0aC9zaWduLXVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2lnbkluOiAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gcmVxLnNlc3Npb24uY29udGV4dDtcbiAgICBjb25zdCBwYXJhbXMgPSByZXEuYm9keTtcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBuZXcgU2lnbkluKHsgY29udGV4dCB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gc2VydmljZS5ydW4ocGFyYW1zKTtcblxuICAgIHJlbmRlclByb21pc2VBc0pzb24ocmVzLCBwcm9taXNlKTtcbiAgfSxcbiAgc2lnblVwOiAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gcmVxLnNlc3Npb24uY29udGV4dDtcbiAgICBjb25zdCBwYXJhbXMgPSByZXEuYm9keTtcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBuZXcgU2lnblVwKHsgY29udGV4dCB9KTtcbiAgICBjb25zdCBwcm9taXNlID0gc2VydmljZS5ydW4ocGFyYW1zKTtcblxuICAgIHJlbmRlclByb21pc2VBc0pzb24ocmVzLCBwcm9taXNlKTtcbiAgfVxufTtcbiJdfQ==