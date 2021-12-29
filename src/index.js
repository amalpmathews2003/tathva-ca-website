import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import { Hero } from './Components/Hero';

import {AppWrapper} from './Components/userContext'
ReactDOM.render(
<React.StrictMode>
  <AppWrapper><App /></AppWrapper>
  </React.StrictMode>
  
,
  document.getElementById('root')
);

reportWebVitals();
