const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUserEventedit } = require('./userpostEventedit');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:data').post(addUserEventedit);

module.exports = userRouter;
