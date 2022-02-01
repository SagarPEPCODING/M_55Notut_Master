const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUserImageSlider } = require('./userpostImageSlider');
app.use(express.json());
console.log('am in adduserdb');
userRouter
  .route('/:jobid/:filename/:link/:alt/:forwhat')
  .post(addUserImageSlider);

module.exports = userRouter;
