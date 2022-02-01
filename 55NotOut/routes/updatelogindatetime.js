const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const postmodel = require('./postuserpostadatetime');

async function updatelogindt(req, res) {
  let { data1, data2, data3 } = req.params;
  console.log(data1 + '   ' + data2 + '   ' + data3);
  try {
    let user = await postmodel.addposttimeanddateinlogindata(
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

module.exports.updatelogindt = updatelogindt;
