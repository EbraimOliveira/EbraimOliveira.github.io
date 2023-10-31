import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguageContext } from '../contexts/languages/Provider';

import '../styles/header/header.css';
import '../styles/header/navigation_header.css';
import '../styles/header/language_btn.css';
import '../styles/header/language_div.css';

export default function Header() {
  const {
    toProjectsBtn,
    toHobbiesBtn,
    toVoluntaryBtn,
    languageBtn,
    toHomeBtn,
    changeLanguage
  } = useLanguageContext();

  const navigate = useNavigate();
  const location = useLocation();

  const renderNavButton = (route: string, label: string) => {
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
        <label style={{ whiteSpace: 'break-spaces' }} htmlFor="language_btn">{languageBtn}</label>
        <button className='language_btn' onClick={changeLanguage} id='language_btn'></button>
      </div>

      {/* <div className="form-check form-switch">
        <input
          onChange={changeLanguage} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{languageBtn}</label>
      </div> */}
    </header>
  );
};
