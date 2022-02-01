import React, { Component } from 'react';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import Footer from './Footer';
import JobProviderHeader from './JobProviderHeader';
import JoproviderGreetingcardandfeatures from './JoproviderGreetingcardandfeatures';
import '../css_Files/seejobprovider.css';
import Jobfeatures from './Jobfeatures';
import axios from 'axios';
import Myjobprofilecards from './Myjobprofilecards';
import logo from '../eventImageFolder/becca-tapert--A_Sx8GrRWg-unsplash.jpg';
import CancelIcon from '@material-ui/icons/Cancel';
import HomeResponsiveHeader from './HomeResponsiveHeader';

export class SeeJobProviderDashboard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    // console.log(this.props.location.state.value.Email_id);
    this.state = {
      cardcontentarray: [
        'Active Jobs',
        'New Application',
        'Candidates to be reviewed',
        'Shortlisted Candidates to be interviewed',
        'Interviews Schedule for today',
      ],
      cardcounter1: 0,
      cardcounter2: 0,
      cardcounter3: 0,
      cardcounter4: 0,
      cardcounter5: 0,
      email_id: '',
      postedjobsdata: [],
      mypostedjobdataarr: [],
      myallapplications: [],
      applicationclick: false,
      arroftodayinterview: [],
      interviewClicked: false,
      applicationsinlastfivedays: [],
      newapplicationclicked: false,
      shortlistedCandidatesClicked: false,
      shortlistedarr: [],
      applicationstobereviewd: false,
      applicationstobereviewedarr: [],
    };
  }

  componentDidMount = async () => {
    let storage = localStorage.getItem('state');
    storage = JSON.parse(storage);
    this.setState({ email_id: storage.myemail.myemail });
    console.log(this.props.location.state);
    console.log(storage.myemail.myemail);
    console.log(this.state.email_id);
    let { data } = await axios.get(
      `/api/user/getpostjobdata/${storage.myemail.myemail}`
    );
    console.log(data);
    console.log(data.user[0]);
    if (data.user[0] === undefined) {
      this.setState({ cardcounter1: 0 });
    } else {
      this.setState({ cardcounter1: data.user[0].NoOfJobsPosted });
    }

    let data1 = await axios.get(
      `/api/user/getpostedjob/${storage.myemail.myemail}`
    );

    console.log(data1.data);

    let arr = [];
    let arr1 = [];
    data1.data.user.map((value) => {
      arr.push(value.Job_id);
      arr1.push(value);
    });

    this.setState({ mypostedjobdataarr: arr1 });
    console.log(arr);
    console.log(arr1);
    this.setState({ postedjobsdata: arr });
    console.log(this.state.mypostedjobdataarr);

    console.log(this.state.email_id);
    let data2 = await axios.get(
      `/api/user/getallselectedapplications/${this.state.email_id}`
    );
    console.log(data2.data.user);
    this.setState({ cardcounter4: data2.data.user.length });
    this.setState({ shortlistedarr: data2.data.user });

    var today = new Date();
    let year = JSON.stringify(today.getFullYear());
    let month = JSON.stringify(today.getMonth() + 1);
    if (month.length == 1) {
      month = '0' + month;
    }
    let day = JSON.stringify(today.getDate());
    if (day.length == 1) {
      day = '0' + day;
    }

    let date = year + month + day;
    let mydate = JSON.parse(date);
    console.log(mydate);

    let arroftodaysinterview = [];

    data2.data.user.map((value) => {
      console.log(value.interviewdate);
      let datearr = value.interviewdate.split(':');

      let newdate = datearr[2] + datearr[1] + datearr[0];
      console.log(newdate);
      let myrealdate = JSON.parse(newdate);
      console.log(myrealdate);
      if (mydate === myrealdate) {
        console.log('date is match ' + mydate + ' ' + myrealdate);
        arroftodaysinterview.push(value);
      } else {
        console.log('date is not match ' + mydate + ' ' + myrealdate);
      }
    });
    console.log(arroftodaysinterview);
    this.setState({ cardcounter5: arroftodaysinterview.length });
    this.setState({ arroftodayinterview: arroftodaysinterview });

    var d = new Date();

    let currentdate = d.toLocaleString();
    console.log(mydate);

    d.setDate(d.getDate() - 5);
    let arrfivedaysago = d.toLocaleString().split(',');
    console.log(arrfivedaysago);
    let dateoffivedaysago = arrfivedaysago[0];
    console.log(dateoffivedaysago);
    let arrofdate5daysagois = dateoffivedaysago.split('/');
    console.log(arrofdate5daysagois);
    let finalfivedaysagodateis =
      arrofdate5daysagois[2] + arrofdate5daysagois[1] + arrofdate5daysagois[0];
    finalfivedaysagodateis = JSON.parse(finalfivedaysagodateis);
    console.log(finalfivedaysagodateis);

    let data3 = await axios.get(
      `/api/user/getallapplicationsofjobseeker/${this.state.email_id}`
    );

    console.log(data3.data.user);

    // applications of candidates to be reviewd work...

    let candidatestobereviewd = [];
    data3.data.user.map((value) => {
      if (value.views === 0) {
        candidatestobereviewd.push(value);
      }
    });

    this.setState({ cardcounter3: candidatestobereviewd.length });
    this.setState({ applicationstobereviewedarr: candidatestobereviewd });

    // applicationsinlastfivedays
    let applicationdatesdatafivedaysago = [];
    data3.data.user.map((value) => {
      let dd = value.date;
      // let arrdd = dd.split('T');
      // let mydd = arrdd[0];
      // console.log(mydd);
      let arrmydd = dd.split('-');
      let mydddate = arrmydd[0] + arrmydd[1] + arrmydd[2];
      // console.log(mydddate);
      let intmyddate = JSON.parse(mydddate);
      console.log(intmyddate);
      if (intmyddate >= finalfivedaysagodateis && intmyddate <= mydate) {
        applicationdatesdatafivedaysago.push(value);
      }
    });
    this.setState({
      applicationsinlastfivedays: applicationdatesdatafivedaysago,
    });
    console.log(this.state.applicationsinlastfivedays);
    this.setState({
      cardcounter2: this.state.applicationsinlastfivedays.length,
    });
  };

  profilecardclicked = (event) => {
    console.log('jobclicked');
    console.log(event.target.value);
  };

  interviewClicked = () => {
    this.setState({ interviewClicked: true });
  };

  applicationclicked = async (event) => {
    console.log(event);
    console.log(this.state.email_id);
    console.log(event.Job_id);
    let data2 = await axios.get(
      `/api/user/getallapplications/${this.state.email_id}/${event.Job_id}`
    );
    console.log(data2.data.user.length);
    console.log(data2.data.user);
    this.setState({ myallapplications: data2.data.user });
    console.log(this.state.myallapplications);
    this.setState({ applicationclick: !this.state.applicationclick });
  };

  applicationcrossClicked = () => {
    this.setState({ applicationclick: false });
  };

  applicationcl = async (event) => {
    let variable = event.target.getAttribute('value');
    console.log(variable);
    console.log(this.state.myallapplications);
    console.log(this.state.myallapplications[variable]);

    // JobId
    // EmailIdOfJB

    // this is the work for dynamic url
    let obj = {};
    obj.mm = true;
    obj.ApplicationId = this.state.myallapplications[variable].ApplicationId;
    obj.job_id = this.state.myallapplications[variable].JobId;
    obj.email = this.state.myallapplications[variable].EmailIdOfJB;
    obj.Email_id = this.state.myallapplications[variable].EmailIdOfJP;

    console.log(this.state.myallapplications[variable].views);

    await axios.post(
      `/api/user/addviewinapplicationtable/${
        this.state.myallapplications[variable].ApplicationId
      }/${this.state.myallapplications[variable].views + 1}`
    );

    let myobj = JSON.stringify(obj);
    let encodeddata = btoa(myobj);

    console.log(this.state.myallapplications[variable].EmailIdOfJB);
    this.props.history.push({
      pathname: `/login/applyjob/UserProfile/${this.state.myallapplications[variable].JobId}/${encodeddata}`,
      state: {
        mm: true,
        ApplicationId: this.state.myallapplications[variable].ApplicationId,
        job_id: this.state.myallapplications[variable].JobId,
        email: this.state.myallapplications[variable].EmailIdOfJB,
        Email_id: this.state.myallapplications[variable].EmailIdOfJP,
      },
    });
  };

  jobfeatureclicked = (value) => {
    console.log(value.arr);
    console.log(value.index);
    console.log(value.count);
    if (value.index == 4) {
      console.log('hii' + ' ' + value.index);
      this.setState({ interviewClicked: !this.state.interviewClicked });
      this.setState({ shortlistedCandidatesClicked: false });
      this.setState({ newapplicationclicked: false });
      this.setState({ applicationstobereviewd: false });
    }

    if (value.index == 1) {
      console.log('hii' + ' ' + value.index);
      this.setState({
        newapplicationclicked: !this.state.newapplicationclicked,
      });
      this.setState({ interviewClicked: false });
      this.setState({ shortlistedCandidatesClicked: false });
      console.log(this.state.newapplicationclicked);
      this.setState({ applicationstobereviewd: false });
    }

    if (value.index == 3) {
      console.log('hii' + ' ' + value.index);
      this.setState({
        shortlistedCandidatesClicked: !this.state.shortlistedCandidatesClicked,
      });
      this.setState({ interviewClicked: false });
      this.setState({ newapplicationclicked: false });
      this.setState({ applicationstobereviewd: false });
    }

    if (value.index == 2) {
      console.log('applications to be reviewed');
      this.setState({
        applicationstobereviewd: !this.state.applicationstobereviewd,
      });
      this.setState({ shortlistedCandidatesClicked: false });
      this.setState({ newapplicationclicked: false });
      this.setState({ interviewClicked: false });
    }
  };

  cadidatedtobereviewedclicked = async (event) => {
    let variable = event.target.getAttribute('value');
    console.log(variable);

    let obj = {};
    obj.mm = true;
    obj.ApplicationId = this.state.applicationstobereviewedarr[
      variable
    ].ApplicationId;
    obj.job_id = this.state.applicationstobereviewedarr[variable].JobId;
    obj.email = this.state.applicationstobereviewedarr[variable].EmailIdOfJB;
    obj.Email_id = this.state.applicationstobereviewedarr[variable].EmailIdOfJP;

    console.log(this.state.applicationstobereviewedarr[variable].views);

    await axios.post(
      `/api/user/addviewinapplicationtable/${
        this.state.applicationstobereviewedarr[variable].ApplicationId
      }/${this.state.applicationstobereviewedarr[variable].views + 1}`
    );

    let myobj = JSON.stringify(obj);
    let encodeddata = btoa(myobj);

    console.log(this.state.applicationstobereviewedarr[variable].EmailIdOfJB);
    this.props.history.push({
      pathname: `/login/applyjob/UserProfile/${this.state.applicationstobereviewedarr[variable].JobId}/${encodeddata}`,
      state: {
        mm: true,
        ApplicationId: this.state.applicationstobereviewedarr[variable]
          .ApplicationId,
        job_id: this.state.applicationstobereviewedarr[variable].JobId,
        email: this.state.applicationstobereviewedarr[variable].EmailIdOfJB,
        Email_id: this.state.applicationstobereviewedarr[variable].EmailIdOfJP,
      },
    });
  };

  render() {
    // console.log(this.state.myallapplications);
    return (
      <>
        <HomeResponsiveHeader></HomeResponsiveHeader>
        <SeeAllHeader></SeeAllHeader>
        <div className='allcontainer'>
          <div className='seeallfeaturescontainer seealljobsprovidedcontainer'>
            <div className='containerOfJobProvider'>
              <div className='jobprovidercontentcontainer'>
                <div className='joproviderGreetingcardandfeatures'>
                  <JoproviderGreetingcardandfeatures
                    value={this.props.location.state.value}
                  ></JoproviderGreetingcardandfeatures>
                  <div className='jobproviderfeatures'>
                    {this.state.cardcontentarray.map((value, index) => {
                      let count = 0;
                      if (index == 0) {
                        count = this.state.cardcounter1;
                      } else if (index == 1) {
                        count = this.state.cardcounter2;
                      } else if (index == 2) {
                        count = this.state.cardcounter3;
                      } else if (index == 3) {
                        count = this.state.cardcounter4;
                      } else {
                        count = this.state.cardcounter5;
                      }
                      return (
                        <Jobfeatures
                          count={count}
                          arr={this.state.cardcontentarray}
                          index={index}
                          jobfeatureclicked={this.jobfeatureclicked}
                        ></Jobfeatures>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {this.state.mypostedjobdataarr.length > 0 && (
              <div className='seeAlljobProviderJobs'>
                {this.state.mypostedjobdataarr.map((value, index) => {
                  console.log(this.state.mypostedjobdataarr.length);
                  if (this.state.mypostedjobdataarr.length != 0) {
                    return (
                      <Myjobprofilecards
                        index={index}
                        value={value}
                        applicationclicked={this.applicationclicked}
                      ></Myjobprofilecards>
                    );
                  }
                })}
              </div>
            )}
            {this.state.interviewClicked && (
              <div className='interviewsCotainer'>
                <div className='interviewHeading'>Interviews</div>
                {this.state.arroftodayinterview.map((val) => {
                  return (
                    <>
                      <div className='intervirewdetailscontainer'>
                        <div className='emialofseeker'>
                          <div className='Emailidofseekerheading'>
                            Email Of Jobseeker
                          </div>
                          <div className='ansofjobseeker'>
                            {val.EmailIdOfJB}
                          </div>
                        </div>

                        <div className='timecontainer'>
                          <div className='timeheading'>Interview Timing</div>
                          <div className='andtimingcontainer'>
                            {val.interviewtime}
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            )}
            {this.state.newapplicationclicked && (
              <div className='myallnewapplicationsContainer'>
                <div className='myheadingofContainer'>New Applications</div>
                {this.state.applicationsinlastfivedays.map((value) => {
                  return (
                    <>
                      <div className='newapplicationscontainer'>
                        <div className='newapplicationdatacontainer'>
                          <div className='ApplicationIdContainer'>
                            <div className='applicationidheader'>
                              ApplicationId
                            </div>
                            <div className='ansapplicationid'>
                              {value.ApplicationId}
                            </div>
                          </div>
                        </div>

                        <div className='newapplicationdatacontainer'>
                          <div className='JobIdContainer'>
                            <div className='jobidheader'>JobId</div>
                            <div className='Jobid'>{value.JobId}</div>
                          </div>
                        </div>

                        <div className='EmailIdOfJBcontainer'>
                          <div className='EmailIdOfJBContainer'>
                            <div className='EmailIdOfJBheader'>
                              Job Seeker Email Id
                            </div>
                            <div className='EmailIdOfJBans'>
                              {value.EmailIdOfJB}
                            </div>
                          </div>
                        </div>

                        <div className='shortlistedornotcontainer'>
                          <div className='shortlistedornotContainer'>
                            <div className='shortlistedornotJBheader'>
                              shortlist
                            </div>
                            <div className='shortlistedornotans'>
                              {value.shortlistedornot}
                            </div>
                          </div>
                        </div>

                        <div className='interviewdatecontainer'>
                          <div className='interviewdateContainer'>
                            <div className='interviewdateJBheader'>
                              Interview Date
                            </div>
                            <div className='interviewdateans'>
                              {value.interviewdate}
                            </div>
                          </div>
                        </div>

                        <div className='interviewtimecontainer'>
                          <div className='interviewtimeContainer'>
                            <div className='interviewtimeheader'>
                              Interview Time
                            </div>
                            <div className='interviewtimeans'>
                              {value.interviewtime}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            )}

            {this.state.applicationstobereviewd && (
              <div className='candidatestobereviewedClicked'>
                <div className='cadidatescontainer'>
                  Candidates To Be Reviewed
                </div>
                <div className='headingContainerOfCandidatesRe'>
                  <div className='ApplicationIdHeading'>ApplicationId</div>
                  <div className='jobseekerheading'>Job Seeker Email</div>
                  <div className='CompanyEmail'>Company Email</div>
                </div>

                {this.state.applicationstobereviewedarr.map((value, index) => {
                  return (
                    <div
                      className='headingContainerOfCandidatesRef'
                      value={index}
                      onClick={this.cadidatedtobereviewedclicked}
                    >
                      <div className='ApplicationIdHeading'>
                        {value.ApplicationId}
                      </div>
                      <div className='jobseekerheading' value={index}>
                        {value.EmailIdOfJB}
                      </div>
                      <div className='CompanyEmail'>{value.CompanyEmail}</div>
                    </div>
                  );
                })}
              </div>
            )}

            {this.state.shortlistedCandidatesClicked && (
              <div className='myallshortlistedCandidatesContainer'>
                <div className='myheadingofContainer'>
                  Shortlisted Candidates
                </div>
                {this.state.shortlistedarr.map((value) => {
                  return (
                    <>
                      <div className='SortlistedCandidatesContainer'>
                        <div className='Shortlisteddatacontainer'>
                          <div className='ApplicationIdContainer'>
                            <div className='applicationidheader'>
                              ApplicationId
                            </div>
                            <div className='ansapplicationid'>
                              {value.ApplicationId}
                            </div>
                          </div>
                        </div>

                        <div className='Shortlisteddatacontainer'>
                          <div className='JobIdContainer'>
                            <div className='jobidheadingContainer'>JobId</div>
                            <div className='ansshortlistedCandidates'>
                              {value.JobId}
                            </div>
                          </div>
                        </div>

                        <div className='EmailIdContainerOfJobSeeker'>
                          <div className='EmailidContainerJB'>
                            Job Seeker Email
                          </div>
                          <div className='ansEmailIdContainer'>
                            {value.EmailIdOfJB}
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            )}
          </div>
          <div className='featuresList'>
            {this.state.applicationclick && (
              <div className='heading'>
                <div className='jobproviderheading'>Applications</div>
                <div className='crossbtn'>
                  <CancelIcon onClick={this.applicationcrossClicked} />
                </div>
              </div>
            )}
            {this.state.myallapplications.map((value, index) => {
              console.log(index);
              if (
                this.state.myallapplications.length > 0 &&
                this.state.applicationclick
              ) {
                return (
                  <>
                    <div
                      className='alldata'
                      value={index}
                      onClick={this.applicationcl}
                    >
                      <img
                        src={logo}
                        className='myimgofjobprovider'
                        value={index}
                        onClick={this.applicationcl}
                      ></img>
                      <div className='appu'>
                        <div
                          className='applicationid'
                          value={index}
                          onClick={this.applicationcl}
                        >
                          {value.ApplicationId}
                        </div>
                        <div
                          className='jobseeker'
                          value={index}
                          onClick={this.applicationcl}
                        >
                          {value.EmailIdOfJB}
                        </div>
                        <div className='containerof1 shortlistedornot1'>
                          {value.shortlistedornot === 'true' && (
                            <div className='shortlisted1'>Shortlisted</div>
                          )}

                          {value.shortlistedornot === 'false' && (
                            <div className='Reject1'>Pending</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
            })}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default SeeJobProviderDashboard;
