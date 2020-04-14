// Here add special libraries to our model
import Id from "../Id";

import buildMakeMessage from "./message";

const makeMessage = buildMakeMessage({ dbTypes });

export default makeMessage;
