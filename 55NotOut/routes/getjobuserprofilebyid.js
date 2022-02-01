const express = require('express');
const userRouter = express.Router();
const app = express();
const { userprofilejobGet } = require('./getuserprofilejobsbyid');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:emailid').get(userprofilejobGet);

module.exports = userRouter;
