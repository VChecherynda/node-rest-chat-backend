"use strict";

var Conversation = require("../models/conversation");

var Message = require("../models/message");

exports.postConversationsCreate = function (req, res, next) {
  var _req$body = req.body,
      userOneId = _req$body.userOneId,
      userTwoId = _req$body.userTwoId;
  Conversation.findOne({
    where: {
      userTwoId: Number(userTwoId)
    },
    attributes: ["id", "userOneId", "userTwoId"]
  }).then(function (conversation) {
    if (conversation) {
      return res.status(403).json({
        message: "Conversation is exist already"
      });
    }

    return;
  }).then(function (result) {
    Conversation.create({
      userOneId: userOneId,
      userTwoId: userTwoId
    }).then(function (conversation) {
      res.status(201).json(conversation);
    })["catch"](function (err) {
      var error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
  });
};

exports.getConversationsList = function (req, res, next) {
  Conversation.findAll({
    attributes: ["id", "userOneId", "userTwoId"]
  }).then(function (conversations) {
    res.status(200).json({
      conversations: conversations
    });
  })["catch"](function (err) {
    var error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  });
};