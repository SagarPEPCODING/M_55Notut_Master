const db = require('../Model/connection.js');

const addproductedit = function (
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
      `update product_data SET Name_of_product='${name}',Discription='${description}',Feature_access='${feature}',Payment='${inputvalue}',ImageName='${Image_Name}', ProductOrigin='${productorigin}' where jobid='${jobid}'  `,

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

module.exports.addproductedit = addproductedit;
