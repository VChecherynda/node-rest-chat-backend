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
  const { id } = req.params;

  Conversation.findByPk(id, { attributes: ["id", "userOneId", "userTwoId"] })
    .then(conversation => {
      if (!conversation) {
        return res.status(404).json({ message: "Conversation not found" });
      }

      Message.findOne({
        where: {
          userId: conversation.userOneId,
          conversationId: conversation.id
        }
      }).then(userOneMessages => {
        Message.findOne({
          where: {
            userId: conversation.userTwoId,
            conversationId: conversation.id
          }
        }).then(userTwoMessages => {
          res.status(200).json({
            userOneMessages: userOneMessages || {},
            userTwoMessages: userTwoMessages || {}
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
