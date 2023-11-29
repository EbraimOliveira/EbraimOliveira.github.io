import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguageContext } from '../contexts/languages/Provider';

import RenderNavBtn from './RenderNavBtn';

import brazil from '../images/brazil.png';
import usa from '../images/usa.png'

const PORTUGUESE_IMAGE_URL = brazil;
const ENGLISH_IMAGE_URL = usa;

export default function Header() {
  const location = useLocation();
  const currentRoute = location.pathname

  const {
    toProjectsBtn,
    toHobbiesBtn,
    languageBtn,
    toHomeBtn,
    currentLanguage,
    changeLanguage
  } = useLanguageContext();

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const imgUrl = currentLanguage === 'english' ? ENGLISH_IMAGE_URL : PORTUGUESE_IMAGE_URL;

    if (buttonRef.current) {
      buttonRef.current.style.backgroundImage = `url(${imgUrl})`

    }
  }, [currentLanguage]);

  // const currentRoute = (route: string) => {
  //   const routes: { [key: string]: string } = {
  //     '/': toHomeBtn,
  //     '/projects': toProjectsBtn,
  //     '/hobbies': toHobbiesBtn,
  //     '/voluntary': toVoluntaryBtn
  //   }
  //   return routes[route]
  // };

  return (
    <header id='header'>
      {/* <h1 className='current_route'>{currentRoute(currentRoute)}</h1> */}
      <h1 className='my_name'>Ebraim Oliveira</h1>
      <nav className='navigation_header'>

        <RenderNavBtn route='' label={toHomeBtn} active={currentRoute === '/'} />
        <RenderNavBtn route='projects' label={toProjectsBtn} active={currentRoute === '/projects'} />
        <RenderNavBtn route='hobbies' label={toHobbiesBtn} active={currentRoute === '/hobbies'} />

      </nav>
      <div className='language_div'>
        <label
          className='language_label'
          style={{ whiteSpace: 'break-spaces' }}
          htmlFor="language_btn_id">{languageBtn} </label>
        <button
          className='language_btn'
          onClick={changeLanguage}
          id='language_btn_id'
          ref={buttonRef}></button>
      </div>
    </header>
  );
};
