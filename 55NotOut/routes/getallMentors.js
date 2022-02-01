const express = require('express');
const userRouter = express.Router();
const app = express();

const { getUserMentors } = require('./getallUserMentors');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/').get(getUserMentors);

module.exports = userRouter;
