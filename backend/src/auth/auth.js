const jwt = require("jwt-simple");

const SECRET = "MY_SECRET_KEY";
const User = require("../model/User");

module.exports = async (req, res, next) => {
  const token = req.header("token");
  if (!token) return res.status(401).json({ message: "Auth Error" });

  try {
    var decoded = jwt.decode(token, SECRET);
    const user = await User.findOne({
      userName: decoded.sub
    });
    if (user) next();
    else res.status(500).json({ message: "Invalid Token" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Invalid Token" });
  }
};
