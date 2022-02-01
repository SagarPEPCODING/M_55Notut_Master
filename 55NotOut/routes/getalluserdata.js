const express = require('express');
const userRouter = express.Router();
const app = express();

const { getUserList } = require('./getallUserListing');
app.use(express.json());

userRouter.route('/').get(getUserList);
  
module.exports = userRouter;
