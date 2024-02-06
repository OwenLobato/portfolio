import { useState, useEffect } from 'react';

export const ThemeSwitch = () => {
  const element = document.documentElement;
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  const onWindowMatch = () => {
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && darkQuery.matches)
    ) {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };
  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        break;

      case 'light':
        element.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        break;

      default:
        localStorage.removeItem('theme');
        onWindowMatch();
        break;
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className='flex items-center justify-center'>
      <button
        onClick={toggleTheme}
        className={`bg-lightBgMain dark:bg-darktextMain w-9 h-5 flex items-center rounded-full p-1 transition-colors duration-300 ease-in-out`}
      >
        <div
          className={`flex items-center justify-center translate-x-0 dark:translate-x-3 w-4 h-4 bg-lightBgSecondary dark:bg-darkBgSecondary rounded-full shadow-md transform transition-transform duration-300 ease-in-out`}
        >
          <i
            className={`fa-regular fa-${
              theme === 'dark' ? 'moon' : 'lightbulb'
            } text-lightBgMain dark:text-darktextMain fa-2xs`}
          ></i>
        </div>
      </button>
    </div>
  );
};
