const Conversation = require("../models/conversation");

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
