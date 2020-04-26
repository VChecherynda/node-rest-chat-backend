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
            conversationId: "required",
            text: "required"
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

    if (!data.text) {
      return {
        status: 403,
        data: { message: "Message could not be empty" }
      };
    }

    const savedConversation = await Message.create({
      userId: data.userId,
      conversationId: data.conversationId,
      text: data.text
    });

    return {
      status: 201,
      data: {
        id: savedConversation.toJSON().id,
        userId: data.userId,
        conversationId: data.conversationId,
        text: savedConversation.toJSON().text,
        createdAt: savedConversation.toJSON().createdAt
      }
    };
  }
}
