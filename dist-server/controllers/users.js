"use strict";

var User = require("../models/user");

exports.getUsers = function (req, res, next) {
  User.findAll({
    attributes: ["id", "name", "email"]
  }).then(function (users) {
    if (!users) {
      return res.status(404).json({
        message: "There are no users"
      });
    }

    res.status(200).json({
      users: users
    });
  })["catch"](function (err) {
    var error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  });
};