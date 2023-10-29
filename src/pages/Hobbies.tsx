import Header from "../components/Header"
import { useLanguageContext } from "../contexts/languages/Provider"

export default function () {
  const { toHobbiesBtn } = useLanguageContext()

  return (
    <>
      <Header></Header>
      <p>{toHobbiesBtn}
        <br></br>
        BoardGames, Escalada, Rpg, Literatura, Marcenaria, Moto</p>
    </>
  )
};