import React, { createContext, useContext, useState, ReactNode } from "react";
import { portuguese, english } from "../../utils/languages";

type LanguageContextState = {
  currentLanguage: "english" | "portuguese";
  changeLanguage: () => void;
  languageBtn: string;
  toProjectsBtn: string;
  toHobbiesBtn: string;
  toVoluntaryBtn: string;
  toHomeBtn: string;
  welcomeTxt: string;
  name: string;
  password: string;
  messageMe: string;
  msgBtn: string;
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
    languageBtn: currentLanguageData.buttons.languageBtn,
    toProjectsBtn: currentLanguageData.buttons.toProjectsBtn,
    toHobbiesBtn: currentLanguageData.buttons.toHobbiesBtn,
    toVoluntaryBtn: currentLanguageData.buttons.toVoluntaryBtn,
    toHomeBtn: currentLanguageData.buttons.toHomeBtn,
    welcomeTxt: currentLanguageData.home.welcomeTxt,
    name: currentLanguageData.contactMe.name,
    password: currentLanguageData.password,
    messageMe: currentLanguageData.contactMe.messageMe,
    msgBtn: currentLanguageData.contactMe.msgBtn,
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

