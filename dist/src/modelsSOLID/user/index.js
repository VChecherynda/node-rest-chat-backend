// Here add special libraries to our model

import { DataTypes as dbTypes } from "sequelize";
import buildMakeUser from "./user";

const makeUser = buildMakeUser({ dbTypes });

export default makeUser;
