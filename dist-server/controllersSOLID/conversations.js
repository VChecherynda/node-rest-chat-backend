"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _list = _interopRequireDefault(require("../servicesSOLID/conversation/list"));

var _create = _interopRequireDefault(require("../servicesSOLID/conversation/create"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  list: function list(req, res) {
    var context = req.session.context;
    var params = req.body;
    var service = new _list["default"]({
      context: context
    });
    var promise = service.run(params);
    renderPromiseAsJson(res, promise);
  },
  create: function create(req, res) {
    var context = req.session.context;
    var params = req.body;
    var service = new _create["default"]({
      context: context
    });
    var promise = service.run(params);
    renderPromiseAsJson(res, promise);
  }
};
exports["default"] = _default;