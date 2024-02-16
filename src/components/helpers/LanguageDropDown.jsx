import { useState } from 'react';
import { useLanguageContext } from '../../contexts/LanguageContext';
import '/node_modules/flag-icons/css/flag-icons.min.css';

export const LanguageDropDown = () => {
  const { allLanguages, selectedLanguage, setSelectedLanguage } =
    useLanguageContext();

  const [availableLanguages, setAvailableLanguages] = useState(
    allLanguages.filter((lang) => lang.id !== selectedLanguage.id)
  );
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    setAvailableLanguages(
      allLanguages.filter((lang) => lang.id !== language.id)
    );
    setDropdownOpen(false);
  };

  return (
    <div
      className='relative inline-block text-left cursor-pointer '
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      <div className='flex items-center justify-center'>
        <span className={`fi fi-${selectedLanguage.flag} `} />
        <p className='mx-1 text-lightBgMain dark:text-darktextMain dark:md:text-darkTextSecondary'>
          {selectedLanguage.name}
        </p>
        <i
          className={`fa-solid fa-angle-${
            isDropdownOpen ? 'up' : 'down'
          } fa-2xs text-lightBgMain dark:text-darktextMain dark:md:text-darkTextSecondary`}
        />
      </div>
      {isDropdownOpen && (
        <div className='absolute left-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer'>
          <div className='py-1'>
            {availableLanguages.map((language) => (
              <p
                key={language.id}
                className={`block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100`}
                onClick={() => changeLanguage(language)}
              >
                <span className={`fi fi-${language.flag} `}></span>
                <span className='ml-2'>{language.name}</span>
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
