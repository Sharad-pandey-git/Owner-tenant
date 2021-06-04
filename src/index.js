import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import M_Home from "./pages/M_home"
import { isMobile } from "react-device-detect"

ReactDOM.render(
  <React.StrictMode>
    {isMobile?
      <M_Home />
      :
      <Home />
    }
  </React.StrictMode>,
  document.getElementById('root')
);

