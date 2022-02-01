import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Link from 'react-router-dom';
import Home_File from './files/Home_File.js';
import Login from './files/Login';
import SignUp from './files/SignUp';
import UserProfile from './files/UserProfile';
import AddUserForm from './files/AddUserForm';
import ProductFile from './files/ProductFile';
import Talent from './files/Talent';
import Organisation from './files/Organisation';
import Job from './files/Job';
import Mentor from './files/Mentor';
import Events from './files/Events';
import EventFile from './files/EventFile';
import TalentFile from './files/TalentFile';
import JobFile from './files/JobFile';
import OrganisationFile from './files/OrganisationFile';
import MentorFile from './files/MentorFile';
import MiddlewareEvent from './files/MiddlewareEvent';
import MiddlewareJob from './files/MiddlewareJob';
import MiddlewareMentor from './files/MiddlewareMentor';
import MiddlewareOrganisation from './files/MiddlewareOrganisation';
import MiddlewareProducts from './files/MiddlewareProducts.js';
import MiddlewareTalent from './files/MiddlewareTalent';
import IndividualProduct from './files/IndividualProduct';
import Talenthomepage from './files/Talent_home_page';
import ProductPage from './files/ProductPage';
import UserListPage from './files/UserListPage';
import EditUserProfile from './files/EditUserProfile';
import IndividualEvents from './files/IndividualEvents';
import IndividualJob from './files/IndividualJob';
import IndividualMentor from './files/IndividualMentor';
import IndividualOrganisation from './files/IndividualOrganisation';
import IndividualProducts from './files/IndividualProducts';
import FeatureEvent from './files/FeatureEvent';
import EventListingPage from './files/EventListingPage';
import SeeAllHeader from './files/SeeAllHeader';
import FeatureJob from './files/FeatureJob';
import JobListingPage from './files/JobListingPage';
import FeatureMentor from './files/FeatureMentor';
import MentorListingPage from './files/MentorListingPage';
import FeatureOrganisation from './files/FeatureOrganisation';
import OrganisationListingPage from './files/OrganisationListingPage';
import FeatureProducts from './files/FeatureProducts';
import ProductsListingPage from './files/ProductsListingPage';
import SeeAllEventList from './files/SeeAllEventList';
import SeeAllJobList from './files/SeeAllJobList';
import SeeAllMentorList from './files/SeeAllMentorList';
import SeeAllOrganiationList from './files/SeeAllOrganiationList';
import SeeAllProductsList from './files/SeeAllProductsList';
import StaticPage from './files/StaticPage';
import IndividualFeaturedMentor from './files/IndividualFeaturedMentor';
import AdminDashboard from './files/AdminDashboard.js';
import EdituserProfileviaAdmin from './files/EdituserProfileviaAdmin';
import EditFeatureJobviaAdmin from './files/EditFeatureJobviaAdmin';
import EditFeatureMentorviaAdmin from './files/EditFeatureMentorviaAdmin';
import EditFeatureOrganisationviaAdmin from './files/EditFeatureOrganisationviaAdmin';
import EditFeaturEventviaAdmin from './files/EditFeaturEventviaAdmin';
import EditFeaturProductviaAdmin from './files/EditFeaturProductviaAdmin';
import SeeallJobedit from './files/SeeallJobedit';
import Seeallmentoredit from './files/Seeallmentoredit';
import MiddlewareJobForMentor from './files/MiddlewareJobForMentor';
import Seealleventedit from './files/Seealleventedit';
import SeeallOrganisationedit from './files/SeeallOrganisationedit';
import SeeallProductedit from './files/SeeallProductedit';
import SliderImageFrontent from './files/SliderImageFrontent';
import MiddlewareProductForMentor from './files/MiddlewareProductForMentor';
import SeeAllSliderImages from './files/SeeAllSliderImages';
import Addcourse from './files/Addcourse';
import IndividualOrganisationbyid from './files/IndividualOrganisationbyid';
import IndividualMentorbyid from './files/IndividualMentorbyid';
import IndividualJobsbyid from './files/IndividualJobsbyid';
import IndividualProductbyid from './files/IndividualProductbyid';
import IndividualFeaturedCourse from './files/IndividualFeaturedCourse';
import StaticPageData from './files/StaticPageData';
import SeeJobProviderDashboard from './files/SeeJobProviderDashboard';
import Applypages from './files/Applypages';
import LogginedEventFile from './files/LogginedEventFile';
import LoginedEvents from './files/LoginedEvents';
import Applypage from './files/Applypage';
import LoginedJob from './files/LoginedJob';
import LoginedJobFile from './files/LoginedJobFile';
import PdfReader from './files/PdfReader';
import LoginedMentor from './files/LoginedMentor';
import LoginedMentorFile from './files/LoginedMentorFile';
import LoginedOrganisation from './files/LoginedOrganisation';
import LoginedOrganisationFile from './files/LoginedOrganisationFile';
import LoginedAddProduct from './files/LoginedAddProduct';
import LoginedProductFile from './files/LoginedProductFile';
import LogineUserProfile from './files/LogineUserProfile';
import LoginedIndividualJob from './files/LoginedIndividualJob';
import MiddlewareCourses from './files/MiddlewareCourses';
import LoginedSeeJobProviderDashboard from './files/LoginedSeeJobProviderDashboard';
import EditEvent from './files/EditEvent';
import EditMentor from './files/EditMentor';
import EditOrganisation from './files/EditOrganisation';
import EditCourses from './files/EditCourses';
import EditProduct from './files/EditProduct';
import EditJobs from './files/EditJobs';
import { createStore } from 'redux';
import allreducers from './Reducers';
import { Provider } from 'react-redux';
import store from './Store/store';
import Model from './files/Model';
import ModelL from './files/ModelL';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <ProductPage />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>

        {/* <Route exact path='/signup'>
          <Model />
        </Route> */}

        <Route exact path='/login/courses'>
          <Addcourse />
        </Route>

        {/* /staticpage */}

        <Route exact path='/staticpage/:id'>
          <StaticPageData />
        </Route>

        <Route
          exact
          path='/pdfviewer'
          render={(props) => <PdfReader {...props} />}
        ></Route>

        <Route
          exact
          path='/login/userProfile/EditUserProfile'
          render={(props) => <EditUserProfile {...props} />}
        ></Route>

        <Route exact path='/login/seeallheader'>
          <SeeAllHeader></SeeAllHeader>
        </Route>

        {/* /login/individualproductOfFeaturedCourses */}

        <Route
          exact
          path='/login/individualproductOfFeaturedCourses/:id'
          render={(props) => <IndividualFeaturedCourse {...props} />}
        ></Route>

        <Route
          exact
          path='/login/UserProfile/:id/:encodingdata'
          render={(props) => <UserProfile {...props} />}
        />

        {/* logined userprofile */}
        <Route
          exact
          path='/UserProfile/:id/:encodingdata'
          render={(props) => <LogineUserProfile {...props} />}
        />

        {/*  /login/editevent/ */}
        <Route
          exact
          path='/login/editevent/:id'
          render={(props) => <EditEvent {...props} />}
        />

        {/* /login/editmentor */}

        <Route
          exact
          path='/login/editmentor/:id'
          render={(props) => <EditMentor {...props} />}
        />

        {/*  */}

        {/* /login/editorganisation */}

        <Route
          exact
          path='/login/editorganisation/:id'
          render={(props) => <EditOrganisation {...props} />}
        />

        {/* /login/editcourses */}
        <Route
          exact
          path='/login/editcourses/:id'
          render={(props) => <EditCourses {...props} />}
        />

        {/* /login/editproduct */}
        <Route
          exact
          path='/login/editproduct/:id'
          render={(props) => <EditProduct {...props} />}
        />

        {/* /login/editjob */}
        <Route
          exact
          path='/login/editjob/:id'
          render={(props) => <EditJobs {...props} />}
        />

        <Route exact path='/login/addProduct'>
          <div className='product_add'>
            <AddUserForm />
          </div>
        </Route>

        {/* LoginedAddProduct */}
        <Route exact path='/AddProduct'>
          <div className='product_add'>
            <LoginedAddProduct />
          </div>
        </Route>

        <Route exact path='/login/Products'>
          <div className='product_Card_store'>
            <ProductFile />
          </div>
        </Route>

        {/* Logined show all products */}

        <Route exact path='/Products'>
          <div className='product_Card_store'>
            <LoginedProductFile />
          </div>
        </Route>

        <Route exact path='/login/showEvents'>
          <div className='product_Card_store'>
            <EventFile />
          </div>
        </Route>

        {/* Loggined shoeEvents */}
        <Route exact path='/Events/showEvents'>
          <div className='product_Card_store'>
            <LogginedEventFile />
          </div>
        </Route>

        <Route exact path='/login/showTalents'>
          <div className='product_Card_store'>
            <TalentFile />
          </div>
        </Route>

        <Route exact path='/login/showJobs'>
          <div className='product_Card_store'>
            <JobFile />
          </div>
        </Route>

        {/* Logined showjobs */}

        <Route exact path='/Jobs/showJobs'>
          <div className='product_Card_store'>
            <LoginedJobFile />
          </div>
        </Route>

        <Route exact path='/login/staticPage'>
          <StaticPage />
        </Route>

        <Route exact path='/login/showOrganisation'>
          <div className='product_Card_store'>
            <OrganisationFile />
          </div>
        </Route>

        {/* Logined shoeOrganisation */}

        <Route exact path='/showOrganisation'>
          <div className='product_Card_store'>
            <LoginedOrganisationFile />
          </div>
        </Route>

        <Route exact path='/login/showMentor'>
          <div className='product_Card_store'>
            <MentorFile />
          </div>
        </Route>

        {/* Logined Mentor */}
        <Route exact path='/showMentor'>
          <div className='product_Card_store'>
            <LoginedMentorFile />
          </div>
        </Route>

        <Route exact path='/login/talent_add'>
          <div className='product_add'>
            <Talent />
          </div>
        </Route>

        <Route exact path='/login/Organisation'>
          <div className='product_add'>
            <Organisation />
          </div>
        </Route>

        {/* Logined Organisation */}

        <Route exact path='/AddOrganisation'>
          <div className='product_add'>
            <LoginedOrganisation />
          </div>
        </Route>

        {/* Add JOB */}
        {/* <Route exact path='/login/Job'>
        <div className='product_add'>
          <Job />
        </div>
      </Route> */}

        <Route
          exact
          path='/login/Job'
          render={(props) => <Job {...props} />}
        ></Route>

        <Route
          exact
          path='/Jobs'
          render={(props) => <LoginedJob {...props} />}
        ></Route>

        {/* <Route
        exact
        path='/login/Job'
        render={(props) => <Job {...props} />}
      ></Route> */}

        <Route exact path='/login/Mentor'>
          <div className='product_add'>
            <Mentor />
          </div>
        </Route>

        {/* /AddMentor */}

        <Route exact path='/AddMentor'>
          <div className='product_add'>
            <LoginedMentor />
          </div>
        </Route>

        {/* <Route
        exact
        path='/login/Mentor'
        render={(props) => <Mentor {...props} />}
      ></Route> */}

        {/* Events */}
        <Route exact path='/login/Events'>
          <div className='product_add'>
            <Events />
          </div>
        </Route>

        {/* logined Events */}

        {/* <Route exact path='/Events'>
          <div className='product_add'>
            <LoginedEvents />
          </div>
        </Route> */}

        <Route exact path='/Events' render={(props) => <Events {...props} />} />

        {/*  */}

        {/* /middlewareformentor/Job */}
        <Route exact path='/middlewareformentor/Job'>
          <MiddlewareJobForMentor />
        </Route>

        {/* // all courses */}
        <Route exact path='/login/allcourses'>
          <MiddlewareCourses />
        </Route>

        {/* /middlewarementor/Products */}

        <Route exact path='/middlewarementor/Products'>
          <MiddlewareProductForMentor />
        </Route>

        <Route exact path='/middleware/Event'>
          <MiddlewareEvent />
        </Route>

        {/* <Route
        exact
        path='/middleware/Event'
        render={(props) => <MiddlewareEvent {...props} />}
      ></Route> */}

        <Route exact path='/middleware/Job'>
          <MiddlewareJob />
        </Route>

        {/* <Route
        exact
        path='/middleware/Job'
        render={(props) => <MiddlewareJob {...props} />}
      ></Route> */}

        {/* /middleware/Mentor */}

        <Route exact path='/middleware/Mentor'>
          <MiddlewareMentor />
        </Route>

        {/* <Route
        exact
        path='/middleware/Mentor'
        render={(props) => <MiddlewareMentor {...props} />}
      ></Route> */}

        {/* /middleware/Organisation */}
        <Route exact path='/middleware/Organisation'>
          <MiddlewareOrganisation />
        </Route>

        {/* /middleware/Products */}
        <Route exact path='/middleware/Products'>
          <MiddlewareProducts />
        </Route>

        {/* /middleware/Talent */}
        <Route exact path='/middleware/Talent'>
          <MiddlewareTalent />
        </Route>

        <Route exact path='/Talent_Page'>
          <Talenthomepage />
        </Route>

        <Route exact path='/UserListing'>
          <UserListPage />
        </Route>

        <Route
          exact
          path='/individual_product/:id'
          render={(props) => <IndividualProduct {...props} />}
        ></Route>

        {/* /login/individual_organistion */}

        <Route
          exact
          path='/login/edit/user'
          render={(props) => <EdituserProfileviaAdmin {...props} />}
        ></Route>

        {/* /login/individual_Event */}

        <Route
          exact
          path='/individual_Event/:id'
          render={(props) => <IndividualEvents {...props} />}
        ></Route>

        <Route
          exact
          path='/login/individualproductOfFeaturedMentor'
          render={(props) => <IndividualFeaturedMentor {...props} />}
        ></Route>
        {/* /login/individualproductOfFeaturedMentor */}
        {/* /login/individual_Job */}

        <Route
          exact
          path='/login/individual_Job/:id'
          render={(props) => <IndividualJob {...props} />}
        ></Route>

        {/* Logined individual Jobs */}

        <Route
          exact
          path='/individual_Job/:id'
          render={(props) => <LoginedIndividualJob {...props} />}
        ></Route>

        {/* /login/individual_Mentor */}

        <Route
          exact
          path='/login/individual_Mentor/:id'
          render={(props) => <IndividualMentor {...props} />}
        ></Route>

        {/* /login/individual_Orgaisation */}

        <Route
          exact
          path='/login/individual_Orgaisation/:id'
          render={(props) => <IndividualOrganisation {...props} />}
        ></Route>

        {/* /login/individual_Organisation */}

        <Route
          exact
          path='/individual_Organisation/:id'
          render={(props) => <IndividualOrganisationbyid {...props} />}
        ></Route>

        {/* /individual_Mentor */}

        <Route
          exact
          path='/individual_Mentor/:id'
          render={(props) => <IndividualMentorbyid {...props} />}
        ></Route>

        {/* /individual_Jobs */}

        <Route
          exact
          path='/individual_Jobs/:id'
          render={(props) => <IndividualJobsbyid {...props} />}
        ></Route>

        {/* /login/applyforjob/UserProfile/${this.state.myallapplications[variable].JobId} */}
        <Route
          exact
          path='/login/applyjob/UserProfile/:id/:obj'
          render={(props) => <Applypages {...props} />}
        ></Route>

        {/* /login/applyforjob/UserProfile */}
        <Route
          exact
          path='/login/applyforjob/UserProfile/:id'
          render={(props) => <Applypage {...props} />}
        ></Route>

        {/* /individual_products */}
        <Route
          exact
          path='/individual_Products/:id'
          render={(props) => <IndividualProductbyid {...props} />}
        ></Route>

        {/* /login/individual_Products */}
        <Route
          exact
          path='/login/individual_Products/:id'
          render={(props) => <IndividualProducts {...props} />}
        ></Route>

        {/* /login/event/featureevent */}

        <Route
          exact
          path='/login/event/featureevent'
          render={(props) => <FeatureEvent {...props} />}
        ></Route>

        <Route exact path='/featureevent_list'>
          <EventListingPage />
        </Route>

        {/* /login/event/featurejob */}

        <Route
          exact
          path='/login/event/featurejob'
          render={(props) => <FeatureJob {...props} />}
        ></Route>

        <Route exact path='/featurejob_list'>
          <JobListingPage />
        </Route>

        <Route
          exact
          path='/login/event/featurementor'
          render={(props) => <FeatureMentor {...props} />}
        ></Route>

        <Route exact path='/featureMentor_list'>
          <MentorListingPage />
        </Route>

        <Route
          exact
          path='/login/event/featureorganisation'
          render={(props) => <FeatureOrganisation {...props} />}
        ></Route>

        {/* /login/edit/userFeaturedJob */}

        <Route
          exact
          path='/login/edit/userFeaturedJob'
          render={(props) => <EditFeatureJobviaAdmin {...props} />}
        ></Route>

        <Route
          exact
          path='/login/edit/userFeaturedMentor'
          render={(props) => <EditFeatureMentorviaAdmin {...props} />}
        ></Route>

        {/* /login/edit/userFeaturedEvent */}

        <Route
          exact
          path='/login/edit/userFeaturedEvent'
          render={(props) => <EditFeaturEventviaAdmin {...props} />}
        ></Route>

        {/* /login/edit/userFeaturedProduct */}

        <Route
          exact
          path='/login/edit/userFeaturedProduct'
          render={(props) => <EditFeaturProductviaAdmin {...props} />}
        ></Route>

        {/* /login/edit/userFeaturedOrganisation */}

        <Route
          exact
          path='/login/edit/userFeaturedOrganisation'
          render={(props) => <EditFeatureOrganisationviaAdmin {...props} />}
        ></Route>

        <Route exact path='/featureOrganisation_list'>
          <OrganisationListingPage />
        </Route>

        {/* /login/event/featureproducts */}
        <Route
          exact
          path='/login/event/featureproducts'
          render={(props) => <FeatureProducts {...props} />}
        ></Route>

        {/* /login/edit/userseeallproductedit */}
        <Route
          exact
          path='/login/edit/userseealljobedit'
          render={(props) => <SeeallJobedit {...props} />}
        ></Route>

        {/* /login/edit/userseealleventedit */}

        <Route
          exact
          path='/login/edit/userseealleventedit'
          render={(props) => <Seealleventedit {...props} />}
        ></Route>

        {/* /login/edit/userseeallmentoredit */}
        <Route
          exact
          path='/login/edit/userseeallmentoredit'
          render={(props) => <Seeallmentoredit {...props} />}
        ></Route>

        {/* /login/edit/userseeallOrganisationedit */}

        <Route
          exact
          path='/login/edit/userseeallOrganisationedit'
          render={(props) => <SeeallOrganisationedit {...props} />}
        ></Route>

        {/* /login/edit/userseeallProductedit */}

        <Route
          exact
          path='/login/edit/userseeallProductedit'
          render={(props) => <SeeallProductedit {...props} />}
        ></Route>

        <Route exact path='/featureProduct_list'>
          <ProductsListingPage />
        </Route>

        <Route exact path='/SeeAllEvent_list'>
          <SeeAllEventList />
        </Route>

        <Route exact path='/SeeAllJob_list'>
          <SeeAllJobList />
        </Route>

        <Route exact path='/SeeAllMentor_list'>
          <SeeAllMentorList />
        </Route>

        <Route exact path='/SeeAllOrganisation_list'>
          <SeeAllOrganiationList />
        </Route>

        <Route exact path='/SeeAllProducts_list'>
          <SeeAllProductsList />
        </Route>

        <Route exact path='/sAdmin_dashboard'>
          <AdminDashboard />
        </Route>

        <Route exact path='/SeeAllsliderimages'>
          <SliderImageFrontent />
        </Route>

        {/* SeeAllSliderImages */}
        <Route exact path='/SeeAllSliderImagess'>
          <SeeAllSliderImages />
        </Route>

        {/* job provider dashboard */}

        <Route
          exact
          path='/login/JobproviderDashboard/:id1/:id2'
          render={(props) => <SeeJobProviderDashboard {...props} />}
        ></Route>

        {/* Logined JobProvider */}
        <Route
          exact
          path='/JobproviderDashboard/:id1/:id2'
          render={(props) => <LoginedSeeJobProviderDashboard {...props} />}
        ></Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
