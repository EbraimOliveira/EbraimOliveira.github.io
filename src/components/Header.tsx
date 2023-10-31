import { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguageContext } from '../contexts/languages/Provider';

import '../styles/header/header.css';
import '../styles/header/navigation_header.css';
import '../styles/header/language_btn.css';
import '../styles/header/language_div.css';

const PORTUGUESE_IMAGE_URL = './../../assets/brasil.jpg';
const ENGLISH_IMAGE_URL = './../../assets/usa.png';

export default function Header() {
  const {
    toProjectsBtn,
    toHobbiesBtn,
    toVoluntaryBtn,
    languageBtn,
    toHomeBtn,
    currentLanguage,
    changeLanguage
  } = useLanguageContext();

  const navigate = useNavigate();
  const location = useLocation();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const renderNavButton = (route: string, label: string) => {
    const [iconUrl, setIconUrl] = useState(ENGLISH_IMAGE_URL)

    useEffect(() => {
      const imgUrl = currentLanguage === 'english' ? ENGLISH_IMAGE_URL : PORTUGUESE_IMAGE_URL;
      setIconUrl(imgUrl)
      if (buttonRef.current) {
        buttonRef.current.style.backgroundImage = `url(${iconUrl})`
      }
    }, [currentLanguage]);

    return (
      <button
        onClick={() => handleClick(route)}
        type="button" className="btn btn-secondary"
      >
        {label}
      </button>
    );
  };

  const handleClick = (route: string) => {
    navigate(`/${route}`);
  };

  const currencyRoute = (route: string) => {
    const routes: { [key: string]: string } = {
      '/': toHomeBtn,
      '/projects': toProjectsBtn,
      '/hobbies': toHobbiesBtn,
      '/voluntary': toVoluntaryBtn
    }
    return routes[route]
  };

  return (
    <header className='header'>
      <h1 className='currency_route'>{currencyRoute(location.pathname)}</h1>
      <nav className='navigation_header'>
        {location.pathname !== '/' && renderNavButton('', toHomeBtn)}
        {location.pathname !== '/projects' && renderNavButton('projects', toProjectsBtn)}
        {location.pathname !== '/hobbies' && renderNavButton('hobbies', toHobbiesBtn)}
        {location.pathname !== '/voluntary' && renderNavButton('voluntary', toVoluntaryBtn)}
      </nav>
      <div className='language_div'>
        <label style={{ whiteSpace: 'break-spaces' }} htmlFor="language_btn_id">{languageBtn}  </label>
        <button className='language_btn' onClick={changeLanguage} id='language_btn_id' ref={buttonRef}></button>
      </div>
    </header>
  );
};
