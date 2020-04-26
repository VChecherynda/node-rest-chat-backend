import Conversation from "../../../modelsSOLID/message";

import connectDb from "../connect";
import buildDb from "../message";

const messageDb = buildDb({ connectDb: connectDb, model: Conversation });

export default messageDb;
