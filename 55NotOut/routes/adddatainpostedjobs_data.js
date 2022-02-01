const express = require('express');
const userRouter = express.Router();
const app = express();
const { addPostedJobs } = require('./userdatainpostedjobs_data');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:data1/:data2').post(addPostedJobs);

module.exports = userRouter;
