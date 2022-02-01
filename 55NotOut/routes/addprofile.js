const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUserProfile } = require('./userpostuserprofile');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:data').post(addUserProfile);

module.exports = userRouter;
