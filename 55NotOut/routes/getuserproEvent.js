const db = require('../Model/connection.js');

const getuserEvents = function (emailid) {
  console.log(emailid);

  return new Promise(function (resolve, reject) {
    let ans = db.query(
      `select * from event_data where Email_Id = '${emailid}'`,
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

module.exports.getuserEvents = getuserEvents;
