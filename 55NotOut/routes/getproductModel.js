const db = require('../Model/connection.js');

const getproduct = function () {
  // console.log('hello getproduct...');
  return new Promise(function (resolve, reject) {
    let data = db.query('Select * from product_data', function (err, res) {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(res);
      }
    });
  });
};

module.exports.getproduct = getproduct;
