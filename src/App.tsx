import { Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./contexts/languages/Provider";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";

export default function App() {
  return (
    <>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="aboutMe" element={<AboutMe />} />
        </Routes>
      </LanguageProvider>
    </>
  )
};
