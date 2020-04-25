import { DataTypes as DT } from "sequelize";
import UUIDV4 from "uuid/v4";

import Base from "./base";

class User extends Base {
  static options = {
    modelName: "user"
  };

  static schema = {
    id: {
      type: DT.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4()
    },
    name: { type: DT.STRING, allowNull: false },
    email: { type: DT.STRING, allowNull: false },
    password: { type: DT.STRING, allowNull: false }
  };
}

export default User;
