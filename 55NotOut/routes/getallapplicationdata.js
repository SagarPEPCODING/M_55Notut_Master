const express = require('express');
const userRouter = express.Router();
const app = express();
const { getUserApplications } = require('./getallapplications');

app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:email/:jobid').get(getUserApplications);

module.exports = userRouter;