import { LanguageDropDown } from '../helpers/LanguageDropDown';
import { ThemeSwitch } from '../helpers/ThemeSwitch';

export const NavBar = () => {
  return (
    <div className='flex items-center justify-between px-3 py-2 bg-lightBgSecondary dark:bg-darkBgSecondary'>
      <div className='flex items-center justify-center'>
        <i className='fa-solid fa-code fa-lg text-lightBgMain dark:text-darkTextSecondary'></i>
        <h1 className='ml-2 font-bold text-2xl text-lightBgMain dark:text-darkTextSecondary'>
          Owen Lobato
        </h1>
      </div>
      <div className='flex items-center justify-center gap-3'>
        <LanguageDropDown />
        <ThemeSwitch />
      </div>
    </div>
  );
};
