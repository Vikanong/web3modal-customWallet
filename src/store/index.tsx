import { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  translationLang: string;
  setTranslationLang: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }: { children: ReactNode }) => {

  const [translationLang, setTranslationLang] = useState("en-US");

  return (
    <AppContext.Provider value={{
      translationLang,
      setTranslationLang
    }}>
      {children}
    </AppContext.Provider>
  );
};