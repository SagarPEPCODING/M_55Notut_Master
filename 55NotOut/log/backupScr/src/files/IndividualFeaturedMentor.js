import React, { useContext } from 'react';
import { Tablename, Sdescription, Cardname } from './HomeCard';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import Footer from './Footer';
import HomeResponsiveHeader from './HomeResponsiveHeader';

const IndividualFeaturedMentor = (props) => {
  console.log(props.location.state);
  return (
    <>
      <HomeResponsiveHeader />
      <SeeAllHeader></SeeAllHeader>
      <h2>Full Information About Featured Mentor...</h2>
      <div>{props.location.state.Job_id}</div>
      {/* <img src={myreq.default} /> */}
      <div>{props.location.state.First_Name}</div>
      <h1>{props.location.state.Last_Name}</h1>
      <h1>{props.location.state.Mentor_profile}</h1>
      <Footer />
    </>
  );
};

export default IndividualFeaturedMentor;
