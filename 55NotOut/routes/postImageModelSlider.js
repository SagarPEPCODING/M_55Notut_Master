const db = require('../Model/connection.js');

const addImageSlider = function ({ jobid, filename, link, alt, forwhat }) {
  // console.log('Email Id Is: -' + Email_id);
  console.log(jobid);
  console.log(
    filename + 'sdkfjlsdkjfksldjflkjdsaklfjklsdljklkfdsajksdfjkjadsfkajfkdsjkf'
  );
  console.log('muname');
  return new Promise(function (resolve, reject) {
    let ans = db.query(
      'INSERT INTO sliderimage_data SET ?',
      {
        ID: jobid,
        ImageUrl: filename,
        link: link,
        alt: alt,
        forwhat: forwhat,
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

module.exports.addImageSlider = addImageSlider;
