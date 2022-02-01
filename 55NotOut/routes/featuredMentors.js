const express = require('express');
const userRouter = new express.Router();
const app = express();
const { addMentorfeature } = require('./Mentorfeatured');
app.use(express.json());
console.log('am in adduserdb jkjjlkjlkjlk');
userRouter.route('/:key/:Job_id').post(addMentorfeature);

module.exports = userRouter;
