import React from 'react';
import Slides from './HomePageSlides';

import { Row } from "react-bootstrap";
const HomePageFirstComp = () =>{
    return(
      <>
          <Row style={{ padding: '0px'}} className="justify-content-md-center p-3 mb-2 bg-dark text-white">
           How It Works
          </Row>
          <Row style={{ padding: '0px'}}>
          <Slides/>
          </Row>
      </>
    );
  }
  
  export default HomePageFirstComp;