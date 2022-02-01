const express = require('express');
const userRouter = new express.Router();
const app = express();
const { addOrganisationfeature } = require('./Organisationfeatured');
app.use(express.json());
console.log('am in adduserdb jkjjlkjlkjlk');
userRouter.route('/:key/:Job_id').post(addOrganisationfeature);

module.exports = userRouter;
