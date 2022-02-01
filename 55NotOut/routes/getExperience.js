const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUsergetexp } = require('./getexperiencejobseeker');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:data1').get(addUsergetexp);

module.exports = userRouter;
