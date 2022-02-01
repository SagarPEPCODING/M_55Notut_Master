const express = require('express');
const userRouter = express.Router();
const app = express();
const { getUserApplication } = require('./getallapplicationsforcheck');

app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:email/:jobid').get(getUserApplication);

module.exports = userRouter;
