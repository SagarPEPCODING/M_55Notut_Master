const db = require('../Model/connection.js');

const addcourse = function (data1, data2, data3, data4, data5, data6) {
  console.log(
    data1 +
      '    ' +
      data2 +
      '    ' +
      data3 +
      '    ' +
      data4 +
      '    ' +
      data5 +
      '   ' +
      data6
  );

  return new Promise(function (resolve, reject) {
    let ans = db.query(
      'INSERT INTO courses_data SET ?',
      {
        name: data1,
        description: data2,
        price: data3,
        filename: data4,
        uuid: data5,
        Email_id: data6,
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

module.exports.addcourse = addcourse;
