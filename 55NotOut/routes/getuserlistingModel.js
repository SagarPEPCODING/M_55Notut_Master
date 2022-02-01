const db = require('../Model/connection.js');

const getlist = function () {
  // console.log('hello getproduct...');
  return new Promise(function (resolve, reject) {
    let data = db.query('Select * from login_data', function (err, res) {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(res);
      }
    });
  });
};

module.exports.getlist = getlist;
