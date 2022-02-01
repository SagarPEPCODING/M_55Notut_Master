const express = require('express');
const userRouter = express.Router();
const app = express();
const { userprofileproductGet } = require('./getproductprofilejobsbyid');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:emailid').get(userprofileproductGet);

module.exports = userRouter;
