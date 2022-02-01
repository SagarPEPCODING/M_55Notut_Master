const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUsernoofjobsadd } = require('./usernoofjobs');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:data1/:data2').post(addUsernoofjobsadd);

module.exports = userRouter;
