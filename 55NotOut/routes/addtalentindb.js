const express = require('express');
const userRouter = express.Router();
const app = express();
const { addUserTalent } = require('./userpostTalent'); 
app.use(express.json());

userRouter
    .route('/:talent/:description')
    .post(addUserTalent);

module.exports = userRouter;
