const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUserUpdatejob } = require('./userpostupdatedjob');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:obj').post(addUserUpdatejob);

module.exports = userRouter;
