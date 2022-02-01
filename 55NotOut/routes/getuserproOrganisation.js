const db = require('../Model/connection.js');

const getuserOrganisations = function (emailid) {
  console.log(emailid);

  return new Promise(function (resolve, reject) {
    let ans = db.query(
      `select * from organisation_data where userEmailId = '${emailid}'`,
      function (err, res) {
        if (err) {
          console.log('err');
          reject(err);
          return;
        } else {
          console.log('resolve');
          resolve(res);
        }
      }
    );
  });
};

module.exports.getuserOrganisations = getuserOrganisations;
