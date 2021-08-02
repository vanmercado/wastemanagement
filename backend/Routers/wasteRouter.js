const express = require("express");
const router = express.Router();
const Waste = require("../Models/Waste");

router.get("/:_id/:role", (req, res) => {
  const role = req.params.role;
  const _id = req.params._id;
  const page =
    parseInt(req.query.page) < 1 || req.query.page === undefined
      ? 1
      : parseInt(req.query.page);
  const limit = 10;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  if (role === "disposer") {
    Waste.find({ disposerUserId: _id })
      .populate("disposerUserId")
      .populate("recyclerUserId")
      .exec()
      .then((wastes) => {
        const previous = page === 1 ? null : `?page=${page - 1}`;
        const next = wastes.length > endIndex ? `?page=${page + 1}` : null;

        res.send({
          count: wastes.length,
          previous: previous,
          next: next,
          wastes: wastes.slice(startIndex, endIndex),
        });
      });
  } else if (role === "recycler") {
    Waste.find({ $or: [{ recyclerUserId: null }, { recyclerUserId: _id }] })
      .populate("disposerUserId")
      .populate("recyclerUserId")
      .exec()
      .then((wastes) => {
        const previous = page === 1 ? null : `?page=${page - 1}`;
        const next = wastes.length > endIndex ? `?page=${page + 1}` : null;

        res.send({
          count: wastes.length,
          previous: previous,
          next: next,
          wastes: wastes.slice(startIndex, endIndex),
        });
      });
  }
});

router.post("/", (req, res) => {
  let newWaste = new Waste(req.body);
  newWaste.save().then((waste) => {
    Waste.findOne({ _id: waste._id })
      .populate("disposerUserId")
      .populate("recyclerUserId")
      .exec()
      .then((waste) => res.send(waste));
  });
});

router.put("/:action/:_id", (req, res) => {
  switch (req.params.action) {
    case "claim":
      Waste.findOne({ _id: req.params._id }).then((waste) => {
        if (waste.recyclerUserId) {
          res.send({ error: "Event already claimed by other recyclers" });
        } else {
          Waste.findByIdAndUpdate(req.params._id, req.body, {
            useFindAndModify: false,
            new: true,
          })
            .populate("disposerUserId")
            .populate("recyclerUserId")
            .exec()
            .then((waste) => {
              res.send(waste);
            });
        }
      });
      break;
    case "cancel":
      Waste.findOne({ _id: req.params._id }).then((waste) => {
        if (waste.acknowledgedDate) {
          res.send({ error: "Pickup already acknowledged by disposer" });
        } else {
          Waste.findByIdAndUpdate(
            req.params._id,
            { recyclerUserId: null, pickupTime: null },
            {
              useFindAndModify: false,
              new: true,
            }
          )
            .populate("disposerUserId")
            .populate("recyclerUserId")
            .exec()
            .then((waste) => {
              res.send(waste);
            });
        }
      });
      break;
    case "acknowledge":
      Waste.findOne({ _id: req.params._id }).then((waste) => {
        if (!waste.recyclerUserId) {
          res.send({
            error: "Pickup was cancelled and cannot be acknowledged",
          });
        } else {
          Waste.findByIdAndUpdate(req.params._id, req.body, {
            useFindAndModify: false,
            new: true,
          })
            .populate("disposerUserId")
            .populate("recyclerUserId")
            .exec()
            .then((waste) => {
              res.send(waste);
            });
        }
      });
      break;

    default:
      res.end();
  }
});

router.delete("/:_id", (req, res) => {
  Waste.findByIdAndDelete(req.params._id).then((waste) => {
    res.send(waste);
  });
});

module.exports = router;
