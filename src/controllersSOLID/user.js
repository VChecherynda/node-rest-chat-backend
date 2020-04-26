import UsersList from "../servicesSOLID/user/list";

import { renderPromiseAsJson } from "../utils/helper";

export default {
  list: (req, res) => {
    const data = req.body;

    const service = new UsersList();
    const promise = service.run(data);

    renderPromiseAsJson(promise, res);
  }
};
