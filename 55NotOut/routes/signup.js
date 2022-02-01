const express = require('express');
const userRouter = new express.Router();
const { addUser } = require('./userpost');

userRouter
  .route(
    '/:email_id/:password/:confirm_password/:user_name/:phone_number/:token/:val2/:metororjobseeker'
  )
  .post(addUser);

module.exports = userRouter;
