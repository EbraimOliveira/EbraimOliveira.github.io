import Header from "../components/Header";
import ContactMe from "../components/ContactMe";
import { useLanguageContext } from "../contexts/languages/Provider";

import image from '../images/WhatsApp Image 2023-11-20 at 13.12.30.jpeg';
import goatGif from '../images/goatGif.gif';

export default function Home() {

  const { welcomeTxt } = useLanguageContext()

  return (
    <div id="home">
      <div>
        <Header></Header>
      </div>
      <main className="main">
        <div className="home-div">
          <img className="goat" src={goatGif} alt="" />
          <article className="main_text">
            <p
              className="home-txt"
              style={{ whiteSpace: 'pre-line' }}>
              {welcomeTxt}
              <br />
            </p>
          </article>
          <aside className="asideImg">
            <img className="image" src={image} alt="ebraim's photo" />
          </aside>
        </div>
      </main>
      <ContactMe></ContactMe>
    </div>
  )
};
