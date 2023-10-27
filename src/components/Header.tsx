import { useNavigate } from 'react-router-dom';
import { useLanguageContext } from '../contexts/languages/Provider';

export default function Header() {

  const {
    toProjectsBtn,
    toHobbiesBtn,
    toVoluntaryBtn,
    languageBtn,
    changeLanguage
  } = useLanguageContext()

  const navigate = useNavigate();
  const handleClick = (route: string) => {
    navigate(`/${route}`)
  };

  return (
    <header>
      <button
        onClick={() => handleClick('projects')}>
        {toProjectsBtn}
      </button>
      <button
        onClick={() => handleClick('hobbies')}>
        {toHobbiesBtn}
      </button>
      <button
        onClick={() => handleClick('voluntary')}>
        {toVoluntaryBtn}
      </button>
      <button
        onClick={changeLanguage}>
        {languageBtn}
      </button>
    </header>
  )
};

