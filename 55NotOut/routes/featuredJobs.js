const express = require('express');
const userRouter = new express.Router();
const app = express();
const { addJobfeature } = require('./jobfeatured');
app.use(express.json());
console.log('am in adduserdb jkjjlkjlkjlk');
userRouter.route('/:key/:Job_id').post(addJobfeature);

module.exports = userRouter;
