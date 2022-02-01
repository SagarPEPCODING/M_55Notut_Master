const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./postuserjobproviderdata');

async function addUsernoofjobsadd(req, res) {
  let { data1, data2 } = req.params;
  console.log(data1 + '   ' + data2);
  try {
    let user = await postmodel.addjobproviderdata(data1, data2);
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

module.exports.addUsernoofjobsadd = addUsernoofjobsadd;
