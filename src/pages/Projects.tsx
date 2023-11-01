import Header from "../components/Header"
import { useLanguageContext } from "../contexts/languages/Provider"

import './../styles/projects.css'

export default function () {
  const { toProjectsBtn } = useLanguageContext()

  return (
    <div id="projects">
      <Header></Header>
      <p>{toProjectsBtn}</p>
    </div>
  )
};