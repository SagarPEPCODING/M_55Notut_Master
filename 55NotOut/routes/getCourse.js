const db = require('../Model/connection.js');

const getCoursefromid = function (id) {
  // console.log('email_id in usermodel :- ' + id);
  console.log(id);

  return new Promise(function (resolve, reject) {
    db.query(
      `SELECT * from courses_data where uuid = "${id}"`,
      function (err, res) {
        if (err) {
          reject(err);
          return;
        } else {
          console.log('result is :- ' + res);
          resolve(res);
        }
      }
    );
  });
};

module.exports.getCoursefromid = getCoursefromid;
