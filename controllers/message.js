const Message = require("../models/message");

exports.postCreateMessage = (req, res, next) => {
  const { userId, conversationId, text } = req.body;

  if (!text) {
    res.status(403).json({
      message: "Message could not be empty"
    });
  }

  Message.create({ userId: userId, conversationId: conversationId, text: text })
    .then(message => {
      res.status(201).json({
        userId: userId,
        conversationId: conversationId,
        message: "Message is created"
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
    .then(message => {
      res.status(201).json({
        messageId: message.id,
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
