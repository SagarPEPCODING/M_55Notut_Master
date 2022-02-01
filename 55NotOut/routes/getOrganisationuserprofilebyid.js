const express = require('express');
const userRouter = express.Router();
const app = express();
const { userprofileorganisationGet } = require('./getorganisationprofilejobsbyid');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:emailid').get(userprofileorganisationGet);

module.exports = userRouter;
