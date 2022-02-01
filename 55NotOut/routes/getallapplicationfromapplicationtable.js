const express = require('express');
const userRouter = express.Router();
const app = express();
const {
  getUserApplicationstatus,
} = require('./getallapplicationsstatusapplication');

app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:value/:email').get(getUserApplicationstatus);

module.exports = userRouter;
