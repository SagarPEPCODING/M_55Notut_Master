const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUserOrganisation } = require('./userpostOrganisation');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:data').post(addUserOrganisation);

module.exports = userRouter;
