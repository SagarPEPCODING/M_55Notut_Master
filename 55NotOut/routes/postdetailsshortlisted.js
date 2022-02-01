const express = require('express');
const userRouter = express.Router();
const app = express();
const { adddetailspost } = require('./userposteddetails');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:data1/:data2/:data3').post(adddetailspost);

module.exports = userRouter;
