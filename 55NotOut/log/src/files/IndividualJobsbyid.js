import React, { useContext, useState, useEffect } from 'react';
import { Tablename, Sdescription, Cardname } from './HomeCard';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import '../css_Files/individualcss.css';
import { Link, useHistory } from 'react-router-dom';
import store from '../Store/store';
import { useSelector, useDispatch } from 'react-redux';
import { Increment, Decrement, loggedin, emailid } from '../Actions/action';
import '../css_Files/individualjobsapply.css';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import FinalFooter from './FinalFooter';
import '../css_Files/individualjobsyid.css';
import randomimage from '../jobImageFolder/blank-profile-picture-973460_640.png';
import AboutCompanyShowEditor from './AboutCompanyShowEditor';
import AboutRoleShowEditor from './AboutRoleShowEditor';
import HomeResponsiveHeader from './HomeResponsiveHeader';

const IndividualOrganisation = (props) => {
  const loggin = useSelector((state) => state.loggin);
  const myemaill = useSelector((state) => state.myemail);

  const dispatch = useDispatch();

  const [mydata, setMydata] = useState([]);
  const [applied, setApplied] = useState(false);
  const [myimg, setMyimg] = useState('');
  const [name, setName] = useState('');
  const [jobid, setJobid] = useState('');
  const [companyLocation, setCompanylocation] = useState('');
  const [requiredSkills, setRequiredSkills] = useState('');
  const [softSkills, setSoftSkills] = useState('');
  const [aboutCompany, setAboutCompany] = useState('');
  const [aboutRole, setAboutRole] = useState('');
  const [aboutdatacome, setAboutdatacome] = useState(false);
  const [aboutrolecome, setAboutrolecome] = useState(false);
  const [Jobprofile, setJobprofile] = useState('');
  const [JobIndustry, setJobIndustry] = useState('');
  const [CompanyType, setCompanyType] = useState('');
  const [JobType, setJobType] = useState('');
  const [LanguageRequired, setLanguageRequired] = useState('');
  const [PayRange, setPayRange] = useState('');
  const [RequiredSkillsCompetencies, setRequiredSkillsCompetencies] = useState(
    ''
  );
  const [views, setViews] = useState(0);
  const [applicationCount, setApplicationCount] = useState(0);
  const [login, setLogin] = useState(false);
  const [eventDescriptionIsNull, setEventDescriptionIsNull] = useState(false);
  const [aboutcompanyNull, setAboutcompanyNull] = useState(false);
  const [aboutroleNull, setAboutroleNull] = useState(false);
  let history = useHistory();

  useEffect(async () => {
    let storage = localStorage.getItem('state');
    if (storage === undefined) {
      setLogin(false);
    } else {
      setLogin(true);
    }
    storage = JSON.parse(storage);
    let myemail = storage.myemail.myemail;

    console.log(window.location.href);
    let arr = window.location.href.split('/');
    let id = arr[arr.length - 1];

    let getViews = await axios.get(`/api/users/getJobs/${id}`);
    console.log(getViews.status);
    let user = getViews.data.user[0];
    let views = user.views;
    console.log(views);
    let Views_response = await axios.post(
      `/api/users/postview/job_data/${id}/${views}`
    );
    console.log(Views_response);
    let applicationSAll = await axios.get(
      `/api/user/getallapplicationById/${id}`
    );
    console.log(applicationSAll);
    let count = applicationSAll.data.user.length;
    console.log(count);

    let { data } = await axios.get(`/api/users/getJobs/${id}`);
    console.log(data);
    setMydata(data.user[0]);
    setJobprofile(data.user[0].Job_profile);
    setJobIndustry(data.user[0].Job_Industry);
    setCompanyType(data.user[0].Company_Type);
    setJobType(data.user[0].Job_Type);
    setLanguageRequired(data.user[0].Language_Required);
    setPayRange(data.user[0].Pay_Range);
    setRequiredSkillsCompetencies(data.user[0].Required_Skills_Competencies);

    const myreq = require(`../jobImageFolder/${data.user[0].ImageName}`);
    setMyimg(myreq);

    let data2 = await axios.get(
      `/api/user/getallapplicationsforcheck/${myemail}/${id}`
    );
    console.log(data2);

    if (data2.data.user.length > 0) {
      console.log('hii applied');
      setApplied(true);
    }

    const jobid = data.user[0].Job_id;
    let posteddata = await axios.get(`/api/user/getbypostedJob/${jobid}`);
    console.log(posteddata.data.user[0]);
    setJobid(jobid);
    if (posteddata.data.user[0] !== undefined) {
      setCompanylocation(posteddata.data.user[0].CompanyLocation);
    }
    setRequiredSkills(data.user[0].Required_Skills_Competencies);
    setSoftSkills(data.user[0].Soft_Skills);
    let decodedaboutcompany = atob(data.user[0].About_Company);
    setAboutCompany(decodedaboutcompany);
    if (data.user[0].About_Company === null) {
      setAboutcompanyNull(true);
    }
    let decodedaboutrole = atob(data.user[0].About_Role);
    setAboutRole(decodedaboutrole);
    if (data.user[0].About_Role === null) {
      setAboutroleNull(true);
    }
    console.log(
      data.user[0].Required_Skills_Competencies +
        '   ' +
        data.user[0].Soft_Skills
    );
    setAboutdatacome(true);
    setAboutrolecome(true);
    setViews(views);
    setApplicationCount(count);
    if (posteddata.data.user[0] !== undefined) {
      const emailidbypost = posteddata.data.user[0].Email_id;
      let userdetails = await axios.get(
        `/api/users/getuserprofiledata/${emailidbypost}`
      );
      let name = userdetails.data.user[0].name;
      setName(name);
    }
  }, []);

  const applybtnclicked = async () => {
    const ApplicationId = uuidv4();
    const email = myemaill;

    let storage = localStorage.getItem('state');
    storage = JSON.parse(storage);
    if (storage !== null) {
      let myemail = storage.myemail.myemail;
      history.push({
        pathname: `/login/applyforjob/UserProfile/${mydata.Job_id}`,
        state: {
          mm: false,
          ApplicationId: ApplicationId,
          job_id: mydata.Job_id,
          email: email,
          Email_id: mydata.Email_id,
        },
      });
    } else {
      history.push({
        pathname: `/login`,
      });
    }
  };

  return (
    <div>
      <HomeResponsiveHeader></HomeResponsiveHeader>
      <SeeAllHeader></SeeAllHeader>
      <div className='jobContainer displayflexJob'>
        <div className='singlejobpageContainer '>
          <div className='firstContainer'>
            <div className='jbdescrheCont'>
              <div className='jbtypeCont'>{Jobprofile}</div>
              <div className='dash'>-</div>
              <div className='jbCompaName'>{JobIndustry}</div>
            </div>
            <div className='firstContainerjobdescpart2'>
              <div className='comptypo widthsndcomp fontsixe08rem fontweight'>
                Company Type
              </div>
              <div className='JobTypo widthsndcomp fontsixe08rem fontweight'>
                Job Type
              </div>
              <div className='langreq fontsixe08rem fontweight'>
                Language Required
              </div>
              <div className='package widthsndcomp fontsixe08rem fontweight'>
                Package
              </div>
            </div>
            <div className='firstContainerjobdescpart2'>
              <div className='comptypo widthsndcomp fontsixe08rem'>
                {CompanyType}
              </div>
              <div className='JobTypo widthsndcomp fontsixe08rem'>
                {JobType}
              </div>
              <div className='langreq fontsixe08rem'>{LanguageRequired}</div>
              <div className='package widthsndcomp fontsixe08rem'>
                {PayRange}
              </div>
            </div>
            <div className='aboutCompCont'>
              <div className='aboutCom'>About Company</div>
              {aboutcompanyNull ? (
                <div className='aboutCompans visibilityhidden'></div>
              ) : (
                <div className='aboutCompans visibilityhidden'>
                  {aboutdatacome && (
                    <AboutCompanyShowEditor
                      value={aboutCompany}
                    ></AboutCompanyShowEditor>
                  )}
                </div>
              )}
            </div>
            <div className='aboutRoleCont'>
              <div className='aboutRole'>About Role</div>
              {aboutroleNull ? (
                <div className='aboutCompans visibilityhidden'></div>
              ) : (
                <div className='aboutCompans visibilityhidden'>
                  {aboutrolecome && (
                    <AboutRoleShowEditor
                      value={aboutRole}
                    ></AboutRoleShowEditor>
                  )}
                </div>
              )}
            </div>
            <div className='ReqSkillsContainer'>
              <div className='reqskillsComp'>
                Required Skills And Competencies
              </div>
              <div className='ansreqskillsComp'>{requiredSkills}</div>
            </div>
            <div className='ReqSoftSkillsContainer'>
              <div className='reqsoftskillsComp'>Soft Skills</div>
              <div className='ansreqsoftskillsComp'>{softSkills}</div>
            </div>
          </div>

          {/* // second Container */}
          <div className='secondContainer'>
            {/* image */}
            <div className='imgContainerjbs'>
              <div className='divofimg'>
                <img src={myimg.default} className='imagejobindi'></img>
              </div>
            </div>
            {/* posted by */}
            <div className='postedBy'>
              <div className='headingpostedby'>Posted By</div>
              <div className='andpostedby'>{name}</div>
            </div>
            {/* Location */}
            <div className='locationCont'>
              <div className='locationheading'>Location</div>
              <div className='anslocation'>{companyLocation}</div>
            </div>
            {/* views */}
            <div className='viewsCont'>
              <div className='viewsheading'>Views</div>
              <div className='viewson'>{views}</div>
            </div>
            {/* application */}
            <div className='applicationCont'>
              <div className='applicationheading'>Application</div>
              <div className='applicationon'>{applicationCount}</div>
            </div>
          </div>
        </div>
      </div>
      {login && (
        <div className='applyContainer'>
          {applied ? (
            <div
              className='apliedforthisjobbyU'
              style={{ background: 'green' }}
            >
              Already Apllied For This Job
            </div>
          ) : (
            <div
              className='Applybtn'
              style={{ cursor: 'pointer' }}
              onClick={applybtnclicked}
            >
              APPLY
            </div>
          )}
        </div>
      )}
      <FinalFooter></FinalFooter>
    </div>
  );
};

export default IndividualOrganisation;
