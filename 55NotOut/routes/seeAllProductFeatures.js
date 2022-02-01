const express = require('express');
const userRouter = new express.Router();
const app = express();
const { seefeatureProduct } = require('./SeeallfeaturedProduct');
app.use(express.json());
console.log('am in adduserdb jkjjlkjlkjlk');
userRouter.route('/:key/:Job_id').post(seefeatureProduct);

module.exports = userRouter;
