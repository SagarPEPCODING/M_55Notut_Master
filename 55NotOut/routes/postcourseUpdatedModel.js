const db = require('../Model/connection.js');

const addproduct = function (name, description, price, imagename, jobid) {
  console.log(name);
  console.log(description + '  ' + 'llll');
  console.log(price);
  console.log(imagename + '   ' + 'lsdk');
  console.log(jobid);

  return new Promise(function (resolve, reject) {
    let ans = db.query(
      `update courses_data SET name = '${name}',description='${description}',filename='${imagename}', price='${price}' where uuid='${jobid}'`,
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

module.exports.addproduct = addproduct;
