const db = require('../Model/connection.js');

const getuserprofileImagebyemailid = function (id) {
  console.log('email_id in usermodel :- ' + id);

  return new Promise(function (resolve, reject) {
    db.query(
      `SELECT * from profileimage where mail="${id}"`,
      function (err, res) {
        if (err) {
          reject(err);
          return;
        } else {
          console.log('result is kjhghk:- ' + res);
          resolve(res);
        }
      }
    );
  });
};

module.exports.getuserprofileImagebyemailid = getuserprofileImagebyemailid;