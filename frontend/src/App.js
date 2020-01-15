import React from 'react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import Routes from './routes';
import store from '~/store';

import GlobalStyle from './styles/global';

export default function App() {
  return (
    <Provider store={store}>
      <>
        <Routes />
        <ReduxToastr timeOut={3000} closeOnToastrClick progressBar />
        <GlobalStyle />
      </>
    </Provider>
  );
}
