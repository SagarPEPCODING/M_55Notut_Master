import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import logo from '../publicImageFolder/PngItem_2383850.png';
import '../css_Files/model.css';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';
import NewHeader from './NewHeader';
import Footer from './Footer';
import Login from './Login';

const Background = styled.div`
  width: 100%;
  height: 100%;
  ${'' /* background: rgba(0, 0, 0, 0.8); */}
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModelWrapper = styled.div`
  width: 632px;
  height: 386px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 50%);
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: row;
  grid-template-column: 1fr 1fr;
  position: relative;
  z-index: 100;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 50%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModelContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  width: 100%;
  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }

  .divs {
    background: black;
    color: white;
    margin: 10px;
    height: 40px;
    border-radius: 5px;
    transition: width 2s, height 2s, transform 2s;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: calc(100% - 30%);
    justify-content: center;
  }

  .divs:hover {
    background: #141414;
  }
`;

const CloseModelButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  ${'' /* z-index: 100; */}
`;

// button

export const Model = ({ showModel, setShowModel }) => {
  const modalRef = useRef();

  const [optionClicked, setOptionClicked] = useState(false);
  const [senior, setSenior] = useState(false);
  const [serachSenior, setserachSenior] = useState(false);
  showModel = true;

  const closeModel = (e) => {
    if (modalRef.current === e.target) {
      setShowModel(false);
    }
  };

  const SeniorProfessional = () => {
    setSenior(true);
    setOptionClicked(true);
  };

  const searchSeniorProfessional = () => {
    setserachSenior(true);
    setOptionClicked(true);
  };

  const first = 'Senior Professional';
  const second = 'Search Senior Professional';

  const Keypress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModel) {
        setShowModel(false);
      }
    },
    [setShowModel, showModel]
  );

  useEffect(() => {
    document.addEventListener('keydown', Keypress);
    return () => document.addEventListener('keydown', Keypress);
  }, [Keypress]);

  return (
    <>
      <div className='modelContainer'>
        <NewHeader></NewHeader>
        <div className='signuppage'>
          <div className='modelsignup'>
            {showModel ? (
              <Background ref={modalRef}>
                <ModelWrapper showModel={showModel}>
                  {/* <ModalImg src={logo} alt='camera' /> */}
                  <ModelContent>
                    <Login></Login>
                  </ModelContent>
                </ModelWrapper>
              </Background>
            ) : null}
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Model;

// {!optionClicked ? (
//   <>
//     <h3>Are You Ready?</h3>
//     <p>Get Exclusive Excess to our next Launch</p>
//     <div className='divs' onClick={SeniorProfessional}>
//       Are You A Senior Professional ?
//     </div>
//     <div className='divs' onClick={searchSeniorProfessional}>
//       Looking For A Senior Professional ?
//     </div>
//   </>
// ) : (
//   <SignUp
//     senior={senior}
//     serachSenior={serachSenior}
//   />
// )}
// {/* <Link to='/signup'>
//   <button>Sign In</button>
// </Link> */}
// <CloseModelButton
//   aria-label='Close Modal'
//   onClick={() => {
//     setShowModel((prev) => !prev);
//   }}
// ></CloseModelButton>
