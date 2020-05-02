import Livr from "livr";
Livr.Validator.defaultAutoTrim(true);

import Base from "../base";
import Conversation from "../../models/conversation";
import Message from "../../models/message";

import { isNull } from "../../utils/helper";

export default class List extends Base {
  async validate(data) {
    const rules = { data: "any_object" };

    const validator = new Livr.Validator(rules);
    this.validator = validator;
    return validator.validate(data);
  }

  async execute() {
    const savedConversation = await Conversation.findById(id, [
      "id",
      "userOneId",
      "userTwoId"
    ]);

    if (!savedConversation) {
      return {
        status: 404,
        data: { message: "Conversation not found" }
      };
    }

    const userOneMessages = await Message.findAllEntity({
      where: {
        conversationId: savedConversation.id,
        userId: savedConversation.userOneId
      },
      raw: true
    });

    if (!userOneMessages) {
      return {
        status: 404,
        data: { message: "Messages not found" }
      };
    }

    const userTwoMessages = await Message.findAllEntity({
      where: {
        conversationId: userOneMessages.id,
        userId: userOneMessages.userOneId
      },
      raw: true
    });

    if (!userTwoMessages) {
      return {
        status: 404,
        data: { message: "Messages not found" }
      };
    }

    const combinedMessages = [].concat(
      isNull(userOneMessages),
      isNull(userTwoMessages)
    );

    const filteredMessages = combinedMessages.sort((a, b) => {
      return new Date(a.creaetedAt) - new Date(b.creaetedAt);
    });

    const cleanedFilteredMessages = filteredMessages.map(
      ({ id, userId, conversationId, text, creaetedAt }) => {
        return {
          id,
          userId,
          conversationId,
          text,
          creaetedAt
        };
      }
    );

    return { status: 200, data: { messages: cleanedFilteredMessages } };
  }
}
