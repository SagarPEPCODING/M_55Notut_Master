const db = require('../Model/connection.js');

const getpostedjobsfrom = function (id) {
  // console.log('email_id in usermodel :- ' + id);
  console.log(id + 'SDFSDFSADFASDFASDFASDFAFSD');

  return new Promise(function (resolve, reject) {
    db.query(
      `SELECT * from postedjobs where Email_id = "${id}"`,
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

module.exports.getpostedjobsfrom = getpostedjobsfrom;
