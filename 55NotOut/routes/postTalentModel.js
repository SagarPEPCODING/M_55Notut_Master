const db = require('../Model/connection.js');

const addTalent = function (name, description) {
  // console.log('hello addproduct...');
  return new Promise(function (resolve, reject) {
    let ans = db.query(
      'INSERT INTO Talent_data SET ?',
      {
        Talent: name,
        Description: description,
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

module.exports.addTalent = addTalent;
