import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
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

        <Route exact path='/login/courses'>
          <Addcourse />
        </Route>

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

        <Route
          exact
          path='/UserProfile/:id/:encodingdata'
          render={(props) => <LogineUserProfile {...props} />}
        />

        <Route
          exact
          path='/login/editevent/:id'
          render={(props) => <EditEvent {...props} />}
        />

        <Route
          exact
          path='/login/editmentor/:id'
          render={(props) => <EditMentor {...props} />}
        />

        <Route
          exact
          path='/login/editorganisation/:id'
          render={(props) => <EditOrganisation {...props} />}
        />

        <Route
          exact
          path='/login/editcourses/:id'
          render={(props) => <EditCourses {...props} />}
        />

        <Route
          exact
          path='/login/editproduct/:id'
          render={(props) => <EditProduct {...props} />}
        />

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

        <Route exact path='/AddOrganisation'>
          <div className='product_add'>
            <LoginedOrganisation />
          </div>
        </Route>

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

        <Route exact path='/login/Mentor'>
          <div className='product_add'>
            <Mentor />
          </div>
        </Route>

        <Route exact path='/AddMentor'>
          <div className='product_add'>
            <LoginedMentor />
          </div>
        </Route>

        <Route exact path='/login/Events'>
          <div className='product_add'>
            <Events />
          </div>
        </Route>

        <Route exact path='/Events' render={(props) => <Events {...props} />} />

        <Route exact path='/middlewareformentor/Job'>
          <MiddlewareJobForMentor />
        </Route>

        <Route exact path='/login/allcourses'>
          <MiddlewareCourses />
        </Route>

        <Route exact path='/middlewarementor/Products'>
          <MiddlewareProductForMentor />
        </Route>

        <Route exact path='/middleware/Event'>
          <MiddlewareEvent />
        </Route>

        <Route exact path='/middleware/Job'>
          <MiddlewareJob />
        </Route>

        <Route exact path='/middleware/Mentor'>
          <MiddlewareMentor />
        </Route>

        <Route exact path='/middleware/Organisation'>
          <MiddlewareOrganisation />
        </Route>

        <Route exact path='/middleware/Products'>
          <MiddlewareProducts />
        </Route>

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

        <Route
          exact
          path='/login/edit/user'
          render={(props) => <EdituserProfileviaAdmin {...props} />}
        ></Route>

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

        <Route
          exact
          path='/login/individual_Job/:id'
          render={(props) => <IndividualJob {...props} />}
        ></Route>

        <Route
          exact
          path='/individual_Job/:id'
          render={(props) => <LoginedIndividualJob {...props} />}
        ></Route>

        <Route
          exact
          path='/login/individual_Mentor/:id'
          render={(props) => <IndividualMentor {...props} />}
        ></Route>

        <Route
          exact
          path='/login/individual_Orgaisation/:id'
          render={(props) => <IndividualOrganisation {...props} />}
        ></Route>

        <Route
          exact
          path='/individual_Organisation/:id'
          render={(props) => <IndividualOrganisationbyid {...props} />}
        ></Route>

        <Route
          exact
          path='/individual_Mentor/:id'
          render={(props) => <IndividualMentorbyid {...props} />}
        ></Route>

        <Route
          exact
          path='/individual_Jobs/:id'
          render={(props) => <IndividualJobsbyid {...props} />}
        ></Route>

        <Route
          exact
          path='/login/applyjob/UserProfile/:id/:obj'
          render={(props) => <Applypages {...props} />}
        ></Route>

        <Route
          exact
          path='/login/applyforjob/UserProfile/:id'
          render={(props) => <Applypage {...props} />}
        ></Route>

        <Route
          exact
          path='/individual_Products/:id'
          render={(props) => <IndividualProductbyid {...props} />}
        ></Route>

        <Route
          exact
          path='/login/individual_Products/:id'
          render={(props) => <IndividualProducts {...props} />}
        ></Route>

        <Route
          exact
          path='/login/event/featureevent'
          render={(props) => <FeatureEvent {...props} />}
        ></Route>

        <Route exact path='/featureevent_list'>
          <EventListingPage />
        </Route>

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

        <Route
          exact
          path='/login/edit/userFeaturedEvent'
          render={(props) => <EditFeaturEventviaAdmin {...props} />}
        ></Route>

        <Route
          exact
          path='/login/edit/userFeaturedProduct'
          render={(props) => <EditFeaturProductviaAdmin {...props} />}
        ></Route>

        <Route
          exact
          path='/login/edit/userFeaturedOrganisation'
          render={(props) => <EditFeatureOrganisationviaAdmin {...props} />}
        ></Route>

        <Route exact path='/featureOrganisation_list'>
          <OrganisationListingPage />
        </Route>

        <Route
          exact
          path='/login/event/featureproducts'
          render={(props) => <FeatureProducts {...props} />}
        ></Route>

        <Route
          exact
          path='/login/edit/userseealljobedit'
          render={(props) => <SeeallJobedit {...props} />}
        ></Route>

        <Route
          exact
          path='/login/edit/userseealleventedit'
          render={(props) => <Seealleventedit {...props} />}
        ></Route>

        <Route
          exact
          path='/login/edit/userseeallmentoredit'
          render={(props) => <Seeallmentoredit {...props} />}
        ></Route>

        <Route
          exact
          path='/login/edit/userseeallOrganisationedit'
          render={(props) => <SeeallOrganisationedit {...props} />}
        ></Route>

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

        <Route exact path='/SeeAllSliderImagess'>
          <SeeAllSliderImages />
        </Route>

        <Route
          exact
          path='/login/JobproviderDashboard/:id1/:id2'
          render={(props) => <SeeJobProviderDashboard {...props} />}
        ></Route>

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
