const express = require('express');
const userRouter = new express.Router();
const app = express();
const { seefeatureevent } = require('./SeeallfeaturedEvents');
app.use(express.json());
console.log('am in adduserdb jkjjlkjlkjlk');
userRouter.route('/:key/:Job_id').post(seefeatureevent);

module.exports = userRouter;
