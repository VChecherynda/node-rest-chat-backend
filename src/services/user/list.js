import Livr from "livr";
Livr.Validator.defaultAutoTrim(true);

import User from "../../models/user";
import Base from "../base";

export default class List extends Base {
  async validate(data) {
    const rules = { data: "any_object" };

    const validator = new Livr.Validator(rules);
    this.validator = validator;
    return validator.validate(data);
  }

  async execute(cleanData) {
    const savedUsers = await User.findAllEntity(["id", "name", "email"]);

    if (!savedUsers) {
      return { status: 404, data: "There is no users" };
    }

    const cleanedSavedUsers = savedUsers.map(({ id, name, email }) => {
      return {
        id,
        name,
        email
      };
    });

    return { status: 200, data: { users: cleanedSavedUsers } };
  }
}
