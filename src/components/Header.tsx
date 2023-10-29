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
      <button onClick={() => handleClick(route)}>{label}</button>
    );
  };

  const handleClick = (route: string) => {
    navigate(`/${route}`);
  };

  return (
    <header id='header'>
      <div>
        <h4>Ebraim Oliveira</h4>
      </div>
      <div>
        {location.pathname !== '/' && renderNavButton('', toHomeBtn)}
        {location.pathname !== '/projects' && renderNavButton('projects', toProjectsBtn)}
        {location.pathname !== '/hobbies' && renderNavButton('hobbies', toHobbiesBtn)}
        {location.pathname !== '/voluntary' && renderNavButton('voluntary', toVoluntaryBtn)}
      </div>
      <div>
        <button onClick={changeLanguage}>{languageBtn}</button>
      </div>
    </header>
  );
}
