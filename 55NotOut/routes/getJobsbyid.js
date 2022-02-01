const express = require('express');
const userRouter = new express.Router();
const { getJobsbyidd } = require('./getjobsfromid');

userRouter.route('/:id').get(getJobsbyidd);

module.exports = userRouter;
