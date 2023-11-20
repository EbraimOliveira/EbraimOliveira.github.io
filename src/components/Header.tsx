import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguageContext } from '../contexts/languages/Provider';

import RenderNavBtn from './RenderNavBtn';

import brazil from '../images/brazil.png';
import usa from '../images/usa.png'

const PORTUGUESE_IMAGE_URL = brazil;
const ENGLISH_IMAGE_URL = usa;

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

  useEffect(() => {
    const imgUrl = currentLanguage === 'english' ? ENGLISH_IMAGE_URL : PORTUGUESE_IMAGE_URL;

    if (buttonRef.current) {
      buttonRef.current.style.backgroundImage = `url(${imgUrl})`

    }
  }, [currentLanguage]);

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
    <header id='header'>
      <h1 className='current_route'>{currentRoute(location.pathname)}</h1>
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
