import Livr from "livr";
Livr.Validator.defaultAutoTrim(true);

import Base from "../base";
import Message from "../../models/message";

export default class Create extends Base {
  async validate(data) {
    const rules = {
      data: [
        "required",
        {
          nested_object: {
            userId: "required",
            roomId: "required",
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

    if (!data.message) {
      return {
        status: 403,
        data: { message: "Message could not be empty" }
      };
    }

    const savedMessage = await Message.create({
      userId: data.userId,
      roomId: data.roomId,
      message: data.message
    });

    return {
      status: 201,
      data: {
        id: savedMessage.toJSON().id,
        userId: data.userId,
        roomId: data.roomId,
        message: savedMessage.toJSON().message,
        createdAt: savedMessage.toJSON().createdAt
      }
    };
  }
}
