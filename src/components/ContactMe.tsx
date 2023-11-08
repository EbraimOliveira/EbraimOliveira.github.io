import { useLanguageContext } from '../contexts/languages/Provider';

import './../styles/contact_me/contact_me.css';
import './../styles/contact_me/email.css';
import './../styles/contact_me/links.css';
import './../styles/contact_me/input_area.css';

export default function ContactMe() {

  const { name, messageMe, msgBtn } = useLanguageContext()

  // public key: Z2449VMuaGieTJYsF
  // template_v1b0rmc
  // service_0bgq0ji

  return (
    <div id="contact_me">
      <form className="email" action="">
        <h4>{messageMe}</h4>
        <input placeholder={name} className='input_area' type="text" required />
        <input placeholder='email' className='input_area' type='email' name="" id="" required />
        <textarea className='input_area' required></textarea>
        <button>{msgBtn}
        </button>
      </form>
      <div className='links'>
        <p>links</p>
      </div>
    </div>
  )
};