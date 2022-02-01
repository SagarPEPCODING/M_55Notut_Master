const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const usermodel = require('./getPosteddatafff');

async function getPosteddatabyiddbb(req, res) {
  let ID = req.params.id;
  console.log(ID);
  try {
    let user = await usermodel.getpostfromidbb(req.params.id, req.params.count);
    res.status(201).json({
      status: 'success',
      user: user != undefined ? user : 'userid not valid...',
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'failure hai',
      user: err.message,
    });
  }
}

module.exports.getPosteddatabyiddbb = getPosteddatabyiddbb;
