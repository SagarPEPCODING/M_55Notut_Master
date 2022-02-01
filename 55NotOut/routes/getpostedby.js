const express = require('express');
const userRouter = new express.Router();
const { getPosteddata } = require('./getpostedbydata');

userRouter.route('/:id').get(getPosteddata);

module.exports = userRouter;
