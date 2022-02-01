const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUserUpdatedorganisation } = require('./userpostupdatedorgansiation');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:obj').post(addUserUpdatedorganisation);

module.exports = userRouter;
