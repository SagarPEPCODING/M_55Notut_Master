const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const getmodel = require('./getEventModel');

function myFunction(val) {
  // console.log(val.Name_of_product);
  // console.log(val.Discription);
}

async function getUserEvents(req, res) {
  try {
    let user = await getmodel.getEvent();
    // user.map(myFunction);
    // console.log('full events' + user);
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

module.exports.getUserEvents = getUserEvents;
