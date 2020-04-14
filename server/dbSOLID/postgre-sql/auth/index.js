import User from "../../../modelsSOLID/user";

import connectDb from "../connect";
import buildDb from "./auth";

const conversationDb = buildDb({ connectDb: connectDb, model: User });

export default conversationDb;
