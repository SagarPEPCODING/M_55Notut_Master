const express = require('express');
const userRouter = express.Router();
const app = express();
const { userprofilementorGet } = require('./getmentorprofilejobsbyid');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:emailid').get(userprofilementorGet);

module.exports = userRouter;
