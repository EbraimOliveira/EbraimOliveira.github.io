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
  nameTxt: string;
  password: string;
  messageTxt: string;
  messageBtn: string;
  textArea: string;
  emailSent: string;
  sending: string;
  projectCode: string;
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
    nameTxt: currentLanguageData.contactMe.nameTxt,
    password: currentLanguageData.password,
    messageTxt: currentLanguageData.contactMe.messageTxt,
    messageBtn: currentLanguageData.contactMe.messageBtn,
    textArea: currentLanguageData.contactMe.textArea,
    emailSent: currentLanguageData.contactMe.emailSent,
    sending: currentLanguageData.contactMe.sending,
    projectCode: currentLanguageData.projects.projectCode,
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

