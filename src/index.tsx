import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/others/reset.css'
import './styles/header/header.css';
import './styles/contact_me/contact_me.css';
import './styles/home/home.css';

import './styles//hobbies/hobbies.css'
import './styles/others/manutencaoDiv.css';


import './styles/projects/projects.css'
import './styles/others/manutencaoDiv.css';

import './styles/voluntary/voluntary.css';


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
