const Conversation = require("../models/conversation");
const Message = require("../models/message");

const isNull = x => (x === null ? [] : x);

exports.getMessages = (req, res, next) => {
  const { id } = req.params;

  Conversation.findByPk(id, { attributes: ["id", "userOneId", "userTwoId"] })
    .then(conversation => {
      if (!conversation) {
        return res.status(404).json({ message: "Conversation not found" });
      }

      Message.findAll({
        where: {
          userId: conversation.userOneId,
          conversationId: conversation.id
        },
        raw: true
      }).then(userOneMessages => {
        Message.findAll({
          where: {
            userId: conversation.userTwoId,
            conversationId: conversation.id
          },
          raw: true
        }).then(userTwoMessages => {
          console.log(userOneMessages, userTwoMessages);

          const combinedMessages = [].concat(
            isNull(userOneMessages),
            isNull(userTwoMessages)
          );

          const filteredMessages = combinedMessages.sort((a, b) => {
            return new Date(a.creaetedAt) - new Date(b.creaetedAt);
          });

          res.status(200).json({
            messages: filteredMessages
          });
        });
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postCreateMessage = (req, res, next) => {
  const { userId, conversationId, text } = req.body;

  if (!text) {
    res.status(403).json({
      message: "Message could not be empty"
    });
  }

  Message.create({
    userId: userId,
    conversationId: conversationId,
    text: text
  })
    .then(result => {
      res.status(201).json({
        id: result.toJSON().id,
        userId: userId,
        conversationId: conversationId,
        text: result.toJSON().text,
        createdAt: result.toJSON().createdAt
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.putUpdateMessage = (req, res, next) => {
  const { messageId, text } = req.body;

  Message.findByPk(messageId)
    .then(message => {
      message.text = text;
      message.save();

      return message.toJSON();
    })
    .then(message => {
      res.status(201).json(message);
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
      const deletedMessage = {
        messageId: message.id,
        conversationId: message.conversationId
      };

      message.destroy();

      return deletedMessage;
    })
    .then(deletedMessage => {
      res.status(200).json({
        ...deletedMessage,
        message: "Message was deleted"
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};
