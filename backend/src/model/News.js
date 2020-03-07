const mongoose = require("mongoose");
const newsSchema = new mongoose.Schema({
  titleTH: {
    type: String,
    unique: true
  },
  titleEN: {
    type: String,
    unique: true
  },
  detailTH: {
    type: String
  },
  detailEN: {
    type: String
  },
  project: {
    type: String
  },
  start_date: {
    type: String
  },
  stop_date: {
    type: String
  }
});
const News = mongoose.model("News", newsSchema);
module.exports = News;
