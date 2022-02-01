const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUserUpdateEvent } = require('./userpostupdatedEvent');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:obj/:jobid').post(addUserUpdateEvent);

module.exports = userRouter;
