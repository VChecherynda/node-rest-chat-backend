import Livr from "livr";
Livr.Validator.defaultAutoTrim(true);

import Base from "../base";
import Room from "../../models/room";

export default class List extends Base {
  async validate(data) {
    const rules = { data: "any_object" };

    const validator = new Livr.Validator(rules);
    this.validator = validator;
    return validator.validate(data);
  }

  async execute() {
    const savedRooms = await Room.findAllEntity([
      "id",
      "name"
    ]);

    const cleanedSavedRooms = savedRooms.map(({ id, name }) => ({ id, name }));

    return { status: 200, data: { rooms: cleanedSavedRooms } };
  }
}
