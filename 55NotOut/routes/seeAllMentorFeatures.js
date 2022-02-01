const express = require('express');
const userRouter = new express.Router();
const app = express();
const { seefeatureMentor } = require('./SeeallfeaturedMentor');
app.use(express.json());
console.log('am in adduserdb jkjjlkjlkjlk');
userRouter.route('/:key/:Job_id').post(seefeatureMentor);

module.exports = userRouter;
