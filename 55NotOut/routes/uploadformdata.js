const express = require('express');
const userRouter = express.Router();
const app = express();
const { postimage } = require('./uploadpostimage');
app.use(express.json());
console.log('am in adduserdb uploadformdata');
userRouter.route('/:data').post(postimage);

module.exports = userRouter;
