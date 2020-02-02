const bcrypt = require("bcryptjs");

const User = require("../models/user");

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
      res.status(200).json({ message: "Successfully sighup" });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

// exports.postSignin = (req, res, next) => {
//   const email = req.body.email;
//   const password = req.body.password;

//   bcrypt
//     .hash(password, 12)
//     .then(hashedPassword => {
//       const user = new User({
//         name: name,
//         email: email,
//         password: hashedPassword
//       });
//       return user.save();
//     })
//     .then(result => {
//       res.status(200).json({ message: "Successfully sighup" });
//     })
//     .catch(err => {
//       const error = new Error(err);
//       error.httpStatusCode = 500;
//       return next(error);
//     });
// };
