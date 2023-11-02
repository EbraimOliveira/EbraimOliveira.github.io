import Header from "../components/Header"
import { useLanguageContext } from "../contexts/languages/Provider"

import { portuguese } from './../utils/languages'

import './../styles/voluntary.css';

export default function () {
  const { toVoluntaryBtn } = useLanguageContext()

  return (
    <div id="voluntary">
      <Header></Header>
      <p>{toVoluntaryBtn}</p>
      <p>{portuguese.testTxt}</p>
    </div>
  )
};