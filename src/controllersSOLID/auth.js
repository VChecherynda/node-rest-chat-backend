import SignIn from "../servicesSOLID/auth/sign-in";
import SignUp from "../servicesSOLID/auth/sign-up";

export default {
  signIn: (req, res) => {
    // const context = req.session.context;
    // const params = req.body;

    // const service = new SignIn({ context });
    // const promise = service.run(params);

    return res.send("SIGN IN");

    // renderPromiseAsJson(res, promise);
  },
  signUp: (req, res) => {
    const data = req.body;

    const service = new SignUp();
    const promise = service.run(data);

    promise
      .then(({ status, data }) => {
        return res.status(status).json(data);
      })
      .catch(({ status, data }) => {
        return res.status(status).json(data);
      });
  }
};
