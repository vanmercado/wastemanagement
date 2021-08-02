const express = require("express");
const router = express.Router();
const moment = require("moment");
const User = require("../Models/User");
const Waste = require("../Models/Waste");

router.get("/", async (req, res) => {
  let userCount;
  let acknowledgedWastes;
  let wastesMonth = 0;
  let wastesYear = 0;
  let yearInMilliseconds = 31556926000;
  let monthInMilliseconds = 2629800000;

  await User.find({}).then((user) => {
    userCount = user.length;
  });

  await Waste.find({ acknowledgedDate: { $exists: true } }).then((wastes) => {
    acknowledgedWastes = wastes.map((waste) => {
      return {
        estimatedWeight: waste.estimatedWeight,
        dateWithinMonth:
          monthInMilliseconds -
          (Date.now() - moment(waste.acknowledgedDate).valueOf()),
        dateWithinYear:
          yearInMilliseconds -
          (Date.now() - moment(waste.acknowledgedDate).valueOf()),
      };
    });
  });

  if (acknowledgedWastes.length > 0) {
    wastesMonth = acknowledgedWastes
      .filter((waste) => waste.dateWithinMonth > 0)
      .map((waste) => {
        return waste.estimatedWeight;
      })
      .reduce((a, b) => a + b);

    wastesYear = acknowledgedWastes
      .filter((waste) => waste.dateWithinYear > 0)
      .map((waste) => {
        return waste.estimatedWeight;
      })
      .reduce((a, b) => a + b);
  }

  res.send({ userCount, wastesMonth, wastesYear });
});

module.exports = router;
