const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUsereditjob } = require('./userposteditjob');
app.use(express.json());
console.log('am in adduserdb');
userRouter.route('/:data').post(addUsereditjob);

module.exports = userRouter;
