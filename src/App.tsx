import { Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./contexts/languages/Provider";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";

export default function App() {
  return (
    <>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="hobbies" element={<Hobbies />} />
        </Routes>
      </LanguageProvider>
    </>
  )
};
