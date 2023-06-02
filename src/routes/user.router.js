const { getAllUsers, create, getOne, remove, updateUser } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
	.get(getAllUsers)
	.post(create)

userRouter.route("/:id")
	.get(getOne)
	.delete(remove)
	.put(updateUser)

module.exports = userRouter;