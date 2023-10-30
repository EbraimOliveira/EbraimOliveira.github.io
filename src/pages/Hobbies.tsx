import Header from "../components/Header"
import { useLanguageContext } from "../contexts/languages/Provider"

import './../styles/hobbies.css'

export default function () {
  const { toHobbiesBtn } = useLanguageContext()

  return (
    <div id="hobbies">
      <Header></Header>
      <p>{toHobbiesBtn}
        <br></br>
        BoardGames, Escalada, Rpg, Literatura, Marcenaria, Moto</p>
    </div>
  )
};