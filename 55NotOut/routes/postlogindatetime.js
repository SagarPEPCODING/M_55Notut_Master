const express = require('express');
const userRouter = express.Router();
const app = express();
const { updatelogindt } = require('./updatelogindatetime');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:data1/:data2/:data3').post(updatelogindt);

module.exports = userRouter;
