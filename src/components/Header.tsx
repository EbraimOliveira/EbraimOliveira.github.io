import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguageContext } from '../contexts/languages/Provider';

import RenderNavBtn from './RenderNavBtn';

import '../styles/header/header.css';
import '../styles/header/navigation_header.css';
import '../styles/header/language_btn.css';
import '../styles/header/language_div.css';

const PORTUGUESE_IMAGE_URL = './../../assets/brasil.jpg';
const ENGLISH_IMAGE_URL = './../../assets/usa.png';
const link = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos%2Flogo-brasil&psig=AOvVaw11ggHw4POJY0eCwzYCXpXn&ust=1698879600765000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMCs2uqxoYIDFQAAAAAdAAAAABAE'

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

  const location = useLocation();
  const buttonRef = useRef<HTMLButtonElement>(null);

  // const [iconUrl, setIconUrl] = useState(ENGLISH_IMAGE_URL)

  // useEffect(() => {
  //   const imgUrl = currentLanguage === 'english' ? ENGLISH_IMAGE_URL : PORTUGUESE_IMAGE_URL;
  //   setIconUrl(imgUrl)
  //   if (buttonRef.current) {
  //     buttonRef.current.style.backgroundImage = `url(${iconUrl})`
  //   }
  // }, [currentLanguage]);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundImage = `url(${link})`
    }
  }, [])

  const currentRoute = (route: string) => {
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
      <h1 className='currency_route'>{currentRoute(location.pathname)}</h1>
      <nav className='navigation_header'>
        {location.pathname !== '/' && <RenderNavBtn route='' label={toHomeBtn}></RenderNavBtn>}
        {location.pathname !== '/projects' && <RenderNavBtn route='projects' label={toProjectsBtn}></RenderNavBtn>}
        {location.pathname !== '/hobbies' && <RenderNavBtn route='hobbies' label={toHobbiesBtn}></RenderNavBtn>}
        {location.pathname !== '/voluntary' && <RenderNavBtn route='voluntary' label={toVoluntaryBtn}></RenderNavBtn>}
      </nav>
      <div className='language_div'>
        <label style={{ whiteSpace: 'break-spaces' }} htmlFor="language_btn_id">{languageBtn}  </label>
        <button className='language_btn' onClick={changeLanguage} id='language_btn_id' ref={buttonRef}></button>
      </div>
    </header>
  );
};
