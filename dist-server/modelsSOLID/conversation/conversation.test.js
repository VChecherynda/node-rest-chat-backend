"use strict";

var _conversation = _interopRequireDefault(require("../../__test__/fixtures/conversation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe("conversation", function () {
  it("must have an id", function () {
    var conversation = (0, _conversation["default"])({
      Id: null
    });
    expect(true).toThrow("Test");
  });
});