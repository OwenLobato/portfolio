import { createContext, useState, useEffect, useContext } from 'react';

const LanguageContextProvider = createContext();

export const LanguageContext = ({ children }) => {
  const allLanguages = [
    { id: 1, flag: 'us', name: 'English', file: 'en' },
    { id: 2, flag: 'mx', name: 'Español', file: 'es' },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(
    JSON.parse(window.localStorage.getItem('language')) || allLanguages[0]
  );
  const [t, setT] = useState({});

  useEffect(() => {
    const loadTranslations = async (file) => {
      try {
        const languageFile = file || 'en';
        const translationsModule = await import(
          `../config/languages/${languageFile}.json`
        );
        setT(translationsModule.default);
      } catch (error) {
        console.error('Error loading language:', error);
      }
    };

    window.localStorage.setItem('language', JSON.stringify(selectedLanguage));
    loadTranslations(selectedLanguage.file);
  }, [selectedLanguage]);

  return (
    <LanguageContextProvider.Provider
      value={{
        allLanguages,
        selectedLanguage,
        setSelectedLanguage,
        t,
      }}
    >
      {children}
    </LanguageContextProvider.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContextProvider);
