const db = require('../Model/connection.js');

const editadduserbyemailidpass = function (
  email_id,
  password,
  confirm_password,
  user_name,
  phone_number,
  token,
  val2
) {
  console.log(
    'postmodel' +
      password +
      '    ' +
      email_id +
      '    ' +
      confirm_password +
      '     ' +
      user_name +
      '     ' +
      phone_number +
      '     ' +
      token
  );
  return new Promise(function (resolve, reject) {
    db.query(
      `UPDATE login_data set password = '${password}', confirm_Password ='${confirm_password}', User_name = '${user_name}', Phone_number = '${phone_number}',token = '${token}', Authorization = '${val2}' where Email_id ='${email_id}' `,
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

module.exports.editadduserbyemailidpass = editadduserbyemailidpass;
