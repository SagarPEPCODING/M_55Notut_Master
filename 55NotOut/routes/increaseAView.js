const express = require('express');
const userRouter = express.Router();
const app = express();
const { addView } = require('./postviewJobData');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:id/:views').post(addView);

module.exports = userRouter;
