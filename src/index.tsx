import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/others/reset.css'

import './styles/header/header.css';
import './styles/header/navigation_header.css';
import './styles/header/language_btn.css';
import './styles/header/language_div.css';
import './styles/header/current_route.css';

import './styles/contact_me/contact_me.css';
import './styles/contact_me/email.css';
import './styles/contact_me/links.css';
import './styles/contact_me/input_area.css';
import './styles/contact_me/sendBtn.css';
import './styles/contact_me/contact_me_txt.css';
import './styles/contact_me/icons.css';
import './styles/contact_me/name_input_area.css';
import './styles/contact_me/email_input_area.css';
import './styles/contact_me/txt_input_area.css';
import './styles/contact_me/input_div.css';

import './styles//hobbies/hobbies.css'
import './styles/others/manutencaoDiv.css';

import './styles/home/home.css';
import './styles/home/main.css';
import './styles/home/main_text.css';
import './styles/home/asideImg.css';
import './styles/home/image.css';

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
