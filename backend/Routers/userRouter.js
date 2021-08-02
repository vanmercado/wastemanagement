const express = require("express");
const router = express.Router();
const User = require("../Models/User");

router.get("/id/:_id", (req, res) => {
  User.find({ _id: req.params._id }).then((user) => {
    res.send(user);
  });
});

router.post("/login", (req, res) => {
  User.findOne({ username: req.body.username }).then((user) => {
    if (!user) {
      res.send({ error: "Username is not registered" });
    } else {
      if (user.password !== req.body.password) {
        res.send({ error: "Password does not match with the username" });
      } else {
        res.send(user);
      }
    }
  });
});

router.post("/", (req, res) => {
  User.findOne({ username: req.body.username }).then((findUser) => {
    if (findUser) {
      res.send({ error: "This username is already taken" });
    } else {
      let newUser = new User(req.body);
      newUser.save().then((user) => {
        res.send(user);
      });
    }
  });
});

router.put("/:_id", (req, res) => {
  User.findByIdAndUpdate(req.params._id, req.body, {
    useFindAndModify: false,
    new: true,
  }).then((user) => {
    res.send(user);
  });
});

router.delete("/:_id", (req, res) => {
  User.findByIdAndDelete(req.params._id).then((user) => {
    res.send(user);
  });
});

module.exports = router;
