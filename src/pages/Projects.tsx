import Header from "../components/Header"
import Project from "../components/Project";
// import { useLanguageContext } from "../contexts/languages/Provider"

import pixelArtImg from '../images/pixelArt.png';
import portifolioImg from '../images/portifolio.png';
import building from '../images/paginaEmConstrucao.jpg';
import mergeSortImg from '../images/mergeSort.png'

const pixelArt = "https://pixels-gnpvg0j9g-ebraimoliveira.vercel.app/";
const myPortifolio = 'https://ebraimoliveira.github.io/';
const mergeSort = 'https://merge-sort-coral.vercel.app/';

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
    projectImage: mergeSortImg,
    projectLink: mergeSort,
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