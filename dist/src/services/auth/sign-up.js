import Livr from "livr";
Livr.Validator.defaultAutoTrim(true);
import bcrypt from "bcryptjs";

import Base from "../base";
import User from "../../models/user";

export default class SignUp extends Base {
  async validate(data) {
    const rules = {
      data: [
        "required",
        {
          nested_object: {
            name: "required",
            email: ["required", "email"],
            password: ["required", { min_length: 6 }]
          }
        }
      ]
    };

    const validator = new Livr.Validator(rules);
    this.validator = validator;
    return validator.validate(data);
  }

  async execute(cleanData) {
    const { data } = cleanData;

    const hashedPassword = await bcrypt.hash(data.password, 12);

    const savedUser = await User.findOneEntity("email", data.email);

    if (savedUser) {
      return {
        status: 401,
        data: "Email is already taken"
      };
    }

    const user = await User.create({
      name: data.name,
      email: data.email,
      password: hashedPassword
    });

    return {
      status: 201,
      data: { id: user.id, name: user.name, email: user.email }
    };
  }
}
