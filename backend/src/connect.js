const mongoose = require("mongoose");
const User = require("./model/User");
const connection = "mongodb://mongo:27017/expressmongo";
const connectDb = () => {
  return mongoose.connect(connection);
};
module.exports = connectDb;
