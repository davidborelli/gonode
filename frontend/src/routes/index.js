import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import history from './history';

import Private from './private';
import Guest from './guest';

import Main from '../Pages/Main';
import SignUp from '../Pages/Auth/SignUp';
import SignIn from '../Pages/Auth/SignIn';

export default function routes() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Guest path="/signin" component={SignIn} />
        <Guest path="/signup" component={SignUp} />
        <Private path="/" exact component={Main} />
      </Switch>
    </ConnectedRouter>
  );
}
