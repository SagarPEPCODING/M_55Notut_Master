const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUserImage } = require('./userpostImageProfile');
app.use(express.json());
console.log('am in adduserdb');
userRouter.route('/:data/:mail_id').post(addUserImage);


module.exports = userRouter;
