import React  from 'react';
import { Row, Container, Col, Button } from "react-bootstrap";

//import Button from '../coreComponents/ButtonType'
function LoginComponent() {
  return(
    <>
      <Row className="justify-content-md-center">
        <Col>
        <Button variant="link">signup</Button>
        </Col>
        <Col>
        <Button variant="link">Login</Button>
        </Col>
      </Row>
    </>
  );
}
export default LoginComponent;
