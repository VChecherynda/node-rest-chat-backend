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
