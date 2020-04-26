import User from "./user";
import Conversation from "./conversation";

User.options = {
  modelName: "user"
};

Conversation.options = {
  modelName: "conversation"
};

export default {
  User,
  Conversation
};
