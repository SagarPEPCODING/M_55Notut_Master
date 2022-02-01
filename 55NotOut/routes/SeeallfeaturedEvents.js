const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./postseeAllEventFeature');

async function seefeatureevent(req, res) {
  const { key, Job_id } = req.params;
  console.log('email id is :- ' + Job_id);
  let obj = {};
  obj.key = key;
  obj.Job_id = Job_id;
  console.log(obj);
  try {
    let user = await postmodel.seeEventfeatureHomepage(obj);
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

module.exports.seefeatureevent = seefeatureevent;
