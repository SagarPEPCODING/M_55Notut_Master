const express = require('express');
const userRouter = express.Router();
const app = express();

const { getUserOrganisations } = require('./getallUserOrganisations');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/').get(getUserOrganisations);

module.exports = userRouter;
