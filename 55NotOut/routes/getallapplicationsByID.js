const express = require('express');
const userRouter = express.Router();
const app = express();
const {
  getAllUserApplication,
} = require('./getallapplicationsFromApplication');

app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:jobid').get(getAllUserApplication);

module.exports = userRouter;
