import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/brands.js';
import '../node_modules/@fortawesome/fontawesome-free/js/solid.js';
import '../node_modules/@fortawesome/fontawesome-free/js/fontawesome.js';

import App from './app';
import './views/style.css';

const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
const element = <BrowserRouter> <App /> </BrowserRouter> ;
root.render(element);