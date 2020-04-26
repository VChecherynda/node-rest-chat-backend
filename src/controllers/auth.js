import SignIn from "../services/auth/sign-in";
import SignUp from "../services/auth/sign-up";

import { renderPromiseAsJson } from "../utils/helper";

export default {
  signIn: (req, res) => {
    const data = req.body;

    const service = new SignIn();
    const promise = service.run({ data });

    renderPromiseAsJson(promise, res);
  },
  signUp: (req, res) => {
    const data = req.body;

    const service = new SignUp();
    const promise = service.run({ data });

    renderPromiseAsJson(promise, res);
  }
};
