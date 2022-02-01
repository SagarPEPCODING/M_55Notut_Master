const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUserUpdatementor } = require('./userpostupdatedmentor');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:obj').post(addUserUpdatementor);

module.exports = userRouter;
