const express = require('express');
const userRouter = new express.Router();
const app = express();
const { seefeaturejob } = require('./SeeallfeaturedJobs');
app.use(express.json());
console.log('am in adduserdb jkjjlkjlkjlk');
userRouter.route('/:key/:Job_id').post(seefeaturejob);

module.exports = userRouter;
