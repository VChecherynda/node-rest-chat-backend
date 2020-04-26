import Livr from "livr";
Livr.Validator.defaultAutoTrim(true);

import Base from "../base";
import Conversation from "../../modelsSOLID/conversation";

export default class List extends Base {
  async validate(data) {
    const rules = { data: "any_object" };

    const validator = new Livr.Validator(rules);
    this.validator = validator;
    return validator.validate(data);
  }

  async execute() {
    const savedConversations = await Conversation.findAllEntity([
      "id",
      "userOneId",
      "userTwoId"
    ]);

    console.log("[savedConversations]", savedConversations);

    const cleanedSavedConversations = savedConversations.map(
      ({ id, userOneId, userTwoId }) => {
        return {
          id,
          userOneId,
          userTwoId
        };
      }
    );

    return { status: 200, data: { conversations: cleanedSavedConversations } };
  }
}
