const express = require("express");
const {
  getAllUser,
  signUpUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.ctrl");
const router = express.Router();

// get all users
router.get("/", getAllUser);

//signup
router.post("/registration", signUpUser);

//update user
router.put("/:id", updateUser);

// Remove user
router.delete("/:id", deleteUser);

module.exports = router;
