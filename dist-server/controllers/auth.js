"use strict";

var bcrypt = require("bcryptjs");

var jwt = require("jsonwebtoken");

var User = require("../models/user");

exports.postSignin = function (req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  User.findOne({
    where: {
      email: email
    },
    attributes: ["id", "name", "email", "password"]
  }).then(function (user) {
    var savedUser = user.toJSON();

    if (!savedUser) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    bcrypt.compare(password, savedUser.password).then(function (doMatch) {
      if (doMatch) {
        var token = jwt.sign({
          id: savedUser.id,
          email: savedUser.email
        }, "superDuperSecretKey", {
          expiresIn: "1h"
        });
        return res.status(201).json({
          id: savedUser.id,
          token: token
        });
      }

      throw err;
    })["catch"](function (err) {
      return res.status(422).json({
        message: "Invalid email or password"
      });
    });
  })["catch"](function (err) {
    var error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  });
};

exports.postSignup = function (req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  bcrypt.hash(password, 12).then(function (hashedPassword) {
    var user = new User({
      name: name,
      email: email,
      password: hashedPassword
    });
    return user.save();
  }).then(function (result) {
    res.status(200).json({
      user: result
    });
  })["catch"](function (err) {
    var error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  });
};