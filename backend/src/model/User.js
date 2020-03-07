const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  name: {
    type: String
  },
  lastName: {
    type: String
  },
  phoneNo: {
    type: String
  },
  Project: {
    type: String
  }
});
const User = mongoose.model("User", userSchema);
module.exports = User;
