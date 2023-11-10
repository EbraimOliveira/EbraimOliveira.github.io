import Header from "../components/Header";
import ContactMe from "../components/ContactMe";
import { useLanguageContext } from "../contexts/languages/Provider";

import './../styles/home/home.css';
import './../styles/home/main.css';
import './../styles/home/main_text.css';
import './../styles/home/asideImg.css';
import './../styles/home/image.css';

import image from './../images/headset.jpg';

export default function Home() {

  const { welcomeTxt } = useLanguageContext()

  return (
    <div id="home">
      <div>
        <Header></Header>
      </div>
      <main className="main">
        <article className="main_text">
          <p
            style={{ whiteSpace: 'pre-line' }}>
            {welcomeTxt}
          </p>
        </article>
        <aside className="asideImg">
          <img className="image" src={image} alt="ebraim's photo" />
        </aside>
      </main>
      <ContactMe></ContactMe>
    </div>
  )
};
