import Header from "../components/Header";
import ContactMe from "../components/ContactMe";
import { useLanguageContext } from "../contexts/languages/Provider";

import image from './../images/WhatsApp Image 2023-11-20 at 17.41.11.jpeg';

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
