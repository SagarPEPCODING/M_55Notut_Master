const express = require('express');
const userRouter = new express.Router();
const { getUser } = require('./userlogin');
const { getActivation } = require('./userActivation');

userRouter.route('/:email_id').get(getActivation);
userRouter.route('/:email_id').get(getUser);

module.exports = userRouter;
