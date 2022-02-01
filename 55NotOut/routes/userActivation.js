const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const usermodel = require('./userModel');

async function getActivation(req, res) {
  let email = req.params.email_id;
  // console.log('email id is in userlogin :- ' + email);

  try {
    let user = await usermodel.getbyemailid(req.params.email_id);
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

module.exports.getActivation = getActivation;








// try {
//     await usermodel.setActivation(req.params.email_id);
//     res.status(201).json({
//       status: 'success',
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({
//       status: 'failure hai',
//       user: err.message,
//     });
//   }