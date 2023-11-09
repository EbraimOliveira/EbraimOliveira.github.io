import Header from "../components/Header"
import { useLanguageContext } from "../contexts/languages/Provider"

import './../styles/projects/projects.css'
import './../styles/others/manutencaoDiv.css';

import paginaEmManutencao from '../images/paginaEmConstrucao.jpg';
import ContactMe from "../components/ContactMe";

export default function () {
  const { toProjectsBtn } = useLanguageContext()

  return (
    <div id="projects">
      <Header></Header>
      <div className="manutencaoDiv">
        <img src={paginaEmManutencao} alt="" />
      </div>
      <ContactMe></ContactMe>
    </div>
  )
};