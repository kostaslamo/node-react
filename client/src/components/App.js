import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Page404 from './Page404';
import Home from './Home';

import 'semantic-ui-css/semantic.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <Page404></Page404>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
