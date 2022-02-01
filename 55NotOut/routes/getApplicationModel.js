const db = require('../Model/connection.js');

const getApplication = function (email, jobid) {
  console.log(email + "  opopopopopoppopoppppopooooopopopp");
  console.log(jobid);
  return new Promise(function (resolve, reject) {
    let { data } = db.query(
      `Select * from application_table where JobId = '${jobid}' AND EmailIdOfJP = '${email}' `,
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

module.exports.getApplication = getApplication;
