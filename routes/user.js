const express = require("express");
const router = express.Router();
const userDb = require("../models/user");
const {
  addUser,
  getAllUser,
  getUserById,
  updateUserById,
  deleteUser,
} = require("../controllers/user");

router.route("/")
  .get(getAllUser)
  .post(addUser);
router.route("/:id")
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUser);

module.exports = router;
