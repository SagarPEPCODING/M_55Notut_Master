const express = require('express');
const userRouter = new express.Router();
const { getproductsbyidd } = require('./getproductsfromid');

userRouter.route('/:id').get(getproductsbyidd);

module.exports = userRouter;
