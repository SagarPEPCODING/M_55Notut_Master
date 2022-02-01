const express = require('express');
const userRouter = express.Router();
const app = express();

const { getUserTalents } = require('./getallUserTalent');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/').get(getUserTalents);

module.exports = userRouter;
