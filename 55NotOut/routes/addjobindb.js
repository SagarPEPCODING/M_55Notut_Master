const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUserjob } = require('./userpostjob');
app.use(express.json());
console.log('am in adduserdb');
userRouter.route('/:data').post(addUserjob);

module.exports = userRouter;
