const db = require('../Model/connection.js');

const addstatic = function (data1, data2, data3, data4, data5, data6) {
  console.log(
    data1 + '    ' + data2 + '    ' + data3 + '    ' + data4 + '   ' + data6
  );

  return new Promise(function (resolve, reject) {
    let ans = db.query(
      'INSERT INTO staticpage_data SET ?',
      {
        title: data1,
        description: data3,
        metatag: data4,
        filename: data2,
        uuid: data5,
        url: data6,
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

module.exports.addstatic = addstatic;
