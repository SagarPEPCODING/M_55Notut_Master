const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const usermodel = require('./getstaticpage');

async function getstaticpagebyidd(req, res) {
  let ID = req.params.id;
  console.log(ID);
  try {
    let user = await usermodel.getstaticpagefromid(req.params.id);
    res.status(201).json({
      status: 'success',
      user: user != undefined ? user : 'userid not valid...',
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'failure hai',
      user: err.message,
    });
  }
}

module.exports.getstaticpagebyidd = getstaticpagebyidd;
