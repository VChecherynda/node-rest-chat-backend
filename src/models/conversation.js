import { DataTypes as DT } from "sequelize";
import UUIDV4 from "uuid/v4";

import Base from "./base";
import User from "./user";

class Conversation extends Base {
  static schema = {
    id: {
      type: DT.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4()
    },
    userOneId: {
      type: DT.STRING,
      allowNull: false
    },
    userTwoId: {
      type: DT.STRING,
      allowNull: false
    }
  };

  static initRelations() {
    this.associate = () => {
      this.hasOne(User, { foreignKey: "userOneId" });
      this.hasOne(User, { foreignKey: "userTwoId" });
    };
  }
}

export default Conversation;
