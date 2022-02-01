const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./postuserprofileModel');

async function addUserProfile(req, res) {
  // console.log(req);
  console.log('hello my data :- ' + req.params.data);
  var obj = JSON.parse(req.params.data);
  console.log(obj);
    console.log('PPP');
  try {
    let user = await postmodel.adduserprofiledata(obj);
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

module.exports.addUserProfile = addUserProfile;
