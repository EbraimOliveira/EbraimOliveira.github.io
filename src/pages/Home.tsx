import Header from "../components/Header";
import { useLanguageContext } from "../contexts/languages/Provider";

import './../styles/home.css'

export default function Home() {

  const { welcomeTxt } = useLanguageContext()

  return (
    <div id="home">
      <div>
        <Header></Header>
      </div>
      <div className="home">
        <p
          className="home_text"
          style={{ whiteSpace: 'pre-line' }}>{welcomeTxt}</p>
        <img src="./../../assets/notebook_cafeteria.jpg" alt="" />
      </div>
    </div>
  )
};