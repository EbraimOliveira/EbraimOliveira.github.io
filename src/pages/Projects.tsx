import Header from "../components/Header"
import { useLanguageContext } from "../contexts/languages/Provider"

import './../styles/projects.css'
import './../styles/manutencao/manutencaoDiv.css';

import paginaEmManutencao from '../images/paginaEmConstrucao.jpg';

export default function () {
  const { toProjectsBtn } = useLanguageContext()

  return (
    <div id="projects">
      <Header></Header>
      <div className="manutencaoDiv">
        <img src={paginaEmManutencao} alt="" />
      </div>
    </div>
  )
};