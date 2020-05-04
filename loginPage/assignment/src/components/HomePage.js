import React from 'react';
import Slides from './HomePageFirstComp';
import Image from './HomePageImage';
import Data from './HomePageData';
import { Row, Col, Container } from "react-bootstrap";
const HomePage = () =>{
  return(
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }} >
        <Row>
          <Col md={4} style={{ padding: '0px', height: '275px' }} ><Slides/></Col>
          <Col md={4} style={{ padding: '0px', height: '275px' }}><Image/></Col>
          <Col md={4} className="p-3 mb-2 bg-info text-white"><Data/></Col>
        </Row>
    </Container>   
  );
}

export default HomePage;