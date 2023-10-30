import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguageContext } from '../contexts/languages/Provider';

import '../styles/header.css';

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
        type="button" className="btn btn-dark"
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
      <button onClick={changeLanguage}>{languageBtn}</button>
      {/* <input type="checkbox" onChange={changeLanguage} /> */}
    </header>
  );
}
