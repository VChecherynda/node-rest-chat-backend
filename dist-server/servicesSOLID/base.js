"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Base = /*#__PURE__*/function () {
  function Base(args) {
    _classCallCheck(this, Base);

    if (!args.context) throw new Error("CONTEXT_REQUIRED");
    this.context = args.context;
  }

  _createClass(Base, [{
    key: "run",
    value: function run(params) {
      var _this = this;

      return this.validate(params).then(function (cleanParams) {
        return _this.execute(cleanParams);
      });
    }
  }]);

  return Base;
}();

exports["default"] = Base;