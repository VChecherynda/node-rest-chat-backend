import validator from "validator";

import makeDb from "../../dbSOLID/postgre-sql/conversation";
import Base from "./base";

export default class Create extends Base {
  async validate() {
    const rules = {
      data: [
        "required",
        {
          userOneId: ["required"],
          userTwoId: ["required"]
        }
      ]
    };

    validator(data, rules);
  }

  async execute(data) {
    const db = makeDb();

    const conversation = await db.findOne(data);

    if (conversation) {
      return { status: 403, conversation };
    }

    const users = await db.create(data);
    return { status: 201, users };
  }
}
