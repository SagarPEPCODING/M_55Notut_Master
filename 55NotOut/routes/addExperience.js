const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUserExpereince } = require('./userpostexperience');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:data1/:data2/:data3/:data4').post(addUserExpereince);

module.exports = userRouter;
