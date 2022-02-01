const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
var path = require('path');
// import './log/src/publicImageFolder';
// import '../MyLogin/log/build';

app.use(fileUpload());
app.use(express.static(path.join(__dirname, '/log/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/log/public/index.html'));
});

app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No File Uploaded' });
  }

  const file = req.files.file;
  console.log(req.files);
  var res = file.name.replace('(', '');
  res = res.replace(')', '');
  res = res.replace(/\s/g, '');
  console.log(res);
  console.log(req);
  // ${__dirname}/log/public/uploads/${file.name}
  file.mv(`./log/src/publicImageFolder/${res}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  });
  res.json({ filename: file.name, filePath: `/uploads/${file.name}` });
});

// uploadResume

app.post('/uploadResume', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No File Uploaded' });
  }

  const file = req.files.file;
  console.log(req.files);
  // ${__dirname}/log/public/uploads/${file.name}
  file.mv(`./log/src/resumeUpload/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  });
  res.json({ filename: file.name, filePath: `/uploads/${file.name}` });
});

app.post('/uploadsliderimage', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No File Uploaded' });
  }

  const file = req.files.file;
  console.log(req.files);
  // ${__dirname}/log/public/uploads/${file.name}
  file.mv(`./log/src/publicImageFolder/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  });
  res.json({ filename: file.name, filePath: `/uploads/${file.name}` });
});

app.post('/EventImageupload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No File Uploaded' });
  }

  const file = req.files.file;
  console.log(req.files);
  // ${__dirname}/log/public/uploads/${file.name}
  file.mv(`./log/src/eventImageFolder/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  });
  res.json({ filename: file.name, filePath: `/uploads/${file.name}` });
});

app.post('/OrganisationImageupload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No File Uploaded' });
  }

  const file = req.files.file;
  console.log(req.files);
  // ${__dirname}/log/public/uploads/${file.name}
  file.mv(`./log/src/organiationImageFolder/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  });
  res.json({ filename: file.name, filePath: `/uploads/${file.name}` });
});

app.post('/JobImageupload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No File Uploaded' });
  }

  const file = req.files.file;
  console.log(req.files);
  // ${__dirname}/log/public/uploads/${file.name}
  file.mv(`./log/src/jobImageFolder/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  });
  res.json({ filename: file.name, filePath: `/uploads/${file.name}` });
});

app.post('/MentorImageupload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No File Uploaded' });
  }

  const file = req.files.file;
  console.log(req.files);
  // ${__dirname}/log/public/uploads/${file.name}
  file.mv(`./log/src/mentorImageFolder/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  });
  res.json({ filename: file.name, filePath: `/uploads/${file.name}` });
});

app.post('/ProductImageupload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No File Uploaded' });
  }

  const file = req.files.file;
  console.log(req.files);
  // ${__dirname}/log/public/uploads/${file.name}
  file.mv(`./log/src/productImageFolder/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  });
  res.json({ filename: file.name, filePath: `/uploads/${file.name}` });
});

app.post('/MentorImageupload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No File Uploaded' });
  }

  const file = req.files.file;
  console.log(req.files);
  // ${__dirname}/log/public/uploads/${file.name}
  file.mv(`./log/src/mentorImageFolder/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  });
  res.json({ filename: file.name, filePath: `/uploads/${file.name}` });
});

// uploadfeaturedstaticpageimage

app.post('/uploadfeaturedstaticpageimage', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No File Uploaded' });
  }

  const file = req.files.file;
  console.log(req.files);
  // ${__dirname}/log/public/uploads/${file.name}
  file.mv(`./log/src/publicImageFolderstaticpage/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  });
  res.json({ filename: file.name, filePath: `/uploads/${file.name}` });
});

app.post('/uploadcoursimages', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No File Uploaded' });
  }

  const file = req.files.file;
  console.log(req.files);
  // ${__dirname}/log/public/uploads/${file.name}
  file.mv(`./log/src/publicImageFoldercourse/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  });
  res.json({ filename: file.name, filePath: `/uploads/${file.name}` });
});

app.post('/uploadsliderimage', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No File Uploaded' });
  }

  const file = req.files.file;
  console.log(req.files);
  // ${__dirname}/log/public/uploads/${file.name}
  file.mv(`./log/src/publicImageFolder/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  });
  res.json({ filename: file.name, filePath: `/uploads/${file.name}` });
});

app.use('/api/users/getallUsers', require('./routes/getalluser'));

// getalluserevent

app.use('/api/users/getallEvents', require('./routes/getallevents'));
app.use('/api/users/getallTalents', require('./routes/getalltalents'));
app.use('/api/users/getallJobs', require('./routes/getalljobs'));
app.use(
  '/api/users/getallOrganisations',
  require('./routes/getallOrganisations')
);
app.use('/api/users/getallMentors', require('./routes/getallMentors'));

// /api/users/getuserSliderImages

app.use(
  '/api/users/getuserSliderImages',
  require('./routes/getallSliderImages')
);

// sign up
app.use('/api/users/signup', require('./routes/signup'));

// Edit signup
app.use('/api/users/Editsignup', require('./routes/editsignup'));

// /api/user/getbypostedJob

app.use('/api/user/getbypostedJob', require('./routes/getpostedby'));

app.use('/api/users/addproduct', require('./routes/adduserindb'));

app.use('/api/users/addproductedit', require('./routes/adduserindbedit'));

//login
app.use('/api/users', require('./routes/login'));

app.use('/api/users/addtalent', require('./routes/addtalentindb'));

// add Organisations
app.use('/api/users/addorganisation', require('./routes/addorganisationindb'));

//api/users/addorganisationedit
app.use(
  '/api/users/addorganisationedit',
  require('./routes/addorganisationindbedit')
);

// add jobs
app.use('/api/users/addjob', require('./routes/addjobindb'));

// add view
// /api/user/addviewinapplicationtable
app.use(
  '/api/user/addviewinapplicationtable',
  require('./routes/addviewinappl')
);

app.use('/api/users/editaddjob', require('./routes/addfeatureedit'));

// add Images

// /api/users/addProfileImage
app.use('/api/users/addProfileImage', require('./routes/addProfileImgaedb'));

// /api/users/addProfileResume

app.use('/api/users/addProfileResume', require('./routes/addProfileResumedb'));

// /api/users/addsliderimages

app.use('/api/users/addsliderimages', require('./routes/addsliderImgaedb'));

// /api/users/addProfileImagetable
app.use(
  '/api/users/addProfileImagetable',
  require('./routes/addProfileImgaedbtable')
);

// add Mentor
app.use('/api/users/addMentor', require('./routes/addMentorindb'));

// /api/users/addEditMentor
app.use('/api/users/addEditMentor', require('./routes/addEditMentorindb'));

// add Event
app.use('/api/users/addEvent', require('./routes/addEventindb'));

// /api/users/addEventEdit

app.use('/api/users/addEventEdit', require('./routes/addEventindbedit'));

// userList

app.use('/api/usersList', require('./routes/getalluserdata'));

app.use('/api/users/authorization', require('./routes/authorization'));

app.use('/api/users/featureEvents', require('./routes/featuredEvents'));

app.use('/api/users/featureProduct', require('./routes/featureProduct'));

app.use('/api/users/featureJobs', require('./routes/featuredJobs'));

app.use('/api/users/featureMentor', require('./routes/featuredMentors'));

// /api/users/login/staticpage

app.use('/api/users/login/staticpage', require('./routes/staticpagedata'));

// /api/users/getuserstaticpagedata
app.use(
  '/api/users/getuserstaticpagedata',
  require('./routes/getstaticpagedata')
);

app.use(
  '/api/users/featureOrganisation',
  require('./routes/featuredOrganisation')
);

app.use(
  '/api/users/login/userprofile/editprofile',
  require('./routes/editprofile')
);

// /api/users/addExperienceJobSeeker
app.use('/api/users/addExperienceJobSeeker', require('./routes/addExperience'));

// /api/users/updateEvent
app.use('/api/users/updateEvent', require('./routes/updateevent'));

// /api/users/updateOrganisation
app.use(
  '/api/users/updateOrganisation',
  require('./routes/updateOrganisation')
);

// /api/users/login/updateCourses
app.use('/api/users/login/updateCourses', require('./routes/updateCourses'));

// /api/users/updateMentor
app.use('/api/users/updateMentor', require('./routes/updatementor'));

// /api/users/updateJob
app.use('/api/users/updateJob', require('./routes/updatejob'));

app.use('/api/users/login/userprofile', require('./routes/addprofile'));

app.use('/api/users/getEvent', require('./routes/getEventbyid'));

// /api/users/getExperiencedata
app.use('/api/users/getExperiencedata', require('./routes/getExperience'));

// /api/users/getCourse

app.use('/api/users/getCourse', require('./routes/getCoursebyid'));

// /api/users/getMentor
app.use('/api/users/getMentor', require('./routes/getMentorbyid'));

// /api/users/getOrganisation

app.use('/api/users/getOrganisation', require('./routes/getOrganisationbyid'));

// /api/users/getJobs

app.use('/api/users/getJobs', require('./routes/getJobsbyid'));

// /api/users/postapplicationshortlistdetails
app.use(
  '/api/users/postapplicationshortlistdetails',
  require('./routes/postdetailsshortlisted')
);

// /api/users/getProduct
app.use('/api/users/getProduct', require('./routes/getProductsbyid'));

app.use('/api/users/getuserprofiledata', require('./routes/getprofiledata'));

app.use(
  '/api/users/getuserprofileImagedata',
  require('./routes/getprofileImagedata')
);

app.use(
  '/api/users/seeAllEventFeature',
  require('./routes/seeAllEventFeatures')
);
app.use('/api/users/seeAllJobFeature', require('./routes/seeAllJobFeatures'));

app.use(
  '/api/users/seeAllMentorFeature',
  require('./routes/seeAllMentorFeatures')
);

app.use(
  '/api/users/seeAllOrganisationFeature',
  require('./routes/seeAllOrganisationFeatures')
);

app.use(
  '/api/users/seeAllproductFeature',
  require('./routes/seeAllProductFeatures')
);

// api/users/seeAllImagesdelete

app.use(
  '/api/users/seeAllImagesdelete',
  require('./routes/seeAllImagesdelete')
);

// /api/users/login/userCourses

app.use('/api/users/login/userCourses', require('./routes/addcoursesindb'));

app.use('/api/users/login/getcourse', require('./routes/getallcoursesfromdb'));

app.use(
  '/api/users/addinJobProviderDashboard',
  require('./routes/adddatainpostedjobs_data')
);

app.use('/api/user/getpostedjob', require('./routes/getallpostedjobsbyid'));

app.use('/api/user/getpostjobdata', require('./routes/getposteddata'));

// /api/users/getEventsById
app.use(
  '/api/users/getEventsById',
  require('./routes/geteventuserprofilebyid')
);

// /api/users/getJobsById
app.use('/api/users/getJobsById', require('./routes/getjobuserprofilebyid'));

// /api/users/getMentorsById
app.use(
  '/api/users/getOrganisationsById',
  require('./routes/getOrganisationuserprofilebyid')
);

// /api/users/getOrganisationsById
app.use(
  '/api/users/getMentorsById',
  require('./routes/getMentoruserprofilebyid')
);

// /api/users/getProductsById
app.use(
  '/api/users/getProductsById',
  require('./routes/getProductuserprofilebyid')
);

// /api/users/getCoursessById
app.use(
  '/api/users/getCoursessById',
  require('./routes/getCoursesuserprofilebyid')
);

// /api/user/postjobproviderjob

app.use('/api/user/postjobproviderjob', require('./routes/getposteddatabb'));

// /api/user/getallapplications

app.use(
  '/api/user/getallapplications',
  require('./routes/getallapplicationdata')
);

// /api/user/getallappliedjobsofjobseeker
app.use(
  '/api/user/getallappliedjobsofjobseeker',
  require('./routes/getallapplicationjobseeker')
);

// /api/users/getstatusfromapplicationtable
app.use(
  '/api/users/getstatusfromapplicationtable',
  require('./routes/getallapplicationfromapplicationtable')
);

// /api/user/getallselectedapplications
app.use(
  '/api/user/getallselectedapplications',
  require('./routes/getallselected')
);

// /api/user/getallapplicationsofjobseeker

app.use(
  '/api/user/getallapplicationsofjobseeker',
  require('./routes/getallapplicationsofjobseekerforupdate')
);

// /api/user/getallapplicationsforcheck

app.use(
  '/api/user/getallapplicationsforcheck',
  require('./routes/getallapplicationdataforcheck')
);

app.use('/api/user/getallapplicationById', require('./routes/getallapplicationsByID'));

app.use(
  '/api/user/postjobproviderjobdata',
  require('./routes/jobproviderjobdata')
);

app.use(
  '/api/users/postinapplicationtable',
  require('./routes/postinapplication')
);

// /api/user/getallapplicationsofjobseeker

// correct

app.use('/api/user/postedjobss', require('./routes/postedjobs'));

// api/update/logintime/logindate

app.use(
  '/api/update/logintime/logindate',
  require('./routes/postlogindatetime')
);

// /api/update/logouttime/logoutdate
app.use(
  '/api/update/logouttime/logoutdate',
  require('./routes/postlogoutdatetime')
);

// /api/users/postview/job_data
app.use('/api/users/postview/job_data', require('./routes/increaseAView'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`server started on part ${PORT}`));
