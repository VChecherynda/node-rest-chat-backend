"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _user = _interopRequireDefault(require("./user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Here add special libraries to our model
const makeUser = (0, _user.default)({
  dbTypes: _sequelize.DataTypes
});
var _default = makeUser;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHNTT0xJRC91c2VyL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1ha2VVc2VyIiwiZGJUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOzs7O0FBSEE7QUFLQSxNQUFNQSxRQUFRLEdBQUcsbUJBQWM7QUFBRUMsRUFBQUEsT0FBTyxFQUFQQTtBQUFGLENBQWQsQ0FBakI7ZUFFZUQsUSIsInNvdXJjZXNDb250ZW50IjpbIi8vIEhlcmUgYWRkIHNwZWNpYWwgbGlicmFyaWVzIHRvIG91ciBtb2RlbFxuXG5pbXBvcnQgeyBEYXRhVHlwZXMgYXMgZGJUeXBlcyB9IGZyb20gXCJzZXF1ZWxpemVcIjtcbmltcG9ydCBidWlsZE1ha2VVc2VyIGZyb20gXCIuL3VzZXJcIjtcblxuY29uc3QgbWFrZVVzZXIgPSBidWlsZE1ha2VVc2VyKHsgZGJUeXBlcyB9KTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZVVzZXI7XG4iXX0=