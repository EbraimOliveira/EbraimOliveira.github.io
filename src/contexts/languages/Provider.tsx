import React, { createContext, useContext, useState, ReactNode } from "react";
import { portuguese, english } from "../../utils/languages";

type LanguageContextState = {
  currentLanguage: "english" | "portuguese";
  changeLanguage: () => void;
  languageBtn: string;
  toProjectsBtn: string;
  toHobbiesBtn: string;
  toVoluntaryBtn: string;
  homeBtn: string
};

const LanguageContext = createContext<LanguageContextState | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<"english" | "portuguese">("english");

  const changeLanguage = () => {
    const newLanguage = currentLanguage === "english" ? "portuguese" : "english";
    setCurrentLanguage(newLanguage);
  };

  const currentLanguageData = currentLanguage === "english" ? english : portuguese;

  const languageContextValues = {
    currentLanguage,
    changeLanguage,
    languageBtn: currentLanguageData.languageBtn,
    toProjectsBtn: currentLanguageData.toProjectsBtn,
    toHobbiesBtn: currentLanguageData.toHobbiesBtn,
    toVoluntaryBtn: currentLanguageData.toVoluntaryBtn,
    homeBtn: currentLanguageData.homeBtn
  };

  return (
    <LanguageContext.Provider value={languageContextValues}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguageContext deve ser usado dentro de um LanguageProvider");
  }
  return context;
};

