import ConversationList from "../servicesSOLID/conversation/list";
import ConversationCreate from "../servicesSOLID/conversation/create";

export default {
  list: (req, res) => {
    const context = req.session.context;
    const params = req.body;

    const service = new ConversationList({ context });
    const promise = service.run(params);

    renderPromiseAsJson(res, promise);
  },
  create: (req, res) => {
    const context = req.session.context;
    const params = req.body;

    const service = new ConversationCreate({ context });
    const promise = service.run(params);

    renderPromiseAsJson(res, promise);
  }
};
