import Header from "../components/Header"
import { useLanguageContext } from "../contexts/languages/Provider"

import './../styles/voluntary.css';

export default function () {
  const { toVoluntaryBtn } = useLanguageContext()

  return (
    <div id="voluntary">
      <Header></Header>
      <p>{toVoluntaryBtn}</p>
    </div>
  )
};