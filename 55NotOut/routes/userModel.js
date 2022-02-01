const db = require('../Model/connection.js');

const setActivation = function (id) {
  return new Promise(function (resolve, reject) {
    db.query(
      `UPDATE login_data SET Email_id_Active = true where Email_id="${id}"`,
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

const getbyemailid = function (id) {
  // console.log('email_id in usermodel :- ' + id);

  return new Promise(function (resolve, reject) {
    db.query(
      `SELECT * from login_data where Email_id="${id}"`,
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

module.exports.getbyemailid = getbyemailid;
module.exports.setActivation = setActivation;
