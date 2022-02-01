const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUserOrganisationedit } = require('./userpostOrganisationedit');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:data').post(addUserOrganisationedit);

module.exports = userRouter;
