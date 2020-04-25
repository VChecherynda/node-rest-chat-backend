import Livr from "livr";
Livr.Validator.defaultAutoTrim(true);

import Base from "../base";
import Conversation from "../../modelsSOLID/conversation";

export default class Create extends Base {
  async validate(data) {
    const rules = {
      data: {
        email: "required",
        password: ["required", { min_length: 6 }]
      }
    };

    const validator = new Livr.Validator(rules);
    this.validator = validator;
    return validator.validate(data);
  }

  async execute(data) {
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

    console.log("[Created conversation]", conversation);

    return {
      status: 201
      // data: { id: user.id, name: user.name, email: user.email }
    };
  }
}
