import Header from "../components/Header"
import Project from "../components/Project";
import { useLanguageContext } from "../contexts/languages/Provider"

import pixelArtImg from '../images/pixelArt.png';
import portifolioImg from '../images/portifolio.png';
import mergeSortImg from '../images/mergeSort.png'
// import cosmoImg from '../images/COSMO.png';
import building from '../images/building.png';

const pixelArt = "https://pixels-gnpvg0j9g-ebraimoliveira.vercel.app/";
const myPortifolio = 'https://ebraimoliveira.github.io/';
const mergeSort = 'https://merge-sort-coral.vercel.app/';


export default function () {

  const {
    aboutAlgorithms,
    aboutPortfolio,
    aboutPixelArt,
  } = useLanguageContext()

  const projectsList = [
    {
      projectImage: pixelArtImg,
      projectLink: pixelArt,
      projectName: 'Pixels Art ',
      gitHub: 'https://github.com/ebraimoliveira/pixels_art',
      description: aboutPixelArt,
      stacksList: 'HTML - CSS - Javascript ESLint'
    },
    {
      projectImage: portifolioImg,
      projectLink: myPortifolio,
      projectName: 'Portfolio ',
      gitHub: 'https://github.com/ebraimoliveira/ebraimoliveira.github.io/tree/main',
      description: aboutPortfolio,
      stacksList: 'HTML - CSS - Bootstrap - React - ReactDOM - React Router DOM - Typescript - @emailjs/browser',
    },
    {
      projectImage: building,
      projectLink: '',
      projectName: 'COSMO ',
      gitHub: '',
      description: '',
      stacksList: `HTML - CSS - React Native - React Native Paper - Jest - Babel - 
      Typescript - ESLint - Express.js - Cors - Nodemon - Bcrypt - Jsonwebtoken - MongoDB - Mongoose - Docker`,
    },
    {
      projectImage: mergeSortImg,
      projectLink: mergeSort,
      projectName: 'Merge Sort ',
      gitHub: 'https://github.com/ebraimoliveira/merge_sort',
      description: aboutAlgorithms,
      stacksList: 'CSS - HTML - Python - Flask',
    },
  ]

  return (
    <div id="projects">
      <Header></Header>
      <main>
        <h2 className="projectsTxt">PROJETOS</h2>
        <div className="projectsList">
          {projectsList.map(({
            projectImage,
            projectLink,
            projectName,
            gitHub,
            description,
            stacksList,
          }, index) => (
            <Project
              key={projectLink + index}
              projectLink={projectLink}
              projectImage={projectImage}
              projectName={projectName}
              gitHub={gitHub}
              description={description}
              stacksList={stacksList}
            />
          ))}
        </div>
      </main>
    </div>
  )
};