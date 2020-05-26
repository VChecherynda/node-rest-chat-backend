import Livr from "livr";
Livr.Validator.defaultAutoTrim(true);

import Base from "../base";
import Message from "../../models/message";

export default class List extends Base {
  async validate(data) {
    const rules = {
      data: ["required"]
    };

    const validator = new Livr.Validator(rules);
    this.validator = validator;
    return validator.validate(data);
  }

  async execute(cleanData) {
    const { data: roomId } = cleanData;

    const roomMessages = await Message.findAll({
      where: { roomId }
    });


    if (!roomMessages) {
      return {
        status: 404,
        data: { message: "Messages not found" }
      };
    }

    const filteredRoomMessages = roomMessages.map(({
      id,
      userId,
      roomId,
      message,
      creaetedAt
    }) => ({
      id,
      userId,
      roomId,
      message,
      creaetedAt
    })).sort((a, b) => new Date(a.creaetedAt) - new Date(b.creaetedAt));

    return { status: 200, data: { messages: filteredRoomMessages } };
  }
}
