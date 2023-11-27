import Header from "../components/Header"
import { useLanguageContext } from "../contexts/languages/Provider"

import paginaEmManutencao from '../images/paginaEmConstrucao.jpg';

export default function () {
  const { toVoluntaryBtn } = useLanguageContext()

  return (
    <div id="voluntary">
      <Header></Header>
      <div className="building_div">
        <img src={paginaEmManutencao} alt="Página em manutenção" />
      </div>
    </div>
  )
};