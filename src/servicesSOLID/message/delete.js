import Livr from "livr";
Livr.Validator.defaultAutoTrim(true);

import Base from "../base";
import Message from "../../modelsSOLID/message";

export default class Delete extends Base {
  async validate(data) {
    const rules = {
      data: [
        "required",
        {
          nested_object: {
            id: "required"
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

    const deletedMessage = {
      messageId: savedMessage.id,
      conversationId: savedMessage.conversationId
    };

    await savedMessage.destroy();

    return {
      status: 201,
      data: {
        ...deletedMessage,
        message: "Message was deleted"
      }
    };
  }
}
