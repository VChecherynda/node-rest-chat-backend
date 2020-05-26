import Livr from "livr";
Livr.Validator.defaultAutoTrim(true);

import Base from "../base";
import Message from "../../models/message";

export default class Update extends Base {
  async validate(data) {
    const rules = {
      data: [
        "required",
        {
          nested_object: {
            id: "required",
            message: "required"
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

    const savedMessage = await Message.findById(data.id);
    savedMessage.message = data.message;

    const updatedMessage = await savedMessage.save();

    return {
      status: 201,
      data: {
        id: updatedMessage.toJSON().id,
        message: updatedMessage.toJSON().message
      }
    };
  }
}
