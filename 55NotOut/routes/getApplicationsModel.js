const db = require('../Model/connection.js');

const getApplications = function (jobid) {
  console.log(jobid);
  return new Promise(function (resolve, reject) {
    let { data } = db.query(
      `Select * from application_table where JobId = '${jobid}'`,
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

module.exports.getApplications = getApplications;
