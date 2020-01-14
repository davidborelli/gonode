import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../Pages/Main';
import SignUp from '../Pages/Auth/SignUp';
import SignIn from '../Pages/Auth/SignIn';

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" exact component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
