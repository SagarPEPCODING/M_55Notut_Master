const db = require('../Model/connection.js');

const gettalent = function () {
  // console.log('hello getproduct...');
  return new Promise(function (resolve, reject) {
    let data = db.query('Select * from talent_data', function (err, res) {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(res);
      }
    });
  });
};

module.exports.gettalent = gettalent;
