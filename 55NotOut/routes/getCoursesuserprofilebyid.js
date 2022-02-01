const express = require('express');
const userRouter = express.Router();
const app = express();
const { userprofilecoursesGet } = require('./getCoursesprofilejobsbyid');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:emailid').get(userprofilecoursesGet);

module.exports = userRouter;
