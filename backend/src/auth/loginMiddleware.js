const jwt = require("jwt-simple");

const User = require("../model/User");

module.exports = async (req, res, next) => {
  const { userName, password } = req.body;

  const user = await User.findOne({
    userName,
    password
  });

  if (user) next();
  else res.json({ msg: "Wrong username and password" });
};
