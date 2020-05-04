import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LoginButton from '../coreComponents/LoginButton'
function LoginComponent() {
  return (
    <Router>
      <Link to="/sign-up"> sign-up </Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/login">  login  </Link>
      <Switch>
        <Route path="/sign-up" />
        <Route path="/login" children={<LoginButton />} />
      </Switch>
    </Router>

  );
}
export default LoginComponent;