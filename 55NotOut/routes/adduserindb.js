const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUserProduct } = require('./userpostProduct');
app.use(express.json());
// console.log('am in adduserdb');
userRouter
  .route('/:jobid/:name/:description/:feature/:inputvalue/:Image_Name/:productorigin')
  .post(addUserProduct);

module.exports = userRouter;
