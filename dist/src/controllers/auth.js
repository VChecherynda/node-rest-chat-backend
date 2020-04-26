const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.postSignin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({
    where: { email: email },
    attributes: ["id", "name", "email", "password"]
  })
    .then(user => {
      const savedUser = user.toJSON();

      if (!savedUser) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      bcrypt
        .compare(password, savedUser.password)
        .then(doMatch => {
          if (doMatch) {
            const token = jwt.sign(
              {
                id: savedUser.id,
                email: savedUser.email
              },
              "superDuperSecretKey",
              { expiresIn: "1h" }
            );

            return res.status(201).json({
              id: savedUser.id,
              token: token
            });
          }

          throw err;
        })
        .catch(err => {
          return res.status(422).json({ message: "Invalid email or password" });
        });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postSignup = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  bcrypt
    .hash(password, 12)
    .then(hashedPassword => {
      const user = new User({
        name: name,
        email: email,
        password: hashedPassword
      });
      return user.save();
    })
    .then(result => {
      res.status(200).json({ user: result });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};
