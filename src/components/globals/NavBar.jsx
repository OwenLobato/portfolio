import { useState, useEffect } from 'react';
import { LanguageDropDown } from '../helpers/LanguageDropDown';
import { ThemeSwitch } from '../helpers/ThemeSwitch';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.getElementById('navbar');
      if (navbar && !navbar.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      id='navbar'
      className='flex flex-col md:flex-row justify-between bg-lightBgSecondary dark:bg-darkBgSecondary px-3 py-2'
    >
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <i className='fa-solid fa-code fa-lg text-lightBgMain dark:text-darkTextSecondary' />
          <h1 className='ml-2 font-bold text-2xl text-lightBgMain dark:text-darkTextSecondary'>
            Owen Lobato
          </h1>
        </div>

        <button
          className='md:hidden text-lightBgMain dark:text-darktextMain bg-lightTextSecondary dark:bg-darkTextSecondary rounded-lg px-2 py-1'
          onClick={toggleMenu}
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} fa-lg`}></i>
        </button>
      </div>

      <div
        className={`md:flex rounded-md mt-1 p-2 ${
          menuOpen ? 'block' : 'hidden'
        } bg-lightTextSecondary md:bg-transparent dark:md:bg-transparent dark:bg-darkTextSecondary`}
      >
        <div className='flex items-center justify-around gap-3'>
          <LanguageDropDown />
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};
