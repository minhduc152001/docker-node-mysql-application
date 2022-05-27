const { User } = require("../models");

const getAllUser = (req, res) => {
  User.findAll({
    where: {
      isDeleted: false,
    },
  })
    .then((result) => {
      res.status(200).json({ data: { status: "success", result } });
    })
    .catch((err) => {
      console.log(err);
    });
};

const signUpUser = (req, res) => {
  User.create({ ...req.body })
    .then((result) =>
      res.status(201).json({ data: { status: "success", result } })
    )
    .catch((err) => {
      console.log(err);
    });
};

const updateUser = (req, res) => {
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
};

const deleteUser = (req, res) => {
  User.update(
    { isDeleted: true },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(() => {
      res.status(204).json({ data: { status: "success" } });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { getAllUser, deleteUser, signUpUser, updateUser };
