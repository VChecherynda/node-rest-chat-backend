import MessageList from "../services/message/list";
import MessageCreate from "../services/message/create";
import MessageUpdate from "../services/message/update";
import MessageDelete from "../services/message/delete";

import { renderPromiseAsJson } from "../utils/helper";

export default {
  list: (req, res) => {
    const { id } = req.params;

    const service = new MessageList();
    const promise = service.run({ data: id });

    renderPromiseAsJson(promise, res);
  },
  create: (req, res) => {
    const data = req.body;

    const service = new MessageCreate();
    const promise = service.run({ data });

    renderPromiseAsJson(promise, res);
  },
  update: (req, res) => {
    const data = req.body;

    const service = new MessageUpdate();
    const promise = service.run({ data });

    renderPromiseAsJson(promise, res);
  },
  delete: (req, res) => {
    const data = req.body;

    const service = new MessageDelete();
    const promise = service.run({ data });

    renderPromiseAsJson(promise, res);
  }
};
