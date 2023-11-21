import Header from "../components/Header"
import Project from "../components/Project";
// import { useLanguageContext } from "../contexts/languages/Provider"

import paginaEmManutencao from '../images/paginaEmConstrucao.jpg';
import pixelArtImg from '../images/pixelArt.png';
import portifolioImg from '../images/portifolio.png'

const pixelArt = "https://pixels-gnpvg0j9g-ebraimoliveira.vercel.app/";
const myPortifolio = 'https://ebraimoliveira.github.io/'

const projectsList = [
  {
    projectImage: pixelArtImg,
    projectLink: pixelArt,
    projectName: 'Pixels Art',
  },
  {
    projectImage: portifolioImg,
    projectLink: myPortifolio,
    projectName: 'Portifolio',
  },

]

export default function () {

  return (
    <div id="projects">
      <Header></Header>
      <main>
        <div className="projectsList">
          {projectsList.map(({ projectImage, projectLink, projectName }) => (
            <Project
              projectLink={projectLink}
              projectImage={projectImage}
              projectName={projectName}
            />
          ))}
        </div>
        <div className="manutencaoDiv">
          <img src={paginaEmManutencao} alt="Página em manutenção" />
        </div>
      </main>
    </div>
  )
};