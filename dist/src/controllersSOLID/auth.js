import SignIn from "../servicesSOLID/auth/sign-in";
import SignUp from "../servicesSOLID/auth/sign-up";

export default {
  signIn: (req, res) => {
    const context = req.session.context;
    const params = req.body;

    const service = new SignIn({ context });
    const promise = service.run(params);

    renderPromiseAsJson(res, promise);
  },
  signUp: (req, res) => {
    const context = req.session.context;
    const params = req.body;

    const service = new SignUp({ context });
    const promise = service.run(params);

    renderPromiseAsJson(res, promise);
  }
};
