const express = require('express');
const userRouter = new express.Router();
const { getPosteddatabyiddd } = require('./getposteddatafromidfrompostedjobs');

userRouter.route('/:id').get(getPosteddatabyiddd);

module.exports = userRouter;
