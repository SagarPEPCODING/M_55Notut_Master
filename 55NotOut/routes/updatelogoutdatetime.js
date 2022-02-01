const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./postuserpostadatetimelogout');

async function updatelogoutdt(req, res) {
  let { data1, data2, data3 } = req.params;
  console.log(data1 + '   ' + data2 + '   ' + data3);
  try {
    let user = await postmodel.addposttimeanddateinlogoutdata(
      data1,
      data2,
      data3
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

module.exports.updatelogoutdt = updatelogoutdt;
