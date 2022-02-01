const express = require('express');
const userRouter = express.Router();
const app = express();
const { userprofileEventGet } = require('./getuserprofileeventsbyid');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:emailid').get(userprofileEventGet);

module.exports = userRouter;
