import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguageContext } from '../contexts/languages/Provider';

export default function Header() {

  const {
    toProjectsBtn,
    toHobbiesBtn,
    toVoluntaryBtn,
    languageBtn,
    homeBtn,
    changeLanguage
  } = useLanguageContext()

  const navigate = useNavigate();
  const handleClick = (route: string) => {
    navigate(`/${route}`)
  };

  const location = useLocation();

  return (
    <header>
      {location.pathname != '/' ?
        <button
          onClick={() => handleClick('')}>
          {homeBtn}
        </button> : null}
      {location.pathname != '/projects' ?
        <button
          onClick={() => handleClick('projects')}>
          {toProjectsBtn}
        </button> : null}
      {location.pathname != '/hobbies' ?
        <button
          onClick={() => handleClick('hobbies')}>
          {toHobbiesBtn}
        </button> : null}
      {location.pathname != '/voluntary' ?
        <button
          onClick={() => handleClick('voluntary')}>
          {toVoluntaryBtn}
        </button> : null}
      <button
        onClick={changeLanguage}>
        {languageBtn}
      </button>
    </header>
  )
};

