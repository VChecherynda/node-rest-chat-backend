import Livr from "livr";
Livr.Validator.defaultAutoTrim(true);

import Base from "../base";
import Room from "../../models/room";

export default class Create extends Base {
  async validate(data) {
    const rules = {
      data: [
        "required",
        {
          nested_object: {
            name: "required",
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

    const savedRoom = await Room.findOneEntity(
      "name",
      data.name
    );

    if (savedRoom) {
      return {
        status: 403,
        data: "Room exists"
      };
    }

    const conversation = await Room.create({
      name: data.name
    });

    return {
      status: 201,
      data: { id: conversation.id, message: "Room created" }
    };
  }
}
