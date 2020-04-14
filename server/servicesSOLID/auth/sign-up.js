import validator from "validator";

import makeDb from "../../dbSOLID/postgre-sql/auth";
import Base from "./base";

export default class SignUp extends Base {
  async validate() {
    const rules = {
      data: [
        "required",
        {
          name: ["required"],
          email: ["required"],
          password: ["required"]
        }
      ]
    };

    return validator(data, rules);
  }

  async execute(data) {
    const db = makeDb();

    const hashedPassword = await bcrypt.hash(data.password, 12);

    const savedUser = await db.create({ ...data, password: hashedPassword });

    return { status: 201, savedUser };
  }
}
