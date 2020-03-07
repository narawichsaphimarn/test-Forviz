const express = require("express");
const app = express();
const connectDb = require("./src/connect");
const bodyParser = require("body-parser");
const data_user = require("./src/mockup/mockup_user");
const data_news = require("./src/mockup/mockup_news");
const User = require("./src/model/User");
const News = require("./src/model/News");
const morgan = require("morgan");

const user = require("./src/routes/user");

const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(async (req, res, next) => {
  console.log("Request Type:", req.method);
  next();
});

app.use("/user", user);

connectDb().then(() => {
  console.log("MongoDb connected");
});

data_user.map(async (item, index) => {
  const user = new User(item);
  await user.save().then(() => console.log(`User created`));
});

data_news.map(async (item, index) => {
  const news = new News(item);
  await news.save().then(() => console.log(`News created`));
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
