const db = require('../Model/connection.js');

const getpostfromidbb = function (id, count) {
  // console.log('email_id in usermodel :- ' + id);
  console.log(id);

  return new Promise(function (resolve, reject) {
    db.query(
      'INSERT INTO postedjobs_data SET ?',
      {
        Email_id: id,
        NoOfJobsPosted: count,
      },
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

module.exports.getpostfromidbb = getpostfromidbb;
