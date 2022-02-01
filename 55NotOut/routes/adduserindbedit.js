const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUserProductedit } = require('./userpostProductedit');
app.use(express.json());
// console.log('am in adduserdb');
userRouter
  .route('/:jobid/:name/:description/:feature/:inputvalue/:Image_Name/:productorigin')
  .post(addUserProductedit);

module.exports = userRouter;
