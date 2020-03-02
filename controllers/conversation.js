const Conversation = require("../models/conversation");
const Message = require("../models/message");

exports.postConversationsCreate = (req, res, next) => {
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

exports.getConversationsList = (req, res, next) => {
  Conversation.findAll({ attributes: ["id", "userOneId", "userTwoId"] })
    .then(conversations => {
      res.status(200).json({
        conversations: conversations
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getConversation = (req, res, next) => {
  const { conversationId } = req.body;

  Conversation.findByPk(conversationId)
    .then(conversation => {
      if (!conversation) {
        return res.status(404).json({ message: "Conversation not found" });
      }

      const userOneMessages = Message.find({
        where: {
          userId: conversation.userOneId
        }
      });

      const userTwoMessages = Message.find({
        where: {
          userId: conversation.userTwoId
        }
      });

      res.status(200).json({
        userOneMessages: userOneMessages,
        userTwoMessages: userTwoMessages
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};
