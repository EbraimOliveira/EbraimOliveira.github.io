import { useLanguageContext } from '../contexts/languages/Provider';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

import './../styles/contact_me/contact_me.css';
import './../styles/contact_me/email.css';
import './../styles/contact_me/links.css';
import './../styles/contact_me/input_area.css';
import './../styles/contact_me/sendBtn.css';
import './../styles/contact_me/contact_me_txt.css';
import './../styles/contact_me/icons.css';

export default function ContactMe() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const {
    nameTxt,
    messageTxt,
    messageBtn,
    textArea } = useLanguageContext()

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      email,
      message
    }

    emailjs.send('service_0bgq0ji', 'template_v1b0rmc', templateParams, 'Z2449VMuaGieTJYsF').then((response) => {
      console.log('enviado', response.status, response.text);
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log('erro', err);
    })
  }

  return (
    <div id="contact_me">

      <form className="email" onSubmit={sendEmail}>
        <h4 className='contact_me_txt'>{messageTxt}</h4>
        <input
          placeholder={nameTxt}
          className='input_area'
          type="text"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          placeholder='email'
          className='input_area'
          type='email'
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          placeholder={textArea}
          className='input_area'
          required
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <button
          type='submit'
          className='btn btn-light sendBtn'>
          {messageBtn}
        </button>
      </form>

      <div className='links'>
        <a href="https://www.linkedin.com/in/ebraimoliveira2236/"
          className='icons'>
          <i className="bi-linkedin icons"></i>
        </a>
        <a href="https://github.com/ebraimoliveira"
          className='icons'>
          <i className="bi-github icons2"></i>
        </a>
        <a href="www.instagram.com/ebraim_oliveira"
          className='icons'>
          <i className="bi-instagram icons3"></i>
        </a>
        <a href=""
          className='icons'>
          <i className="bi-whatsapp icons4"></i>
        </a>
      </div>

    </div>
  )
};