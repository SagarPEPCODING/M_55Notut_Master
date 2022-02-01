const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUserstaticpage } = require('./userstaticpage');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:data1/:data2/:data3/:data4/:data5/:data6').post(addUserstaticpage);

module.exports = userRouter;


