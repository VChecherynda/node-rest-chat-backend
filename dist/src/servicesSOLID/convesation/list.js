import validator from "validator";

import makeDb from "../../dbSOLID/postgre-sql/conversation";
import Base from "../base";

export default class List extends Base {
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

    return validator(data, rules);
  }

  async execute(data) {
    const db = makeDb();

    const result = await db.findAll();
    return { status: 200, result };
  }
}
