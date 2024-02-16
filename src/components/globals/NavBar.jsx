import { useState, useEffect } from 'react';
import { LanguageDropDown } from '../helpers/LanguageDropDown';
import { ThemeSwitch } from '../helpers/ThemeSwitch';
import { useLanguageContext } from '../../contexts/LanguageContext';

export const NavBar = () => {
  const {
    t: { navBarOptions },
  } = useLanguageContext();

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
        className={`${
          process.env.REACT_APP_IS_PORTFOLIO_FINISHED
            ? 'hidden'
            : `md:flex rounded-md mt-1 p-2 ${
                menuOpen ? 'block' : 'hidden'
              } bg-lightTextSecondary md:bg-transparent dark:md:bg-transparent dark:bg-darkTextSecondary`
        } `}
      >
        <div className='flex flex-col md:flex-row items-center justify-around gap-3 md:gap-6'>
          {navBarOptions?.map((op, index) => (
            <NavLink key={index} href={`#${Object.keys(op)[0]}`}>
              {Object.values(op)[0]}
            </NavLink>
          ))}
        </div>
      </div>

      <div
        className={`md:flex rounded-md mt-1 p-2 ${
          menuOpen ? 'block' : 'hidden'
        } bg-lightTextSecondary md:bg-transparent dark:md:bg-transparent dark:bg-darkTextSecondary`}
      >
        <div className='flex items-center justify-around gap-3 md:gap-6'>
          <LanguageDropDown />
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className='w-full text-center text-nowrap py-2 px-2 rounded-md transition duration-300 text-lightBgMain dark:text-darktextMain hover:bg-lightBgMain dark:hover:bg-darktextMain hover:text-lightTextSecondary dark:hover:text-darkTextSecondary'
    >
      {children}
    </a>
  );
};
