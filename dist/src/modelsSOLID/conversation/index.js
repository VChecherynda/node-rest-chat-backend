// Here add special libraries to our model
import Id from "../Id";

import buildMakeConversation from "./conversation";

const makeConversation = buildMakeConversation({ dbTypes });

export default makeConversation;
