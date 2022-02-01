const express = require('express');
const userRouter = express.Router();
const app = express();
const { getUserEvents } = require('./getallUserEvent');

app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/').get(getUserEvents);

module.exports = userRouter;
