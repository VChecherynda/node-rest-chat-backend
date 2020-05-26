import User from "./user";
import Room from "./room";
import Message from "./message";

User.options = {
  modelName: "user"
};

Room.options = {
  modelName: "room"
};

Message.options = {
  modelName: "message"
};

export default {
  User,
  Conversation,
  Message
};
