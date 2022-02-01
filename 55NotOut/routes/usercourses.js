const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./postusercourse');

async function addUsercourse(req, res) {
  let { data1, data2, data3, data4, data5, data6 } = req.params;
  console.log(
    data1 + '   ' + data2 + '   ' + data3 + '   ' + data4 + '   ' + data5
  );
  try {
    let user = await postmodel.addcourse(
      data1,
      data2,
      data3,
      data4,
      data5,
      data6
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

module.exports.addUsercourse = addUsercourse;
