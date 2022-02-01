import React, { useState } from 'react';
import styled from 'styled-components';
import { Model } from './Model';
import { GlobalStyle } from '../googleStyles';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-raduis: 4px;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

function PopUp() {
  const [showModel, setShowModel] = useState(false);
  const openModel = () => {
    setShowModel((prev) => !prev);
  };

  return (
    <>
      <Container>
        <Button onClick={openModel}>Please Click For SignUp</Button>
        <Model showModel={showModel} setShowModel={setShowModel} />
        <GlobalStyle />
      </Container>
    </>
  );
}

export default PopUp;
