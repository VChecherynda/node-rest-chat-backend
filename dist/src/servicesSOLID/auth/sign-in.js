import validator from "validator";

import makeDb from "../../dbSOLID/postgre-sql/auth";
import Base from "../base";

export default class SignIn extends Base {
  async validate() {
    const rules = {
      data: [
        "required",
        {
          email: ["required"],
          password: ["required"]
        }
      ]
    };

    return validator(data, rules);
  }

  async execute(data) {
    const db = makeDb();

    const savedUser = await db.findOne(data.email);

    if (!savedUser) {
      return { status: 401, message: "Invalid email or password" };
    }

    const isMatch = await bcrypt.compare(data.password, savedUser.password);

    if (isMatch) {
      const token = jwt.sign(
        {
          id: savedUser.id,
          email: savedUser.email
        },
        "superDuperSecretKey",
        { expiresIn: "1h" }
      );

      const result = { id: savedUser.id, token: token };
      return { status: 201, result };
    }
  }
}
