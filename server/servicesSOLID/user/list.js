import validator from "validator";

import makeDb from "../../dbSOLID/postgre-sql/conversation";
import Base from "./base";

// exports.getUsers = (req, res, next) => {
//   User.findAll({
//     attributes: ["id", "name", "email"]
//   })
//     .then(users => {
//       if (!users) {
//         return res.status(404).json({ message: "There are no users" });
//       }

//       res.status(200).json({
//         users: users
//       });
//     })
//     .catch(err => {
//       const error = new Error(err);
//       error.httpStatusCode = 500;
//       return next(error);
//     });
// };

export default class List extends Base {
  async validate() {
    const rules = {};

    return validator(data, rules);
  }

  async execute(data) {
    const db = makeDb();

    const result = await db.findAll();

    return { status: 200, result };
  }
}
