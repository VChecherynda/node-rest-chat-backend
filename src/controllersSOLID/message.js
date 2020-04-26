import MessageList from "../servicesSOLID/message/list";
import MessageCreate from "../servicesSOLID/message/create";
import MessageUpdate from "../servicesSOLID/message/update";

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
  }
};
