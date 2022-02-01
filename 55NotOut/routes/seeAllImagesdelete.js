const express = require('express');
const userRouter = express.Router();
const app = express();
const { deleteimage } = require('./userpostimagedelete');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/:id').post(deleteimage);

module.exports = userRouter;
