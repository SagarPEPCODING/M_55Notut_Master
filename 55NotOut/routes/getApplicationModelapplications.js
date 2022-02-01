const db = require('../Model/connection.js');

const getApplications = function (email) {
  console.log(email + 'lllllllllllllllllllllllllllllllllllllllll');
  return new Promise(function (resolve, reject) {
    let { data } = db.query(
      `Select * from application_table where EmailIdOfJP = '${email}' AND shortlistedornot  = 'true' `,
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
