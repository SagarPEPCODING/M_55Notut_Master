const express = require('express');
const userRouter = new express.Router();
const { getPosteddatabyidd } = require('./getposteddatafromid');

userRouter.route('/:id').get(getPosteddatabyidd);

module.exports = userRouter;
