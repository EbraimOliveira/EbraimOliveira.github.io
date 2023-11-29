import Header from "../components/Header"
import { useLanguageContext } from "../contexts/languages/Provider"

import paginaEmManutencao from '../images/paginaEmConstrucao.jpg';

export default function () {
  const { toaboutMeBtn } = useLanguageContext()

  return (
    <div id="about_me">
      <Header></Header>

      <div className="building_div">
        <img src={paginaEmManutencao} alt="Página em manutenção" />
      </div>
      <br></br>
      <p>{toaboutMeBtn}
        BoardGames, Escalada, Rpg, Literatura, Marcenaria , Moto</p>
    </div>
  )
};