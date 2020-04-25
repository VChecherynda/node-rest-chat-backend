import Livr from "livr";
Livr.Validator.defaultAutoTrim(true);
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import User from "../../modelsSOLID/user";
import Base from "../base";

export default class SignIn extends Base {
  async validate(data) {
    const rules = {
      data: {
        email: "required",
        password: ["required", { min_length: 6 }]
      }
    };

    const validator = new Livr.Validator(rules);
    this.validator = validator;
    return validator.validate(data);
  }

  async execute(data) {
    const savedUser = await User.findOneEntity("email", data.email);

    if (!savedUser) {
      return { status: 401, data: "Invalid email or password" };
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

      return { status: 200, data: { id: savedUser.id, token: token } };
    }
  }
}
