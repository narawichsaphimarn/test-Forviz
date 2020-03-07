const { Router } = require("express");
const jwt = require("jwt-simple");

const User = require("../model/User");
const News = require("../model/News");
const Read = require("../model/Readnews");
const loginMiddleware = require("../auth/loginMiddleware");
const auth = require("../auth/auth");

let router = Router();

router.get("/check-status", (req, res) => {
  res.send("Hello user");
});

router.post("/login", loginMiddleware, (req, res, next) => {
  const payload = {
    sub: req.body.userName,
    iat: new Date().getTime()
  };
  const SECRET = "MY_SECRET_KEY";
  res.json({ status: "202", token: jwt.encode(payload, SECRET) });
});

router.get("/get-news", auth, async (req, res) => {
  const { userName } = req.body;

  const user = await User.findOne({
    userName
  });

  if (!user) {
    res.status(500).json({ message: "Invalid userName" });
  }

  const project = user.Project;
  let news = await News.find({ project });
  let newsAll = await News.find({ project: "All" });
  news = [...news, ...newsAll];

  if (res.json({ status: "201", data: news })) {
    let read = [];
    let not_read = [];
    if (project === "A") {
      let newsNotRead = await News.find({ project: "B" });
      newsNotRead.map(item => {
        not_read.push(item._id);
      });
      news.map(item => {
        read.push(item._id);
      });
    } else {
      let newsNotRead = await News.find({ project: "A" });
      newsNotRead.map(item => {
        not_read.push(item._id);
      });
      news.map(item => {
        read.push(item._id);
      });
    }
    const id = user._id;

    const readnews = {
      id_username: id,
      id_read: read,
      id_noread: not_read
    };
    let userRead = await Read.findOne({ id_username: id });
    const read_data = new Read(readnews);
    if (userRead === null) {
      await read_data.save().then(() => {
        console.log("Success").catch(err => {
          console.error(err);
        });
      });
    } else {
      await read_data
        .updateMany()
        .then(() => {
          console.log("Success");
        })
        .catch(err => {
          console.error(err);
        });
    }
  } else {
    res.status(500).json({ message: "Invalid read data" });
  }
});

module.exports = router;
