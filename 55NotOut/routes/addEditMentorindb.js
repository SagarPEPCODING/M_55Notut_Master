const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUserMentorEdit } = require('./userpostMentorEdit');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:data').post(addUserMentorEdit);

module.exports = userRouter;
