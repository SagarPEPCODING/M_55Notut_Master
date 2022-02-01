const express = require('express');
const userRouter = new express.Router();
const { getPosteddatabyiddbb } = require('./getposteddatafromidbb');

userRouter.route('/:id/:count').post(getPosteddatabyiddbb);

module.exports = userRouter;
