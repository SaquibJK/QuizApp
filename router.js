const express = require("express");
const router = express.Router();
const { quiz1, quiz2, quiz3 } = require("./quiz");
const result = require("./functions/result");
const path = require("path");
let a,b,c = "";
let choices = [];
const currEmail = require("./temp");

const mongoose = require("mongoose");
const User = require("./model/user");
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected To DB");
  }
});

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "assets")));

router.get("/page1", (req, res) => {
  res.render("quiz", { quiz: quiz1, href: "page1", text: "Next" });
});

router.post("/page1", (req, res) => {
  a = req.body.radio;
  val1 = req.body.label;
  if (a) {
    if (!choices.includes(a)) {
      choices.push(a);
    }
    res.render("quiz", { quiz: quiz2, href: "page2", text: "Next" });
  } else {
    res.render("quiz", { quiz: quiz1, href: "page1", text: "Next" });
  }
});

router.post("/page2", (req, res) => {
  b = req.body.radio;
  if (b) {
    if (!choices.includes(b)) {
      choices.push(b);
    }
    res.render("quiz", { quiz: quiz3, href: "page3", text: "Submit" });
  } else {
    res.render("quiz", { quiz: quiz2, href: "page2", text: "Next" });
  }
});

router.post("/page3", (req, res) => {
  let lang = "";
  c = req.body.radio;
  if (c) {
    if (!choices.includes(c)) {
      choices.push(c);
    }
    lang = result(a, b, c);
    const newUser = new User({
      email: currEmail.Email,
      choices: choices,
      lang: lang,
    });
    newUser.save((err) => {
      if (!err) {
        res.render("res", { lang: lang });
      } else {
        console.log(err);
      }
    });
  } else {
    res.render("quiz", { quiz: quiz3, href: "page3", text: "Submit" });
  }
});

module.exports = router;
