"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Conversation = require("../models/conversation");

var Message = require("../models/message");

var isNull = function isNull(x) {
  return x === null ? [] : x;
};

exports.getMessages = function (req, res, next) {
  var id = req.params.id;
  Conversation.findByPk(id, {
    attributes: ["id", "userOneId", "userTwoId"]
  }).then(function (conversation) {
    if (!conversation) {
      return res.status(404).json({
        message: "Conversation not found"
      });
    }

    Message.findAll({
      where: {
        userId: conversation.userOneId,
        conversationId: conversation.id
      },
      raw: true
    }).then(function (userOneMessages) {
      Message.findAll({
        where: {
          userId: conversation.userTwoId,
          conversationId: conversation.id
        },
        raw: true
      }).then(function (userTwoMessages) {
        console.log(userOneMessages, userTwoMessages);
        var combinedMessages = [].concat(isNull(userOneMessages), isNull(userTwoMessages));
        var filteredMessages = combinedMessages.sort(function (a, b) {
          return new Date(a.creaetedAt) - new Date(b.creaetedAt);
        });
        res.status(200).json({
          messages: filteredMessages
        });
      });
    });
  })["catch"](function (err) {
    var error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  });
};

exports.postCreateMessage = function (req, res, next) {
  var _req$body = req.body,
      userId = _req$body.userId,
      conversationId = _req$body.conversationId,
      text = _req$body.text;

  if (!text) {
    res.status(403).json({
      message: "Message could not be empty"
    });
  }

  Message.create({
    userId: userId,
    conversationId: conversationId,
    text: text
  }).then(function (result) {
    res.status(201).json({
      id: result.toJSON().id,
      userId: userId,
      conversationId: conversationId,
      text: result.toJSON().text,
      createdAt: result.toJSON().createdAt
    });
  })["catch"](function (err) {
    var error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  });
};

exports.putUpdateMessage = function (req, res, next) {
  var _req$body2 = req.body,
      messageId = _req$body2.messageId,
      text = _req$body2.text;
  Message.findByPk(messageId).then(function (message) {
    message.text = text;
    message.save();
    return message.toJSON();
  }).then(function (message) {
    res.status(201).json(message);
  })["catch"](function (err) {
    var error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  });
};

exports.deleteMessage = function (req, res, next) {
  var messageId = req.body.messageId;
  Message.findByPk(messageId).then(function (message) {
    var deletedMessage = {
      messageId: message.id,
      conversationId: message.conversationId
    };
    message.destroy();
    return deletedMessage;
  }).then(function (deletedMessage) {
    res.status(200).json(_objectSpread({}, deletedMessage, {
      message: "Message was deleted"
    }));
  })["catch"](function (err) {
    var error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  });
};