import Livr from "livr";
Livr.Validator.defaultAutoTrim(true);

import Base from "../base";
import Conversation from "../../models/conversation";

export default class Create extends Base {
  async validate(data) {
    const rules = {
      data: [
        "required",
        {
          nested_object: {
            userOneId: "required",
            userTwoId: "required"
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

    const savedConversation = await Conversation.findOneEntity(
      "userTwoId",
      data.userTwoId
    );

    if (savedConversation) {
      return {
        status: 403,
        data: "Conversation is exists"
      };
    }

    const conversation = await Conversation.create({
      userOneId: data.userOneId,
      userTwoId: data.userTwoId
    });

    return {
      status: 201,
      data: { id: conversation.id, message: "Conversation created" }
    };
  }
}
