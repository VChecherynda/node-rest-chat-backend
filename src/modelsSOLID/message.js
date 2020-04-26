import { DataTypes as DT } from "sequelize";
import UUIDV4 from "uuid/v4";

import Base from "./base";
import User from "./user";
import Conversation from "./conversation";

class Message extends Base {
  static schema = {
    id: {
      type: DT.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4()
    },
    userId: {
      type: DT.STRING,
      allowNull: false
    },
    conversationId: {
      type: DT.STRING,
      allowNull: false
    },
    text: {
      type: DT.STRING,
      allowNull: false
    }
  };

  static initRelations() {
    this.associate = () => {
      this.hasOne(User, { foreignKey: "userId" });
      this.hasOne(Conversation, { foreignKey: "conversationId" });
    };
  }
}

export default Message;
