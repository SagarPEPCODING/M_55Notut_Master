const express = require('express');
const userRouter = new express.Router();
const { getCoursebyidd } = require('./getcoursefromid');

userRouter.route('/:id').get(getCoursebyidd);

module.exports = userRouter;
