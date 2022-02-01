const db = require('../Model/connection.js');

const adduserbyemailidpass = function (
  email_id,
  password,
  confirm_password,
  user_name,
  phone_number,
  token,
  val2,
  metororjobseeker
) {
  // console.log('postmodel' + password + '    nn    ' + metororjobseeker);
  return new Promise(function (resolve, reject) {
    db.query(
      'INSERT INTO login_data SET ?',
      {
        Email_id: email_id,
        password: password,
        confirm_password: confirm_password,
        User_name: user_name,
        Phone_number: phone_number,
        token: token,
        UserType: val2,
        Authorization: 'false',
        typeofuser: metororjobseeker,
      },
      function (err, res) {
        if (err) {
          reject(err);
          return;
        } else {
          resolve(res);
        }
      }
    );
  });
};

module.exports.adduserbyemailidpass = adduserbyemailidpass;
