import Header from "../components/Header"
import Project from "../components/Project";
// import { useLanguageContext } from "../contexts/languages/Provider"

import pixelArtImg from '../images/pixelArt.png';
import portifolioImg from '../images/portifolio.png';
import cosmoImg from '../images/COSMO.png';
import building from '../images/paginaEmConstrucao.jpg';

const pixelArt = "https://pixels-gnpvg0j9g-ebraimoliveira.vercel.app/";
const myPortifolio = 'https://ebraimoliveira.github.io/';
const cosmo = 'https://sites.google.com/a/cosmo.org.br/cosmo/';

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
  {
    projectImage: building,
    projectLink: '',
    projectName: 'COSMO',
  },
  {
    projectImage: building,
    projectLink: '',
    projectName: 'Algoritmos',
  },
]

export default function () {

  return (
    <div id="projects">
      <Header></Header>
      <main>
        <h2 className="projectsTxt">PROJETOS</h2>
        <div className="projectsList">
          {projectsList.map(({ projectImage, projectLink, projectName }, index) => (
            <Project
              key={projectLink + index}
              projectLink={projectLink}
              projectImage={projectImage}
              projectName={projectName}
            />
          ))}
        </div>
      </main>
    </div>
  )
};