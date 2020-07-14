import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import axios from 'axios';

import { apiUrl } from '../config';
import Page404 from './Page404';

import './css/App.css';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Button
              onClick={() => {
                axios.get(`${apiUrl}/checkHealth`).then((res) => {
                  console.log(res.data);
                });
              }}
            >
              API Health
            </Button>
          </div>
        </Route>
        <Route path="*">
          <Page404></Page404>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
