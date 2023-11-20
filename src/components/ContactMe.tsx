import { useLanguageContext } from '../contexts/languages/Provider';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactMe() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSending, setIsSending] = useState(false);


  const {
    nameTxt,
    messageTxt,
    messageBtn,
    textArea,
    emailSent,
    sending } = useLanguageContext()

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);

    const templateParams = {
      from_name: name,
      email,
      message
    }

    emailjs.send('service_0bgq0ji', 'template_v1b0rmc', templateParams, 'Z2449VMuaGieTJYsF').then(() => {
      setName('')
      setEmail('')
      setMessage('')
      setIsSending(false);
      alert(emailSent)
    }, (err) => {
      console.log('erro', err);
      setIsSending(false)
    })
  }

  return (
    <div id="contact_me">

      <form className="email" onSubmit={sendEmail}>
        <h4 className='contact_me_txt'>{messageTxt}</h4>
        <div className='input_div'>
          <input
            placeholder={nameTxt}
            className='input_area name_input_area'
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            placeholder='email'
            className='input_area email_input_area'
            type='email'
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <textarea
          placeholder={textArea}
          className='input_area txt_input_area'
          required
          maxLength={666}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <button
          type='submit'
          className='btn btn-light sendBtn'>
          {isSending ? sending : messageBtn}
        </button>
      </form>

      <div className='links'>
        <a href="https://www.linkedin.com/in/ebraimoliveira2236/"
          target='_blank'
          className='icons'>
          <i className="bi-linkedin icon1"></i>
        </a>
        <a href="https://github.com/ebraimoliveira"
          target='_blank'
          className='icons'>
          <i className="bi-github icon2"></i>
        </a>
        <a href="https://www.instagram.com/ebraim_oliveira"
          target='_blank'
          className='icons'>
          <i className="bi-instagram icon3"></i>
        </a>
        <a href="https://wa.me/5541995152236"
          target='_blank'
          className='icons'>
          <i className="bi-whatsapp icon4"></i>
        </a>
      </div>

    </div>
  )
};