import Header from "../components/Header"
import { useLanguageContext } from "../contexts/languages/Provider"

// import './../styles/voluntary/voluntary.css';
// import './../styles/others/manutencaoDiv.css';

import paginaEmManutencao from '../images/paginaEmConstrucao.jpg';

export default function () {
  const { toVoluntaryBtn } = useLanguageContext()

  return (
    <div id="voluntary">
      <div>
        <Header></Header>
      </div>
      <main>
        <a
          href="https://altamontanha.com/dedo-do-moleque-projeto-leva-curso-de-escalada-a-comunidade-quilombola-na-chapada-dos-veadeiros/"
          target="_blank">
          Vão do Moleque
        </a>
        <div className="manutencaoDiv">
          <img src={paginaEmManutencao} alt="Página em manutenção" />
        </div>
      </main>
    </div>
  )
};