const express = require('express');
const userRouter = express.Router();
const app = express();

const { getUserProducts } = require('./getallUserProduct');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/').get(getUserProducts);

module.exports = userRouter;
