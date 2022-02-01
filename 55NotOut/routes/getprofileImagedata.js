const express = require('express');
const userRouter = new express.Router();
const { getUserProfileImage } = require('./getuserprofileImagefromlogin');

userRouter.route('/:email_id').get(getUserProfileImage);


module.exports = userRouter;
