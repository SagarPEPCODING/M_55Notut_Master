const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUseredit } = require('./userposteditdata');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:data').post(addUseredit);

module.exports = userRouter;
