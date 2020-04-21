import User from "../../modelsSOLID/user";
import Base from "../base";

export default class SignIn extends Base {
  async validate(data) {
    const rules = {
      data: [
        "required",
        {
          name: "required",
          email: ["required", "email"]
        }
      ]
    };

    const validator = new Livr.Validator(rules);
    return validator.validate(data);
  }

  async execute(data) {
    const savedUser = await User.findByEmail(data.email);

    if (!savedUser) {
      return { status: 401, message: "Invalid email or password" };
    }

    const isMatch = await bcrypt.compare(data.password, savedUser.password);

    if (isMatch) {
      const token = jwt.sign(
        {
          id: savedUser.id,
          email: savedUser.email
        },
        "superDuperSecretKey",
        { expiresIn: "1h" }
      );

      const result = { id: savedUser.id, token: token };
      return { status: 201, result };
    }
  }
}
