import React from 'react';

import Slogan from './HomePageSlogan';
import Peerly from './PeerlyLogo';
import LoginRoute from './LoginRoutes';
import { Row, Container } from "react-bootstrap";
const HomePageData = () =>{
  return(
    <Container style={{ padding: '0px', height: '589px' }} >
      <Row className="justify-content-md-center mt-5">
        <Peerly/>
      </Row>
      <Row className="justify-content-md-center mt-5">
        <div>
        <LoginRoute/>
        </div>
      </Row>
      <Row className="justify-content-md-center mt-5">
        <Slogan/>
      </Row>
    </Container>
  );
}

export default HomePageData;
