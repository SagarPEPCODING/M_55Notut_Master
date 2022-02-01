const express = require('express');
const userRouter = express.Router();
const app = express();
const { getUserApplicationJob } = require('./getallapplicationsjob');

app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:email').get(getUserApplicationJob);

module.exports = userRouter;
