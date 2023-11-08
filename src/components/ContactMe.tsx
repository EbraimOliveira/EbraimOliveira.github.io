import { useLanguageContext } from '../contexts/languages/Provider';
import emailjs from '@emailjs/browser';

import './../styles/contact_me/contact_me.css';
import './../styles/contact_me/email.css';
import './../styles/contact_me/links.css';
import './../styles/contact_me/input_area.css';
import { useState } from 'react';

export default function ContactMe() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const {
    nameTxt,
    messageTxt,
    messageBtn,
    textArea } = useLanguageContext()

  // public key: Z2449VMuaGieTJYsF
  // template_v1b0rmc
  // service_0bgq0ji

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
        <h4>{messageTxt}</h4>
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
          className='btn btn-light'>
          {messageBtn}
        </button>
      </form>

      <div className='links'>
        <p>links</p>
      </div>

    </div>
  )
};