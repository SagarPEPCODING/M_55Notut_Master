const express = require('express');
const userRouter = express.Router();
const app = express();

const { getUserJobs } = require('./getallUserJobs');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/').get(getUserJobs);

module.exports = userRouter;
