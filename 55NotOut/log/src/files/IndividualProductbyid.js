import React, { useContext, useState, useEffect } from 'react';
import { Tablename, Sdescription, Cardname } from './HomeCard';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Increment, Decrement, loggedin, emailid } from '../Actions/action';
import store from '../Store/store';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import FinalFooter from './FinalFooter';
import HomeResponsiveHeader from './HomeResponsiveHeader';
import ProductEditorshow from './ProductEditorshow';
import '../css_Files/individualProductBbyid.css';

const IndividualProduct = (props) => {
  const loggin = useSelector((state) => state.loggin);
  const myemaill = useSelector((state) => state.myemail);

  const dispatch = useDispatch();

  let history = useHistory();

  const [mydata, setMydata] = useState([]);
  const [nameofProduct, setNameofProduct] = useState('');
  const [description, setDescription] = useState('');
  const [myimg, setMyimg] = useState('');
  const [productOrigin, setProductOrigin] = useState('');
  const [descriptionNull, setDescriptionNull] = useState(false);
  const [descriptionCome, setDescriptionCome] = useState(false);

  // console.log(props.location.state.myval);

  useEffect(async () => {
    console.log(loggin.loggin + '    ' + myemaill.myemail);

    let storage = localStorage.getItem('state');
    console.log(storage);
    storage = JSON.parse(storage);
    let arr = window.location.href.split('/');
    console.log(arr);
    let id = arr[arr.length - 1];

    let { data } = await axios.get(`/api/users/getProduct/${id}`);

    setNameofProduct(data.user[0].Name_of_product);
    let decodedDesription = atob(data.user[0].Discription);
    setDescription(decodedDesription);
    console.log(decodedDesription);
    if (data.user[0].ImageName === 'undefined') {
      let myreq = require(`../productImageFolder/blank-profile-picture-973460_640.png`);
      setMyimg(myreq);
    } else {
      let myreq = require(`../productImageFolder/${data.user[0].ImageName}`);
      setMyimg(myreq);
    }
    console.log(data.user[0].Discription);
    if (data.user[0].Discription === null) {
      setDescriptionNull(true);
    }

    setProductOrigin(data.user[0].ProductOrigin);

    console.log(data);
    setMydata(data.user[0]);
    setDescriptionCome(true);
  }, []);

  return (
    <div>
      <HomeResponsiveHeader />
      <SeeAllHeader></SeeAllHeader>
      <div className='jobContainer displayflexJob'>
        <div className='singlejobpageContainer '>
          <div className='firstContainer'>
            <div className='jbdescrheCont'>
              <div className='jbtypeCont'>{nameofProduct}</div>
            </div>

            <div className='firstContainerjobdescpart2'>
              <div className='comptypo widthsndcomp fontsixe08rem fontweight'>
                {productOrigin}
              </div>
            </div>
            <div className='aboutCompCont'>
              <div className='aboutCom'>About Product</div>
              {descriptionNull ? (
                <div className='aboutCompans'>
                  {/* <ProductEditorshow value={description}></ProductEditorshow> */}
                </div>
              ) : (
                <div className='aboutCompans'>
                  {descriptionCome && (
                    <ProductEditorshow value={description}></ProductEditorshow>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className='secondContainer'>
            {/* image */}
            <div className='imgContainerjbs'>
              <div className='divofimg'>
                <img src={myimg.default} className='imagejobindi'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FinalFooter />
    </div>
  );
};

export default IndividualProduct;
