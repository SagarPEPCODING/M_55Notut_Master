const express = require('express');
const userRouter = new express.Router();
const { getOrganistionbyidd } = require('./getOrganisationfromid');

userRouter.route('/:id').get(getOrganistionbyidd);

module.exports = userRouter;
