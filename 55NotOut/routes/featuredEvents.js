const express = require('express');
const userRouter = new express.Router();
const app = express();
const { addEventfeature } = require('./eventfeatured');
app.use(express.json());
console.log('am in adduserdb jkjjlkjlkjlk');
userRouter.route('/:key/:Job_id').post(addEventfeature);

module.exports = userRouter;
