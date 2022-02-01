const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const usermodel = require('./getPosteddataf');

async function getPosteddatabyidd(req, res) {
  let ID = req.params.id;
  console.log(ID);
  try {
    let user = await usermodel.getpostfromid(req.params.id);
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

module.exports.getPosteddatabyidd = getPosteddatabyidd;
