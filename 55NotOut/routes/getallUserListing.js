const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const getmodel = require('./getuserlistingModel');

function myFunction(val) {
  // console.log(val.Name_of_product);
  // console.log(val.Discription);
}

async function getUserList(req, res) {
  try {
    let user = await getmodel.getlist();
    user.map(myFunction);
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

module.exports.getUserList = getUserList;
