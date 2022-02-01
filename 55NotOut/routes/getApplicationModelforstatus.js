const db = require('../Model/connection.js');

const getApplicationforjobseeker = function (email, value) {
  console.log(email + 'lllllllllllllllllllllllllllllllllllllllll');
  console.log(value + 'ppppppppppppppppppppppppppppppppppppppppp');
  return new Promise(function (resolve, reject) {
    let { data } = db.query(
      `Select * from application_table where EmailIdOfJB = '${email}' AND JobId = '${value}' `,
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

module.exports.getApplicationforjobseeker = getApplicationforjobseeker;
