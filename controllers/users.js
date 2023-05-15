import Users from "../models/user.js";

const routes = {};

routes.login = async (req, res) => {
  const { username, password } = req.body;

  const isValid = await Users.findOne({ username: username });

  if (isValid) {
    if (isValid.password === password) {
      res.status(200).send({ username: username, id: isValid._id });
    } else {
      res.status(401).send({ message: "Invalid Credentials" });
    }
  } else {
    res.status(401).send({ message: "Invalid Credentials" });
  }
};

routes.register = async (req, res) => {
  const { username, password } = req.body;

  console.log(req.body);

  const isValid = await Users.findOne({ username: username });

  if (isValid) {
    res.status(401).send({ message: "Username already exists" });
  } else {
    const newUser = new Users({
      username: username,
      password: password,
    });

    const savedUser = await newUser.save();

    if (savedUser) {
      res.status(200).send({ username: username, id: savedUser._id });
    } else {
      res.status(500).send({ message: "Something went wrong" });
    }
  }
};

export default routes;
