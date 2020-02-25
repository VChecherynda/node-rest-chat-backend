const User = require("../models/user");

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
