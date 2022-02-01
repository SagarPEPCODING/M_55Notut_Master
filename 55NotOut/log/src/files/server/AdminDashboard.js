import React, { useEffect, useState } from 'react';
import '../css_Files/admindashboard.css';
import AdminJobListingPage from './AdminJobListingPage';
import AdminMentorListingPage from './AdminMentorListingpage';
import AdminOrganisationListingPage from './AdminOrganisationListingPage';
import AdminEventListingPage from './AdminEventListingPage';
import AdminProductListingPage from './AdminProductListingPage';
import AdminSeeAllJobList from './AdminSeeAllJobList';
import AdminSeeAllMentor from './AdminSeeAllMentor';
import AdminSeeAllEventList from './AdminSeeAllEventList';
import AdminSeeAllOrganisationList from './AdminSeeAllOrganisationList';
import AdminSeeAllProducts from './AdminSeeAllProducts';
import AdminuserListingPage from './AdminuserListingPage';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import Footer from './Footer';
import HomeResponsiveHeader from './HomeResponsiveHeader';

function AdminDashboard() {
  const [userlist, setUserlist] = useState(false);
  const [featurejoblist, setFeaturejoblist] = useState(false);
  const [featurementorlist, setFeaturementorlist] = useState(false);
  const [featureOrganisationlist, setFeatureOrganisationlist] = useState(false);
  const [featureEventList, setFeatureEventList] = useState(false);
  const [featureProductList, setFeatureProductList] = useState(false);
  const [seealljobs, setSeealljobs] = useState(false);
  const [seeallmentors, setSeeallmentors] = useState(false);
  const [seeallevents, setSeeallevents] = useState(false);
  const [seeallorganistions, setSeeallorganisations] = useState(false);
  const [seeallproducts, setSeeallproducts] = useState(false);

  const userlisting = () => {
    console.log(userlist);
    setFeaturejoblist(false);
    setFeaturementorlist(false);
    setFeatureOrganisationlist(false);
    setFeatureEventList(false);
    setFeatureProductList(false);
    setSeealljobs(false);
    setSeeallmentors(false);
    setSeeallevents(false);
    setSeeallorganisations(false);
    setSeeallproducts(false);
    setUserlist(!userlist);
  };

  const featurejoblistf = () => {
    console.log(featurejoblist);
    setUserlist(false);
    setFeaturementorlist(false);
    setFeatureOrganisationlist(false);
    setFeatureEventList(false);
    setFeatureProductList(false);
    setSeealljobs(false);
    setSeeallmentors(false);
    setSeeallevents(false);
    setSeeallorganisations(false);
    setSeeallproducts(false);
    setFeaturejoblist(!featurejoblist);
  };

  const featurementorlistf = () => {
    console.log(featurementorlist);
    setFeaturejoblist(false);
    setUserlist(false);
    setFeatureOrganisationlist(false);
    setFeatureEventList(false);
    setFeatureProductList(false);
    setSeealljobs(false);
    setSeeallmentors(false);
    setSeeallevents(false);
    setSeeallorganisations(false);
    setSeeallproducts(false);
    setFeaturementorlist(!featurementorlist);
  };

  const featureorganisationlist = () => {
    console.log(featureOrganisationlist);
    setFeaturejoblist(false);
    setFeaturementorlist(false);
    setUserlist(false);
    setFeatureEventList(false);
    setFeatureProductList(false);
    setSeealljobs(false);
    setSeeallmentors(false);
    setSeeallevents(false);
    setSeeallorganisations(false);
    setSeeallproducts(false);
    setFeatureOrganisationlist(!featureOrganisationlist);
  };

  const featureEventListingPage = () => {
    console.log(featureEventList);
    setFeaturejoblist(false);
    setFeaturementorlist(false);
    setFeatureOrganisationlist(false);
    setUserlist(false);
    setFeatureProductList(false);
    setSeealljobs(false);
    setSeeallmentors(false);
    setSeeallevents(false);
    setSeeallorganisations(false);
    setSeeallproducts(false);
    setFeatureEventList(!featureEventList);
  };

  const featureProductlisting = () => {
    console.log(featureProductList);
    setFeaturejoblist(false);
    setFeaturementorlist(false);
    setFeatureOrganisationlist(false);
    setFeatureEventList(false);
    setUserlist(false);
    setSeealljobs(false);
    setSeeallmentors(false);
    setSeeallevents(false);
    setSeeallorganisations(false);
    setSeeallproducts(false);
    setFeatureProductList(!featureProductList);
  };

  const seeallJobsList = () => {
    console.log(seealljobs);
    setFeaturejoblist(false);
    setFeaturementorlist(false);
    setFeatureOrganisationlist(false);
    setFeatureEventList(false);
    setFeatureProductList(false);
    setUserlist(false);
    setSeeallmentors(false);
    setSeeallevents(false);
    setSeeallorganisations(false);
    setSeeallproducts(false);
    setSeealljobs(!seealljobs);
  };

  const seeallMentorlist = () => {
    console.log(seeallmentors);
    setFeaturejoblist(false);
    setFeaturementorlist(false);
    setFeatureOrganisationlist(false);
    setFeatureEventList(false);
    setFeatureProductList(false);
    setSeealljobs(false);
    setUserlist(false);
    setSeeallevents(false);
    setSeeallorganisations(false);
    setSeeallproducts(false);
    setSeeallmentors(!seeallmentors);
  };

  const seealleventlist = () => {
    console.log(seeallevents);
    setFeaturejoblist(false);
    setFeaturementorlist(false);
    setFeatureOrganisationlist(false);
    setFeatureEventList(false);
    setFeatureProductList(false);
    setSeealljobs(false);
    setSeeallmentors(false);
    setUserlist(false);
    setSeeallorganisations(false);
    setSeeallproducts(false);
    setSeeallevents(!seeallevents);
  };

  const seeallorganisationlist = () => {
    console.log(seeallorganistions);
    setFeaturejoblist(false);
    setFeaturementorlist(false);
    setFeatureOrganisationlist(false);
    setFeatureEventList(false);
    setFeatureProductList(false);
    setSeealljobs(false);
    setSeeallmentors(false);
    setSeeallevents(false);
    setUserlist(false);
    setSeeallproducts(false);
    setSeeallorganisations(!seeallorganistions);
  };

  const seeallproductslist = () => {
    console.log(seeallproducts);
    setFeaturejoblist(false);
    setFeaturementorlist(false);
    setFeatureOrganisationlist(false);
    setFeatureEventList(false);
    setFeatureProductList(false);
    setSeealljobs(false);
    setSeeallmentors(false);
    setSeeallevents(false);
    setSeeallorganisations(false);
    setUserlist(false);
    setSeeallproducts(!seeallproducts);
  };

  return (
    <>
      <HomeResponsiveHeader></HomeResponsiveHeader>
      <SeeAllHeader></SeeAllHeader>
      <div className='admindashboardcontainer'>
        <div className='cardlistingcontainer'>
          <div className='featurelisting'>Profile</div>
          <div className='featurelisting' onClick={userlisting}>
            UserListing
          </div>
          <div className='featurelisting' onClick={featurejoblistf}>
            FeatureJobListing
          </div>
          <div className='featurelisting' onClick={featurementorlistf}>
            FeatureMentorListing
          </div>
          <div className='featurelisting' onClick={featureorganisationlist}>
            FeatureOrganisationListing
          </div>
          <div className='featurelisting' onClick={featureEventListingPage}>
            FeatureEventListing
          </div>
          <div className='featurelisting' onClick={featureProductlisting}>
            FeatureProductsListing
          </div>
          <div className='featurelisting' onClick={seeallJobsList}>
            SeeallJobListing
          </div>
          <div className='featurelisting' onClick={seeallMentorlist}>
            SeeallMentorListing
          </div>
          <div className='featurelisting' onClick={seealleventlist}>
            SeeallEventListing
          </div>
          <div className='featurelisting' onClick={seeallorganisationlist}>
            SeeallOrganisationListing
          </div>
          <div className='featurelisting' onClick={seeallproductslist}>
            SeeallProductsListing
          </div>
          <div className='featurelisting'>FeaturedJobList</div>
          <div className='featurelisting'>FeaturedOrganisationList</div>
          <div className='featurelisting'>FeaturedEventList</div>
          <div className='featurelisting'>FeaturedOrganisationList</div>
          <div className='featurelisting'>FeaturedMentorList</div>
        </div>
        <div className='showingdata'>
          {userlist && <AdminuserListingPage></AdminuserListingPage>}
          {featurejoblist && <AdminJobListingPage></AdminJobListingPage>}
          {featurementorlist && (
            <AdminMentorListingPage></AdminMentorListingPage>
          )}
          {featureOrganisationlist && (
            <AdminOrganisationListingPage></AdminOrganisationListingPage>
          )}
          {featureEventList && <AdminEventListingPage></AdminEventListingPage>}
          {featureProductList && (
            <AdminProductListingPage></AdminProductListingPage>
          )}
          {seealljobs && <AdminSeeAllJobList></AdminSeeAllJobList>}
          {seeallmentors && <AdminSeeAllMentor></AdminSeeAllMentor>}
          {seeallevents && <AdminSeeAllEventList></AdminSeeAllEventList>}
          {seeallorganistions && (
            <AdminSeeAllOrganisationList></AdminSeeAllOrganisationList>
          )}
          {seeallproducts && <AdminSeeAllProducts></AdminSeeAllProducts>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminDashboard;
