const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUserUpdatedcourse } = require('./userpostupdatedcourse');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:obj').post(addUserUpdatedcourse);

module.exports = userRouter;
