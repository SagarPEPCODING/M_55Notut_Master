import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import Footer from './Footer';
import HomeResponsiveHeader from './HomeResponsiveHeader';
import { Tablename, Sdescription, Cardname } from './HomeCard';
// import { Sdecription } from './HomeCard';
// import { Cardname } from './HomeCard';
// import '';

const IndividualProducts = (props) => {
  const [mydata, setMydata] = useState([]);
  // console.log(props.location.state.myval);
  useEffect(async () => {
    console.log(window.location.href);
    console.log(typeof window.location.href);
    let arr = window.location.href.split('/');
    console.log(arr);
    let id = arr[arr.length - 1];
    let { data } = await axios.get(`/api/users/getProduct/${id}`);
    setMydata(data.user[0]);
  }, []);
  return (
    <>
      <HomeResponsiveHeader />
      <SeeAllHeader></SeeAllHeader>
      <h2>Full Information About Products...</h2>
      <div>{mydata.Name_of_product}</div>
      {/* <img src={myreq.default} /> */}
      <div>{mydata.Discription}</div>
      <h1>{mydata.product_name}</h1>
      <h1>{mydata.description_of_product}</h1>
      <Footer />
    </>
  );
};

export default IndividualProducts;
