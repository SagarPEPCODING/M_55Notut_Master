const express = require('express');
const userRouter = new express.Router();
const { getMentorbyidd } = require('./getMentorfromid');

userRouter.route('/:id').get(getMentorbyidd);

module.exports = userRouter;
