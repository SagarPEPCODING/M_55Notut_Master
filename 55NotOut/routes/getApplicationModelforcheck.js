const db = require('../Model/connection.js');

const getApplicationforcheck = function (email, jobid) {
  console.log(email);
  console.log(jobid);
  return new Promise(function (resolve, reject) {
    let { data } = db.query(
      `Select * from application_table where JobId = '${jobid}' AND EmailIdOfJB = '${email}' `,
      function (err, res) {
        if (err) {
          reject(err);
          return;
        } else {
          resolve(res);
        }
      }
    );
  });
};

module.exports.getApplicationforcheck = getApplicationforcheck;
