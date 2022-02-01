const express = require('express');
const userRouter = new express.Router();
const { getEventbyidd } = require('./geteventfromid');

userRouter.route('/:id').get(getEventbyidd);

module.exports = userRouter;
