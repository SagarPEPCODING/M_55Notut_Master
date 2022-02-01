const db = require('../Model/connection.js');

const getApplicationforjobseeker = function (email) {
  console.log(email);
  return new Promise(function (resolve, reject) {
    let { data } = db.query(
      `Select * from application_table where EmailIdOfJB = '${email}' `,
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

module.exports.getApplicationforjobseeker = getApplicationforjobseeker;
