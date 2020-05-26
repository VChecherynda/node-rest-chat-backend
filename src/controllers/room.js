import RoomList from "../services/room/list";
import RoomCreate from "../services/room/create";

import { renderPromiseAsJson } from "../utils/helper";

export default {
  list: (req, res) => {
    const data = req.body;

    const service = new RoomList();
    const promise = service.run({ data });

    renderPromiseAsJson(promise, res);
  },
  create: (req, res) => {
    const data = req.body;

    const service = new RoomCreate();
    const promise = service.run({ data });

    renderPromiseAsJson(promise, res);
  }
};
