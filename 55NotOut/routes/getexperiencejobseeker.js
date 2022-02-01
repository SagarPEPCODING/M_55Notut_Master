const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./postExperience');

async function addUsergetexp(req, res) {
  let { data1 } = req.params;
  console.log(data1);
  try {
    let user = await postmodel.addexp(data1);
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

module.exports.addUsergetexp = addUsergetexp;
