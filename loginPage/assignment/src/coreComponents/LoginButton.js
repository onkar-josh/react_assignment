import React from 'react';
import {Button} from 'react-bootstrap'
const LoginButton = () =>{
  const handleOnChange = (event) => {
      console.log("hello in login container");
  }
return(
  <>
    <Button variant="dark" onClick={(event) => {
        handleOnChange(event);
        }}>Login with Email</Button>{' '}
  </>
);
}
export default LoginButton;
