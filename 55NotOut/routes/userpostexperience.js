const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./postexperienceModel');

async function addUserExpereince(req, res) {
  // console.log(req);

  try {
    let user = await postmodel.adduserexperiencedata(
      req.params.data1,
      req.params.data2,
      req.params.data3,
      req.params.data4
    );
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

module.exports.addUserExpereince = addUserExpereince;
