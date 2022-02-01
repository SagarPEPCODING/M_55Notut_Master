import React, { Component } from 'react';
import PopUp from './PopUp.js';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { v4 as uuidv4 } from 'uuid';
import '../css_Files/userprofile.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import NewHeader from './NewHeader';
import Footer from './Footer';
import Input from '@material-ui/core/Input';
import Textarea from './Textarea';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WebIcon from '@material-ui/icons/Web';
import LinkIcon from '@material-ui/icons/Link';
import { MDBInput } from 'mdbreact';
import axios from 'axios';
import TextEditor from './TextEditor';
import NewTextEditor from './NewTextEditor';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import drafttohtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import SeeAllHeader from './SeeAllHeader';
import HomeResponsiveHeader from './HomeResponsiveHeader';
const { htmlToText } = require('html-to-text');

class EditUserProfile extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      interestedIn: [],
      competencies: [],
      softskill: [],
      techproficiency: [],
      languageSpoken: [],
      name: '',
      about: '',
      detailedSummary: '',
      transfer1: '',
      transfer2: '',
      transfer3: '',
      calendly: '',
      website: '',
      Linkedin: '',
      uploadFileName: '',
      file: '',
      uploadedfile: {},
      sizeNotFit: false,

      editorState: '',
      descriptionState: '',
      Resumefile: '',
      techproficiencyhaving: [],
      topthreeroles: [],
      detailedsummaryprops: '',
      aboutprops: '',
      datacomeabout: false,
      datacomedetailed: false,
    };
  }

  names = [
    'Google Sheets',
    'OpenOffice',
    'comparative analyses',
    'pivot tables',
    'macros',
    'Trello',
    'Photoshop',
    'InDesign',
    'Acrobat',
    'Corel Draw',
    'HTML',
    'CSS',
    'C#',
    'SQL',
    'Java',
    'C++',
    'WordPress',
    'Content Management Systems (CMS)',
    'MS Office',
    'PowerPoint',
    'databases',
    'JavaScript',
    'XML',
    'C',
    'Perl',
    'Python',
    'PHP',
    'AJAX',
    'ASP.NET',
    'Ruby',
    'Troubleshooting',
    'Assessment',
    'System knowledge',
    'testing',
    'scheduling',
    'risk management',
    'Blockchain technologies',
    'Bitcoin',
    'Ripple',
    'Ethereum',
    'Cloud and Distributed Computing',
    'Kubernetes',
    'Docker',
    'Azure',
    'AWS',
    'AutoCAD',
    'MATLAB',
    'Verilog',
    'Simulink',
    'Pspice',
    'Multisim',
    'ETAP',
    'VMware vSphere',
    'Microsoft Hyper-V',
    'QEMU',
    'Oracle VM VirtualBox',
    'XEN',
    'database management',
    'Magento',
    'PrestaShop',
    'Joomla',
    'OpenCart',
    'WooCommerce',
    'Shopify',
    'Data Structures',
  ];

  careeroptions = [
    'Medical Professionals (Doctors & Surgeons)',
    'Data Scientist',
    'Machine Learning Experts',
    'Blockchain Developer',
    'Administrative assistant',
    'Business development manager',
    'Civil service administrative officer',
    'Compliance Officer',
    'Environmental Health Officer',
    'Health Records Clerk',
    'Legal Secretery',
    'Local Government Revenues Officer',
    'Member Of Parliament',
    'Project Manager',
    'Recruitment consultant',
    'Secretary',
    'Business Analyst',
    'Car Rental Agent',
    'Civil Service Executive Officer',
    'Diplomatic Service Officer',
    'Health Service Manager',
    'Local government administrative assistant',
    'Management Colsultant',
    'Operational Researcher',
    'Purchasing Manager',
    'Registrar of births, deaths, marriages and civil partnerships',
    'Trade Union Official',
    'Bussiness Continuity Specialist',
    'Charity Fundraiser',
    'Compny Secretary',
    'Economic Development Officer',
    'Health And Safety Adviser',
    'Human Resource Adviser',
    'Local Government Officer',
    'Medical Secretary',
    'Personal Assistent',
    'Receptionist',
    'Scrum Master',
    'Trading Standards Officer',
    'Information Technology',
    'Agricultural Consultant',
    'Veterinary surgeon',
    'App Developer',
    'Big Data Engineer',
    'Database Administrator',
    'Forensic computer analyst',
    'Games Tester',
    'IT Project Analyst',
    'Machine Learning Engineer',
    'Robotics Engineer',
    'Solution Architect',
    'Web Developer',
    'CAD Technician',
    'Devsecops Developer',
    'Game Designer',
    'IT Support Technician',
    'Network Manager',
    'Software Developer',
    'System Analyst',
    'Web Editor',
    'Audio-Visual Technician',
    'Ethical Hacker',
    'Virtual Reality Designer',
    'Architect',
    'Architectural Technician',
    'Animator',
    'Fashion Designer',
    'Product Designer',
    'Career Advisor',
    'Teacher',
    'Training Manager',
    'Training Officer',
    'Aerospace Engineer',
    'CNC Programmer',
    'Electrician',
    'Chemical Engineer',
    'Design Engineer',
    'Marine Engineer',
    'Accountant Manager',
    'Accounting Technician',
    'Bank Manager',
    'Credit Manager',
    'Financial Advisor',
    'Payroll Administrator',
    'Economist',
    'Tax Inspector',
    'Investement Banker',
    'Finance Analyst',
    'Pharmacist',
    'Orthoptist',
    'Clinical Engineer',
    'Chef',
    'Travel Agent',
    'Restaurant manager',
    'Social Worker',
    'Counsellor',
    'Sports Professional',
    'Personal Trainer',
  ];

  InterestedIn = (event) => {
    console.log(event.target.value);
    this.setState({ interestedIn: event.target.value });
  };

  Competencies = (event) => {
    console.log(event.target.value);
    this.setState({ competencies: event.target.value });
  };

  Softskills = (event) => {
    console.log(event.target.value);
    this.setState({ softskill: event.target.value });
  };

  Techproficiency = (event) => {
    console.log(event.target.value);
    this.setState({ techproficiency: event.target.value });
    console.log(this.state.techproficiency);
  };

  DetailedSummary = (event) => {
    console.log(event.target.value);
    this.setState({ detailedSummary: event.target.value });
  };

  LanguageSpoken = (event) => {
    console.log(event.target.value);
    this.setState({ languageSpoken: event.target.value });
  };

  NametextChange = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };

  AboutUser = (event) => {
    console.log(event.target.value);
    this.setState({ about: event.target.value });
  };

  transferableskills1 = (event) => {
    console.log(event.target.value);
    console.log(this.state.transfer1);
    this.setState({ transfer1: event.target.value });
  };

  transferableskills2 = (event) => {
    console.log(event.target.value);
    console.log(this.state.transfer2);
    this.setState({ transfer2: event.target.value });
  };

  transferableskills3 = (event) => {
    console.log(event.target.value);
    console.log(this.state.transfer3);
    this.setState({ transfer3: event.target.value });
  };

  LinkedIn = (event) => {
    console.log(event.target.value);
    this.setState({ Linkedin: event.target.value });
  };

  Website = (event) => {
    console.log(event.target.value);
    this.setState({ website: event.target.value });
  };

  Calendly = (event) => {
    console.log(event.target.value);
    this.setState({ calendly: event.target.value });
  };

  comp = [
    'BookKeeping',
    'Information Technology',
    'Cloud Accounting Tools',
    'GAAP',
    'Analytics',
    'Cash Flow Management',
    'Microsoft Office',
    'Risk Analysis',
    'Data Mining',
    'Data Presentation',
    'Resource Management',
    'Data Engineering',
    'Database Management',
    'SEO/SEM Marketing',
    'Content Creation',
    'Marketing',
    'Brand Communications',
    'Social Media',
    'Business Development or Sales Skills',
    'Strategy',
    'Forecasting',
    'CRM',
    'Marketing Compaign Management',
    'Google Analytics',
    'Content Management Systems such as Wordpress',
    'Project Management',
    'Agile Methodologies',
    'UI / UX Design',
    'Storage And Data Management',
    'Networking Communication',
    'Cloud Middleware Technologies',
    'Android Development',
    'Web Architecture And Development Framework',
    'Angular And Node Apps',
    'Encryption Algorithms',
    'Authentication Systems',
    'Risk Assessment',
    'Web Design',
    'E-Commerce',
    'Costumer Services',
    'Marketing Research',
    'Data Entry',
    'Data Management',
    'Acounting',
  ];

  interestedin = [
    'Permanent And Contract Jobs',
    'Advising',
    'Freelance',
    'Writing And Translation',
    'Business Services',
    'Photography And Creative',
    'Home Services',
  ];

  skills = [
    'Strong Work Ethic',
    'Communication',
    'Agility And Adaptibility',
    'Problem Solving',
    'Creativity And Innovation',
    'Teamwork',
    'Leadership',
    'Positive Attitude',
    'Inter-Personal Skill',
    'Time Management',
    'Work Under Pressure',
    'Attention To Detail',
    'Descision Making',
    'Drawing',
    'Listen Music',
    'Travelling',
  ];

  language = ['English', 'Hindi', 'Chinese', 'Mandarin', 'Other'];

  SaveAll = async () => {
    var interest = this.state.interestedIn;

    var interestString = '';
    for (let i = 0; i < interest.length && interest.length > 0; i++) {
      interestString += interest[i] + ',';
    }

    console.log(interestString);

    var competency = this.state.competencies;

    var competencyString = '';
    for (let i = 0; i < competency.length && competency.length > 0; i++) {
      competencyString += competency[i] + ',';
    }

    console.log(competencyString);

    var softskills = this.state.softskill;

    var softskillsString = '';
    for (let i = 0; i < softskills.length && softskills.length > 0; i++) {
      softskillsString += softskills[i] + ',';
    }

    console.log(softskillsString);

    var techproficiencies = this.state.techproficiency;
    var techproficienciesString = '';
    for (
      let i = 0;
      i < techproficiencies.length && techproficiencies.length > 0;
      i++
    ) {
      techproficienciesString += techproficiencies[i] + ',';
    }
    console.log(techproficienciesString);
    var languageSpokens = this.state.languageSpoken;
    var languageSpokensString = '';
    for (
      let i = 0;
      i < languageSpokens.length && languageSpokens.length > 0;
      i++
    ) {
      languageSpokensString += languageSpokens[i] + ',';
    }
    console.log(languageSpokensString);

    var techproficiencyhavings = this.state.techproficiencyhaving;
    console.log(techproficiencyhavings);
    var techproficienciesStringHaving = '';
    for (
      let i = 0;
      i < techproficiencyhavings.length && techproficiencyhavings.length > 0;
      i++
    ) {
      console.log('heii guys');
      techproficienciesString += techproficiencyhavings[i] + ',';
    }
    console.log(techproficienciesStringHaving);
    console.log(this.state.techproficiencyhaving);

    var topthreerolesare = this.state.topthreeroles;
    let stringtopthreeroles = '';
    for (
      let i = 0;
      i < topthreerolesare.length && topthreerolesare.length > 0;
      i++
    ) {
      stringtopthreeroles += topthreerolesare[i] + ',';
    }
    console.log(stringtopthreeroles);

    const myobjofhtmlfile = {
      filedata: this.state.about,
    };

    const obj = JSON.stringify({
      key1: interestString,
      key2: competencyString,
      key3: softskillsString,
      key4: techproficienciesString,
      key5: languageSpokensString,
      key6: this.state.name,
      key7: this.state.editorState,
      key8: this.state.descriptionState,
      key9: this.state.transfer1,
      key10: this.state.transfer2,
      key11: this.state.transfer3,
      key12: this.state.calendly,
      key13: this.state.website,
      key14: this.state.Linkedin,
      key16: this.props.history.location.state.mail_id,
      key15: stringtopthreeroles,
    });

    console.log(
      this.props.history.location.state.mail_id +
        ' llllll ' +
        typeof this.state.about
    );
    console.log('******************');

    try {
      let { data } = await axios.post(
        `/api/users/login/userprofile/editprofile/${obj}`
      );
      let user = data.user[0];
      alert('done');
    } catch (error) {
      // this.setState('');
      alert('error :- ' + error);
    }

    console.log(obj);

    this.setState({ interestedIn: [] });
    this.setState({ competencies: [] });
    this.setState({ softskill: [] });
    this.setState({ techproficiency: [] });
    this.setState({ languageSpoken: [] });
    this.setState({ name: '' });
    this.setState({ about: '' });
    this.setState({ descriptionState: '' });
    this.setState({ transfer1: '' });
    this.setState({ transfer2: '' });
    this.setState({ transfer3: '' });
    this.setState({ calendly: '' });
    this.setState({ website: '' });
    this.setState({ Linkedin: '' });
  };

  componentDidMount = () => {
    const mydata = this.props.location.state;
    console.log(mydata);
    console.log('********');

    let about = this.props.location.state.about;
    let description = this.props.location.state.detailedsummary;

    this.setState({ aboutprops: about });
    this.setState({ detailedsummaryprops: description });
    this.setState({ datacomeabout: true });
    this.setState({ datacomedetailed: true });
    // console.log(decodeabout);
    // console.log(decodeddescription);
    if (mydata.experiencein !== null) {
      let topthreeroles = mydata.experiencein;
      let arrtopthreeroles = topthreeroles.split(',');
      console.log(arrtopthreeroles);
      this.setState({ topthreeroles: arrtopthreeroles });
    }

    // experiencein
    let interested = mydata.Interested;
    let arrinterested = interested.split(',');
    console.log(arrinterested);
    this.setState({ interestedIn: arrinterested });

    //Competency
    let Competency = mydata.Competency;
    let arrCompetency = Competency.split(',');
    console.log(arrCompetency);
    this.setState({ competencies: arrCompetency });

    // softskill
    let softskill = mydata.softskill;
    let arrsoftskill = softskill.split(',');
    console.log(arrsoftskill);
    this.setState({ softskill: arrsoftskill });

    // proficiency
    let proficiency = mydata.proficiency;
    let arrproficiency = proficiency.split(',');
    console.log(arrproficiency);
    this.setState({ techproficiency: arrproficiency });

    // language
    let language = mydata.language;
    let arrlanguage = language.split(',');
    console.log(arrlanguage);
    this.setState({ languageSpoken: arrlanguage });

    // transfer1
    let transfer1 = mydata.transfer1;
    this.setState({ transfer1: transfer1 });

    // transfer2
    let transfer2 = mydata.transfer2;
    this.setState({ transfer2: transfer2 });

    // transfer3
    let transfer3 = mydata.transfer3;
    this.setState({ transfer2: transfer2 });

    // name
    this.setState({ name: mydata.name });

    // calendly
    this.setState({ calendly: mydata.calendly });

    // website
    this.setState({ website: mydata.website });

    // linkedin
    this.setState({ Linkedin: mydata.linkedin });
  };

  onChange = (e) => {
    var res = e.target.files[0].name.replace('(', '');
    res = res.replace(')', '');
    res = res.replace(/\s/g, '');
    console.log(res);
    alert(res);
    this.setState({ file: e.target.files[0] });
    setTimeout(() => {
      console.log(this.state.file);
    }, 4000);
  };

  handleupload = async (e) => {
    e.preventDefault();
    console.log(this.state.file.size);
    const id = uuidv4();
    // e.stopPropagation()
    if (this.state.file.size / 1000000 > 1.0) {
      this.setState({ sizeNotFit: true });
      console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
    } else {
      let filename = this.state.file + id;
      const formdata = new FormData();
      formdata.append('file', this.state.file);
      formdata.append('id', id);
      console.log(id);

      console.log(formdata);
      // alert(formdata.get('file'));
      alert(formdata.get('id'));

      alert('hello');

      try {
        const res = await axios.post('/upload', formdata, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        const { fileName, filePath } = res.data;
        this.setState({ uploadedfile: fileName, filePath });
      } catch (err) {
        if (err.response.status === 5000) {
          console.log('there was a problem with the server');
        } else {
          console.log(err.response.data.msg);
        }
      }

      var myJSON = JSON.stringify(this.state.file);
      console.log(this.state.file.name);
      console.log(this.props.history.location.state.mail_id);
      alert('hii');

      var res = this.state.file.name.replace('(', '');
      res = res.replace(')', '');
      res = res.replace(/\s/g, '');
      console.log(res);

      let { data } = await axios.post(
        `/api/users/addProfileImage/${res}/${this.props.history.location.state.mail_id}`
      );

      this.setState({ sizeNotFit: false });
    }
  };

  handleuploadResume = async (e) => {
    e.preventDefault();
    console.log(this.state.Resumefile.size);
    console.log(this.state.Resumefile);

    const formdata = new FormData();
    formdata.append('file', this.state.Resumefile);

    console.log(formdata);
    alert(formdata.get('file'));

    alert('hello');

    try {
      const res = await axios.post('/uploadResume', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const { fileName, filePath } = res.data;
      this.setState({ uploadedfile: fileName, filePath });
    } catch (err) {
      if (err.response.status === 5000) {
        console.log('there was a problem with the server');
      } else {
        console.log(err.response.data.msg);
      }
    }

    var myJSON = JSON.stringify(this.state.Resumefile);
    console.log(this.state.Resumefile.name);
    console.log(this.props.history.location.state.mail_id);
    alert('hii');

    let { data } = await axios.post(
      `/api/users/addProfileResume/${this.state.Resumefile.name}/${this.props.history.location.state.mail_id}`
    );

    this.setState({ sizeNotFit: false });
  };

  mydraft = (value) => {
    console.log(value);
    var encodedStringBtoA = btoa(value);
    console.log(encodedStringBtoA);
    this.setState({ editorState: encodedStringBtoA });
  };

  mydraftdescription = (value) => {
    console.log(value);
    var encodedStringBtoA = btoa(value);
    console.log(encodedStringBtoA);
    this.setState({ descriptionState: encodedStringBtoA });
  };

  uploadResume = (e) => {
    this.setState({ Resumefile: e.target.files[0] });
    console.log(e.target.files[0]);
    setTimeout(() => {
      console.log(this.state.Resumefile);
    }, 1000);
  };

  Techproficiencyhaving = (event) => {
    console.log(event.target.value);
    this.setState({ techproficiencyhaving: event.target.value });
    console.log(this.state.techproficiencyhaving);
  };

  topthreeRoles = (event) => {
    console.log(event.target.value);
    this.setState({ topthreeroles: event.target.value });
    console.log(this.state.topthreeroles);
  };

  render() {
    // console.log(this.state.techproficiency);
    // console.log(this.state.techproficiencyhaving);
    console.log(this.state.aboutprops);
    console.log(this.state.detailedsummaryprops);
    return (
      <>
        <HomeResponsiveHeader></HomeResponsiveHeader>
        <SeeAllHeader></SeeAllHeader>
        <div className='container'>
          <div className='topbanner'>
            <div className='topbannerlogo'>55notout.com</div>
            <div className='topbanneradd'></div>
            <div className='topbannerLoginSignup'>
              {/* <Button variant='contained' color='secondary'>
                <Link to='/login' className='text_decoration clr'>
                  Login
                </Link>
              </Button>
              <Button variant='contained' color='primary'>
                <Link to='/signup' className='text_decoration clr'>
                  SignUp
                </Link>
              </Button> */}
            </div>
          </div>

          <div className='userProfileContainer'>
            <div className='containerSiderbar'>
              <div className='profileimg'></div>
              {this.state.sizeNotFit && (
                <div className='1212'>
                  size Not valid, Image Size Should Be Less Than or Equal To 1MB
                </div>
              )}
              <input type='file' onChange={this.onChange}></input>
              <Button
                variant='contained'
                color='default'
                onClick={this.handleupload}
              >
                UPLOAD
              </Button>

              <div className='resumeuploadContainer'>
                <div className='profileimg'>UPLOADED</div>
                <input type='file' onChange={this.uploadResume}></input>
                <div className='uploadButton' onClick={this.handleuploadResume}>
                  UPLOAD
                </div>
              </div>

              <div className='interested'>
                <div className='compe'>Interested In</div>
                <div className='selectinterestedin'>
                  <FormControl>
                    <InputLabel className='demo-mutiple-chip-label'>
                      Interested In
                    </InputLabel>
                    <Select
                      className='demo-mutiple-chip'
                      multiple
                      value={this.state.interestedIn}
                      onChange={this.InterestedIn}
                      input={<Input className='select-multiple-chip' />}
                      renderValue={(selected) => (
                        <div className='displayincolumn'>
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </div>
                      )}
                    >
                      {this.interestedin.map((name) => (
                        <MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className='competencies'>
                <div className='compe'>Competencies</div>
                <div className='selectinterestedin'>
                  <FormControl>
                    <InputLabel className='demo-mutiple-chip-label'>
                      Competencies
                    </InputLabel>
                    <Select
                      className='demo-mutiple-chip'
                      multiple
                      value={this.state.competencies}
                      onChange={this.Competencies}
                      input={<Input className='select-multiple-chip' />}
                      renderValue={(selected) => (
                        <div className='displayincolumn'>
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </div>
                      )}
                    >
                      {this.comp.map((name) => (
                        <MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className='softskills'>
                <div className='compe'>Soft Skills</div>
                <div className='selectinterestedin'>
                  <FormControl>
                    <InputLabel className='demo-mutiple-chip-label'>
                      Soft Skills
                    </InputLabel>
                    <Select
                      className='demo-mutiple-chip'
                      multiple
                      value={this.state.softskill}
                      onChange={this.Softskills}
                      input={<Input className='select-multiple-chip' />}
                      renderValue={(selected) => (
                        <div className='displayincolumn'>
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </div>
                      )}
                    >
                      {this.skills.map((name) => (
                        <MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className='techproficencies'>
                <div className='compe'>Tech Proficiency</div>
                <div className='selectinterestedin'>
                  <FormControl>
                    <InputLabel className='demo-mutiple-chip-label'>
                      Tech Proficiency
                    </InputLabel>
                    <Select
                      className='demo-mutiple-chip'
                      multiple
                      value={this.state.techproficiency}
                      onChange={this.Techproficiency}
                      input={<Input className='select-multiple-chip' />}
                      renderValue={(selected) => (
                        <div className='displayincolumn'>
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </div>
                      )}
                    >
                      {this.names.map((name) => (
                        <MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className='Language'>
                <div className='compe'>Language Spoken</div>
                <div className='selectinterestedin'>
                  <FormControl>
                    <InputLabel className='demo-mutiple-chip-label'>
                      Languages Know
                    </InputLabel>
                    <Select
                      className='demo-mutiple-chip'
                      multiple
                      value={this.state.languageSpoken}
                      onChange={this.LanguageSpoken}
                      input={<Input className='select-multiple-chip' />}
                      renderValue={(selected) => (
                        <div className='displayincolumn'>
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </div>
                      )}
                    >
                      {this.language.map((name) => (
                        <MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className='containerUserprofile'>
              <div className='usernameContainer'>
                <div className='name1'>
                  <label>Write Your Full Name :- </label>
                  <input
                    type='text'
                    label=''
                    value={this.state.name}
                    className='textusername'
                    onChange={this.NametextChange}
                  ></input>
                </div>
              </div>

              <div className='about_yourself'>About Yourself</div>
              <div className='content_viewe'>
                <div className='content'>
                  {this.state.datacomeabout && (
                    <TextEditor
                      mydraft={this.mydraft}
                      value={this.state.aboutprops}
                    ></TextEditor>
                  )}
                </div>
              </div>

              <div className='detailedContent'>
                <div className='about_yourself'>Detailed Summary</div>
                <div className='content_viewe'>
                  <div className='content'>
                    {this.state.datacomedetailed && (
                      <NewTextEditor
                        mydraftdescription={this.mydraftdescription}
                        value={this.state.detailedsummaryprops}
                      ></NewTextEditor>
                    )}
                  </div>
                </div>
              </div>

              <div className='Top3skills'>
                <div className='about_yourself'>
                  Top Three Transeferable Skills
                </div>
                <div className='selectinterestedin'>
                  <FormControl variant='outlined'>
                    <InputLabel id='demo-simple-select-outlined-label'>
                      Skill 1
                    </InputLabel>
                    <Select
                      labelId='demo-simple-select-outlined-label'
                      id='demo-simple-select-outlined'
                      // onChange={handleChange}
                      value={this.state.transfer1}
                      label='Age'
                      onChange={this.transferableskills1}
                    >
                      <MenuItem value=''>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'Problem Solving'}>
                        Problem Solving
                      </MenuItem>
                      <MenuItem value={'Analytical Reasoning'}>
                        Analytical Reasoning
                      </MenuItem>
                      <MenuItem value={'Critical Thinking'}>
                        Critical Thinking
                      </MenuItem>
                      <MenuItem value={'Leadership'}>Leadership</MenuItem>
                      <MenuItem value={'Adaptability'}>Adaptability</MenuItem>
                      <MenuItem value={'Teamwork'}>Teamwork</MenuItem>
                      <MenuItem value={'Communication'}>Communication</MenuItem>
                      <MenuItem value={'Writing'}>Writing</MenuItem>
                      <MenuItem value={'Listening'}>Listening</MenuItem>
                      <MenuItem value={'Creativity'}>Creativity</MenuItem>
                      <MenuItem value={'Attention to Detail'}>
                        Attention to Detail
                      </MenuItem>
                      <MenuItem value={'Project Management'}>
                        Project Management
                      </MenuItem>
                      <MenuItem value={'Relationship Building'}>
                        Relationship Building
                      </MenuItem>
                      <MenuItem value={'Computer Skills'}>
                        Computer Skills
                      </MenuItem>
                      <MenuItem value={'Management'}>Management</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className='selectinterestedin'>
                  <FormControl variant='outlined'>
                    <InputLabel id='demo-simple-select-outlined-label'>
                      Skill 2
                    </InputLabel>
                    <Select
                      onChange={this.transferableskills2}
                      labelId='demo-simple-select-outlined-label'
                      id='demo-simple-select-outlined'
                      // onChange={handleChange}
                      value={this.state.transfer2}
                      label='Age'
                    >
                      <MenuItem value=''>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'Problem Solving'}>
                        Problem Solving
                      </MenuItem>
                      <MenuItem value={'Analytical Reasoning'}>
                        Analytical Reasoning
                      </MenuItem>
                      <MenuItem value={'Critical Thinking'}>
                        Critical Thinking
                      </MenuItem>
                      <MenuItem value={'Leadership'}>Leadership</MenuItem>
                      <MenuItem value={'Adaptability'}>Adaptability</MenuItem>
                      <MenuItem value={'Teamwork'}>Teamwork</MenuItem>
                      <MenuItem value={'Communication'}>Communication</MenuItem>
                      <MenuItem value={'Writing'}>Writing</MenuItem>
                      <MenuItem value={'Listening'}>Listening</MenuItem>
                      <MenuItem value={'Creativity'}>Creativity</MenuItem>
                      <MenuItem value={'Attention to Detail'}>
                        Attention to Detail
                      </MenuItem>
                      <MenuItem value={'Project Management'}>
                        Project Management
                      </MenuItem>
                      <MenuItem value={'Relationship Building'}>
                        Relationship Building
                      </MenuItem>
                      <MenuItem value={'Computer Skills'}>
                        Computer Skills
                      </MenuItem>
                      <MenuItem value={'Management'}>Management</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className='selectinterestedin'>
                  <FormControl variant='outlined'>
                    <InputLabel id='demo-simple-select-outlined-label'>
                      Skill 3
                    </InputLabel>
                    <Select
                      onChange={this.transferableskills3}
                      labelId='demo-simple-select-outlined-label'
                      id='demo-simple-select-outlined'
                      // onChange={handleChange}
                      value={this.state.transfer3}
                      label='Age'
                    >
                      <MenuItem value=''>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'Problem Solving'}>
                        Problem Solving
                      </MenuItem>
                      <MenuItem value={'Analytical Reasoning'}>
                        Analytical Reasoning
                      </MenuItem>
                      <MenuItem value={'Critical Thinking'}>
                        Critical Thinking
                      </MenuItem>
                      <MenuItem value={'Leadership'}>Leadership</MenuItem>
                      <MenuItem value={'Adaptability'}>Adaptability</MenuItem>
                      <MenuItem value={'Teamwork'}>Teamwork</MenuItem>
                      <MenuItem value={'Communication'}>Communication</MenuItem>
                      <MenuItem value={'Writing'}>Writing</MenuItem>
                      <MenuItem value={'Listening'}>Listening</MenuItem>
                      <MenuItem value={'Creativity'}>Creativity</MenuItem>
                      <MenuItem value={'Attention to Detail'}>
                        Attention to Detail
                      </MenuItem>
                      <MenuItem value={'Project Management'}>
                        Project Management
                      </MenuItem>
                      <MenuItem value={'Relationship Building'}>
                        Relationship Building
                      </MenuItem>
                      <MenuItem value={'Computer Skills'}>
                        Computer Skills
                      </MenuItem>
                      <MenuItem value={'Management'}>Management</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className='Top3skills'>
                  <div className='about_yourself'>
                    Top Three Roles Worked In
                  </div>
                  {/* <div className='CompetenciesContaner'></div> */}
                  <div className='selectinterestedin selectionoftopthreeskills'>
                    <FormControl>
                      {/* <InputLabel className='demo-mutiple-chip-label'>
                      Experience In
                    </InputLabel> */}
                      <Select
                        className='demo-mutiple-chip'
                        multiple
                        value={this.state.topthreeroles}
                        onChange={this.topthreeRoles}
                        input={<Input className='select-multiple-chip' />}
                        renderValue={(selected) => (
                          <div className='displayincolumn'>
                            {selected.map((value) => (
                              <Chip key={value} label={value} />
                            ))}
                          </div>
                        )}
                      >
                        {this.careeroptions.map((name) => (
                          <MenuItem key={name} value={name}>
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </div>

                <div className='Top3skills'>
                  <div className='about_yourself'>Professional Links</div>
                  <div className='linkedin'>
                    <LinkedInIcon />
                    <MDBInput
                      type='textarea'
                      rows='2'
                      icon='pencil-alt'
                      onChange={this.LinkedIn}
                      value={this.state.Linkedin}
                    />
                  </div>
                  <div className='blogwebsite'>
                    <WebIcon />
                    <MDBInput
                      type='textarea'
                      rows='2'
                      icon='pencil-alt'
                      onChange={this.Website}
                      value={this.state.website}
                    />
                  </div>
                  <div className='calendly'>
                    <LinkIcon />
                    <div className='textareaclass'>
                      <MDBInput
                        type='textarea'
                        //   label='Detailed Summary'
                        rows='2'
                        icon='pencil-alt'
                        onChange={this.Calendly}
                        value={this.state.calendly}
                      />
                    </div>
                  </div>
                </div>

                <div className='savebtn'>
                  <Button
                    variant='contained'
                    color='secondary'
                    onClick={this.SaveAll}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default EditUserProfile;
