const express = require('express');
const userRouter = new express.Router();
const { editUser } = require('./edituserpost');

// console.log('here signup');
userRouter
  .route(
    '/:email_id/:password/:confirm_password/:user_name/:phone_number/:token/:val2'
  )
  .post(editUser);

module.exports = userRouter;
