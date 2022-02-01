const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUserMentor } = require('./userpostMentor');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:data').post(addUserMentor);

module.exports = userRouter;
