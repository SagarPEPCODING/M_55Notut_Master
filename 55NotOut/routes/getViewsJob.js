const express = require('express');
const userRouter = express.Router();
const app = express();
const { getView } = require('./getviewJobData');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:id').get(getView);

module.exports = userRouter;
