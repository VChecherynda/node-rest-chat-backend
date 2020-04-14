"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _signIn = _interopRequireDefault(require("../servicesSOLID/auth/sign-in"));

var _signUp = _interopRequireDefault(require("../servicesSOLID/auth/sign-up"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  signIn: function signIn(req, res) {
    var context = req.session.context;
    var params = req.body;
    var service = new _signIn["default"]({
      context: context
    });
    var promise = service.run(params);
    renderPromiseAsJson(res, promise);
  },
  signUp: function signUp(req, res) {
    var context = req.session.context;
    var params = req.body;
    var service = new _signUp["default"]({
      context: context
    });
    var promise = service.run(params);
    renderPromiseAsJson(res, promise);
  }
};
exports["default"] = _default;