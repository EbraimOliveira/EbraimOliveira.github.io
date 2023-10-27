import Header from "../components/Header"
import { useLanguageContext } from "../contexts/languages/Provider"

export default function () {
  const { toVoluntaryBtn } = useLanguageContext()

  return (
    <>
      <Header></Header>
      <p>{toVoluntaryBtn}</p>
    </>
  )
};