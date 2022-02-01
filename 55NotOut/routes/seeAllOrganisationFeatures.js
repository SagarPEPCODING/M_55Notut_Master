const express = require('express');
const userRouter = new express.Router();
const app = express();
const { seefeatureOrganisation } = require('./SeeallfeaturedOrganisation');
app.use(express.json());
console.log('am in adduserdb jkjjlkjlkjlk');
userRouter.route('/:key/:Job_id').post(seefeatureOrganisation);

module.exports = userRouter;
