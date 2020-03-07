const mongoose = require("mongoose");
const readNewsSchema = new mongoose.Schema({
  id_username: { type: mongoose.Schema.Types.ObjectId, unique: true },
  id_read: {
    type: [mongoose.Schema.Types.ObjectId]
  },
  id_noread: {
    type: [mongoose.Schema.Types.ObjectId]
  }
});
const Readnews = mongoose.model("Readnews", readNewsSchema);
module.exports = Readnews;
