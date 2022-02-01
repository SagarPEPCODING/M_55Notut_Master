const db = require('../Model/connection.js');

const addproduct = function (
  jobid,
  name,
  description,
  feature,
  inputvalue,
  Image_Name,
  productorigin
) {
  // console.log('hello addproduct...');
  return new Promise(function (resolve, reject) {
    let ans = db.query(
      'INSERT INTO product_data SET ?',
      {
        jobid: jobid,
        Name_of_product: name,
        Discription: description,
        Event_Feature: feature,
        Payment: inputvalue,
        ImageName: Image_Name,
        ProductOrigin: productorigin,
      },
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
