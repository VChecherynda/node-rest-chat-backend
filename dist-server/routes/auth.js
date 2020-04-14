"use strict";

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("../controllers/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post("/sign-in", _auth["default"].postSignin);
router.post("/sign-up", _auth["default"].postSignup);
module.exports = router;