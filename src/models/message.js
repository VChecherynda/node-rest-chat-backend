import { DataTypes as DT } from "sequelize";
import UUIDV4 from "uuid/v4";

import Base from "./base";
import User from "./user";
import Room from "./room";

class Message extends Base {
  static schema = {
    id: {
      type: DT.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4()
    },
    roomId: {
      type: DT.STRING,
      allowNull: false
    },
    userId: {
      type: DT.STRING,
      allowNull: false
    },
    message: {
      type: DT.STRING,
      allowNull: false
    }
  };

  static initRelations() {
    this.associate = () => {
      this.hasOne(User, { foreignKey: "userId" });
      this.hasOne(Room, { foreignKey: "roomId" });
    };
  }
}

export default Message;
