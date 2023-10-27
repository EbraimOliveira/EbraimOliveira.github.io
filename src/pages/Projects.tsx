import Header from "../components/Header"
import { useLanguageContext } from "../contexts/languages/Provider"

export default function () {
  const { toProjectsBtn } = useLanguageContext()

  return (
    <>
      <Header></Header>
      <p>{toProjectsBtn}</p>
    </>
  )
};