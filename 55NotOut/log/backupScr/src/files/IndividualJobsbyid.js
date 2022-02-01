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
  let history = useHistory();

  useEffect(async () => {
    let storage = localStorage.getItem('state');
    storage = JSON.parse(storage);
    if (loggin.loggin === undefined && myemaill.myemail === undefined) {
      let url = window.location.href;

      localStorage.setItem('url', url);
      if (storage === null) {
        history.push({
          pathname: '/login',
        });
      } else {
        dispatch(emailid(storage.myemail.myemail));
        dispatch(loggedin(storage.loggin.loggin));
        let arr = window.location.href.split('/');
        let id = arr[arr.length - 1];

        let { data } = await axios.get(`/api/users/getJobs/${id}`);
        console.log(data);
        setMydata(data.user[0]);
        setJobprofile(data.user[0].Job_profile);
        setJobIndustry(data.user[0].Job_Industry);
        // console.log(data.user[0].Job_Industry);
        setCompanyType(data.user[0].Company_Type);
        setJobType(data.user[0].Job_Type);
        setLanguageRequired(data.user[0].Language_Required);
        setPayRange(data.user[0].Pay_Range);
        setRequiredSkillsCompetencies(
          data.user[0].Required_Skills_Competencies
        );

        const myreq = require(`../jobImageFolder/${data.user[0].ImageName}`);
        setMyimg(myreq);

        let data2 = await axios.get(
          `/api/user/getallapplicationsforcheck/${myemaill.myemail}/${id}`
        );

        if (data2.data.user.length > 0) {
          setApplied(true);
        }

        // work for posted jobs...
        // get jobid
        // database call on postedjobs
        // geting data

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
        let decodedaboutrole = atob(data.user[0].About_Role);
        setAboutRole(decodedaboutrole);
        console.log(
          data.user[0].Required_Skills_Competencies +
            '   ' +
            data.user[0].Soft_Skills
        );
        setAboutdatacome(true);
        setAboutrolecome(true);

        if (posteddata.data.user[0] !== undefined) {
          const emailidbypost = posteddata.data.user[0].Email_id;
          let userdetails = await axios.get(
            `/api/users/getuserprofiledata/${emailidbypost}`
          );
          let name = userdetails.data.user[0].name;
          setName(name);
        }
      }
    } else {
      if (storage === null) {
        let s = store.getState();
        let stringifystore = JSON.parse(s);
        history.push({
          pathname: '/login',
        });
        // localStorage.setItem('state', stringifystore);
      } else {
        let arr = window.location.href.split('/');
        let id = arr[arr.length - 1];

        let { data } = await axios.get(`/api/users/getJobs/${id}`);
        console.log(data);
        setMydata(data.user[0]);
        setJobprofile(data.user[0].Job_profile);
        setJobIndustry(data.user[0].Job_Industry);
        setCompanyType(data.user[0].Company_Type);
        // console.log(data.user[0].Job_Industry);
        setJobType(data.user[0].Job_Type);
        setLanguageRequired(data.user[0].Language_Required);
        setPayRange(data.user[0].Pay_Range);
        setRequiredSkillsCompetencies(
          data.user[0].Required_Skills_Competencies
        );

        const myreq = require(`../jobImageFolder/${data.user[0].ImageName}`);
        setMyimg(myreq);

        let data2 = await axios.get(
          `/api/user/getallapplicationsforcheck/${myemaill.myemail}/${id}`
        );

        if (data2.data.user.length > 0) {
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
        let decodedaboutrole = atob(data.user[0].About_Role);
        setAboutRole(decodedaboutrole);
        console.log(
          data.user[0].Required_Skills_Competencies +
            '   ' +
            data.user[0].Soft_Skills
        );
        setAboutdatacome(true);
        setAboutrolecome(true);

        const emailidbypost = posteddata.data.user[0].Email_id;
        let userdetails = await axios.get(
          `/api/users/getuserprofiledata/${emailidbypost}`
        );
        let name = userdetails.data.user[0].name;
        setName(name);
      }
    }
  }, []);

  const applybtnclicked = async () => {
    const ApplicationId = uuidv4();
    const email = myemaill;

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
              <div className='aboutCompans visibilityhidden'>
                {aboutdatacome && (
                  <AboutCompanyShowEditor
                    value={aboutCompany}
                  ></AboutCompanyShowEditor>
                )}
              </div>
            </div>
            <div className='aboutRoleCont'>
              <div className='aboutRole'>About Role</div>
              <div className='aboutCompans visibilityhidden'>
                {aboutrolecome && (
                  <AboutRoleShowEditor value={aboutRole}></AboutRoleShowEditor>
                )}
              </div>
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
            {/* job code */}
            {/* <div className='jobCode'>
              <div className='jobcodeheading'>Job Code</div>
              <div className='ansJobcode'>{jobid}</div>
            </div> */}
            {/* Location */}
            <div className='locationCont'>
              <div className='locationheading'>Location</div>
              <div className='anslocation'>{companyLocation}</div>
            </div>
            {/* posted on */}
            <div className='postedonCont'>
              <div className='postedonheading'>Posted on</div>
              <div className='postedon'>12/03/2020</div>
            </div>
            {/* views */}
            <div className='viewsCont'>
              <div className='viewsheading'>Views</div>
              <div className='viewson'>2020</div>
            </div>
            {/* application */}
            <div className='applicationCont'>
              <div className='applicationheading'>Application</div>
              <div className='applicationon'>20</div>
            </div>
          </div>
        </div>
      </div>

      <FinalFooter></FinalFooter>
    </div>
  );
};

export default IndividualOrganisation;
