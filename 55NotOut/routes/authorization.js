const express = require('express');
const userRouter = new express.Router();
const app = express();
const { addUserAuthorization } = require('./userAuthorization');
app.use(express.json());
console.log('am in adduserdb jkjjlkjlkjlk');
userRouter.route('/:key/:email_id').post(addUserAuthorization);

module.exports = userRouter;
