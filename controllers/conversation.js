const User = require("../models/user");
const Conversation = require("../models/conversation");

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
