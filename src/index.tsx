import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/others/reset.css';
import './styles/header/header.css';
import './styles/contact_me/contact_me.css';
import './styles/home/home.css';
import './styles/projects/projects.css'
import './styles/about_me/about_me.css'
import './styles/others/building_div.css';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
