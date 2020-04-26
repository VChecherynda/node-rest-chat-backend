import ConversationList from "../services/conversation/list";
import ConversationCreate from "../services/conversation/create";

import { renderPromiseAsJson } from "../utils/helper";

export default {
  list: (req, res) => {
    const data = req.body;

    const service = new ConversationList();
    const promise = service.run({ data });

    renderPromiseAsJson(promise, res);
  },
  create: (req, res) => {
    const data = req.body;

    const service = new ConversationCreate();
    const promise = service.run({ data });

    renderPromiseAsJson(promise, res);
  }
};
