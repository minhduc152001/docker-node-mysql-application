const express = require("express");
const { User } = require("../models");
const router = express.Router();

// get all users
router.get("/", (req, res) => {
  User.findAll()
    .then((result) => {
      res.status(200).json({ data: { status: "success", result } });
    })
    .catch((err) => {
      console.log(err);
    });
});

//signup
router.post("/registration", (req, res) => {
  User.create({ ...req.body })
    .then((result) =>
      res.status(201).json({ data: { status: "success", result } })
    )
    .catch((err) => {
      console.log(err);
    });
});

//update user
router.put("/:id", (req, res) => {
  User.update(
    { ...req.body },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((result) => {
      res.status(200).json({ data: { status: "success", result } });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Remove user
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(204).json({ data: { status: "success" } });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
