import User from "./user";
import Conversation from "./conversation";
import Message from "./message";

User.options = {
  modelName: "user"
};

Conversation.options = {
  modelName: "conversation"
};

Message.options = {
  modelName: "message"
};

export default {
  User,
  Conversation,
  Message
};
