import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import ReceiptPage from './pages/ReceiptPage';


const routes = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/receipt" component={ReceiptPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default routes;
