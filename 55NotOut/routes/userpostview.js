const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./postviewModel');

async function addUserview(req, res) {
  const { appid, no } = req.params;

  console.log(appid);

  try {
    let user = await postmodel.addview(appid, no);
    // console.log(user);
    res.status(201).json({
      status: 'success',
      user: user != undefined ? user : 'userid not valid...',
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'failure hai',
      error: err.message,
    });
  }
}

module.exports.addUserview = addUserview;
