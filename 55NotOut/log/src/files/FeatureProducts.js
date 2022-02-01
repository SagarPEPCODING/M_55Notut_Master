import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import '../css_Files/featurecss.css';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import Footer from './Footer';
import HomeResponsiveHeader from './HomeResponsiveHeader';

function FeatureJob(props) {
  const [inputvalue, setInputvalue] = useState(0);

  let history = useHistory();

  let {
    name,
    description,
    FeatureEvent,
    Image_Name,
    productOrigin,
  } = props.location.state;

  const Addsubscription = async (event) => {
    const Jobid = uuidv4();
    console.log(name + ' ' + description);
    const params = JSON.stringify({
      Job_id: Jobid,
      name: name,
      description: description,
      FeatureEvent: FeatureEvent,
      Payment: inputvalue,
      productOrigin: productOrigin,
    });
    console.log(name);
    console.log(description);
    console.log(FeatureEvent);
    console.log(Image_Name);
    console.log(productOrigin);

    let encodeddescription = btoa(description);

    console.log(params);

    let { data } = await axios.post(
      `/api/users/addproduct/${Jobid}/${name}/${encodeddescription}/${FeatureEvent}/${inputvalue}/${Image_Name}/${productOrigin}`
    );

    console.log('Your Subscription Is Added');

    history.push({
      pathname: '/login/addProduct',
    });
  };

  const Inputtext = (event) => {
    console.log(event.target.value);
    setInputvalue(event.target.value);
  };

  return (
    <>
      <HomeResponsiveHeader />
      <SeeAllHeader></SeeAllHeader>
      <div className='featureEvent'>
        <div className='cardpayment'>
          <label className='label'>Enter Amount :- </label>
          <input type='text' onChange={Inputtext}></input>
          <Button
            variant='contained'
            color='secondary'
            type='submit'
            className='flex_row'
            onClick={Addsubscription}
          >
            Payment
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FeatureJob;
