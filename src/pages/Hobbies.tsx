import Header from "../components/Header"
import { useLanguageContext } from "../contexts/languages/Provider"

import './../styles/hobbies.css'
import './../styles/manutencao/manutencaoDiv.css';

import paginaEmManutencao from '../images/paginaEmConstrucao.jpg';

export default function () {
  const { toHobbiesBtn } = useLanguageContext()

  return (
    <div id="hobbies">
      <Header></Header>
      <div className="manutencaoDiv">
        <img src={paginaEmManutencao} alt="página em manutenção" />
      </div>
      {/* <p>{toHobbiesBtn}
        <br></br>
        BoardGames, Escalada, Rpg, Literatura, Marcenaria , Moto</p> */}
    </div>
  )
};