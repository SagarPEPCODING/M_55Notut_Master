const express = require('express');
const userRouter = new express.Router();
const { getstaticpagebyidd } = require('./getstaticpagefromid');

userRouter.route('/:id').get(getstaticpagebyidd);

module.exports = userRouter;
