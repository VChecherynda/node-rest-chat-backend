import Conversation from "../../../modelsSOLID/conversation";

import connectDb from "../connect";
import buildDb from "../conversation";

const conversationDb = buildDb({ connectDb: connectDb, model: Conversation });

export default conversationDb;
