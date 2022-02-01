const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUserImagetable } = require('./userpostImageProfiletable');
app.use(express.json());
console.log('am in adduserdb');
userRouter.route('/:data/:mail_id').post(addUserImagetable);

module.exports = userRouter;
