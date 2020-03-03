const Conversation = require("../models/conversation");
const Message = require("../models/message");

exports.postConversationsCreate = (req, res, next) => {
  const { userOneId, userTwoId } = req.body;

  Conversation.findOne({
    where: {
      userTwoId: Number(userTwoId)
    },
    attributes: ["id", "userOneId", "userTwoId"]
  })
    .then(conversation => {
      if (conversation) {
        return res.status(403).json({
          message: "Conversation is exist already"
        });
      }

      return;
    })
    .then(result => {
      Conversation.create({
        userOneId: userOneId,
        userTwoId: userTwoId
      })
        .then(conversation => {
          res.status(201).json(conversation);
        })
        .catch(err => {
          const error = new Error(err);
          error.httpStatusCode = 500;
          return next(error);
        });
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
