const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUserview } = require('./userpostview');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:appid/:no').post(addUserview);

module.exports = userRouter;
