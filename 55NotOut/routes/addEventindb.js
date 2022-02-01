const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUserEvent } = require('./userpostEvent');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:data').post(addUserEvent);

module.exports = userRouter;
