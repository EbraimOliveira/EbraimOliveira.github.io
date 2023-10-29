import Header from "../components/Header"
import { useLanguageContext } from "../contexts/languages/Provider"

export default function () {
  const { toProjectsBtn } = useLanguageContext()

  return (
    <div>
      <Header></Header>
      <p>{toProjectsBtn}</p>
    </div>
  )
};