const express = require('express');
const userRouter = express.Router();
const app = express();

const { getImages } = require('./getallSliderImagesll');
app.use(express.json());
// console.log('am in adduserdb');
userRouter.route('/').get(getImages);

module.exports = userRouter;
