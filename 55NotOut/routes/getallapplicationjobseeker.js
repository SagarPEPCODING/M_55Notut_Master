const express = require('express');
const userRouter = express.Router();
const app = express();
const { getUserApplication } = require('./getallapplicationsforseeker');

app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:email').get(getUserApplication);

module.exports = userRouter;
