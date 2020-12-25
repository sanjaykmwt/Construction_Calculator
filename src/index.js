/* Copyright (c) 2019 Dinesh Visweswaraiah.  All rights reserved.  This code shall in no way be used by any person for any reason. */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import {createHashHistory} from 'history';

const history= createHashHistory({ queryKey: false});
ReactDOM.render(
    <Router history={history} >
      <App />
    </Router>,
  document.getElementById('root')
);
