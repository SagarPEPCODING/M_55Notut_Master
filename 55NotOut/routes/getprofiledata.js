const express = require('express');
const userRouter = new express.Router();
const { getUserProfile } = require('./getuserprofilefromlogin');

userRouter.route('/:email_id').get(getUserProfile);

module.exports = userRouter;
