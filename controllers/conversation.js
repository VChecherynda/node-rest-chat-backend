const User = require("../models/user");
const Conversation = require("../models/conversation");
const Message = require("../models/message");

exports.getUsers = (req, res, next) => {
  User.findAll()
    .then(users => {
      if (!users) {
        return res.status(404).json({ message: "There are no users" });
      }

      res.status(200).json({
        users: users
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postCreateConversation = (req, res, next) => {
  const { userOneId, userTwoId } = req.body;

  Conversation.create({
    userOneId: userOneId,
    userTwoId: userTwoId
  })
    .then(users => {
      res.status(201).json({
        conversationId: "",
        message: "Conversation is created"
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postCreateMessage = (req, res, next) => {
  const { text, conversationId } = req.body;

  if (!text) {
    res.status(403).json({
      conversationId: "",
      message: "Message could not be empty"
    });
  }

  Message.create({ text: text, foreignKey: conversationId })
    .then(message => {
      res.status(201).json({
        conversationId: conversationId,
        message: "Message was created"
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.putEditMessage = (req, res, next) => {
  const { text, messageId } = req.body;

  Message.findByPk(messageId)
    .then(message => {
      message.text = text;
      return message.save();
    })
    .then(result => {
      res.status(201).json({
        conversationId: "",
        message: "Message was edited"
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.deleteMessage = (req, res, next) => {
  const { messageId } = req.body;

  Message.findByPk(messageId)
    .then(message => {
      return message.destroy();
    })
    .then(result => {
      res.status(200).json({
        conversationId: "",
        message: "Message was deleted"
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};
