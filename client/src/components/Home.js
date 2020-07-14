import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import axios from 'axios';

import './css/Home.css';

import { apiUrl } from '../config';
const Home = () => {
  const [apiStatus, setApiStatus] = useState('');

  return (
    <div className="Home">
      <Button
        onClick={() => {
          axios
            .get(`${apiUrl}/checkHealth`)
            .then((res) => {
              setApiStatus(res.data.msg);
            })
            .catch((err) => {
              setApiStatus(err.message);
            });
        }}
      >
        API Health
      </Button>
      <div style={{ display: 'block' }}>{apiStatus}</div>
    </div>
  );
};

export default Home;
