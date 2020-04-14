"use strict";

var _message = _interopRequireDefault(require("../../__test__/fixtures/message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe("message", function () {
  it("must have an id", function () {
    var message = (0, _message["default"])({
      Id: null
    });
    expect(true).toThrow("Test");
  });
});