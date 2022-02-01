const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUserResume } = require('./userpostResumeProfile');
app.use(express.json());
console.log('am in adduserdb');
userRouter.route('/:data/:mail_id').post(addUserResume);


module.exports = userRouter;
