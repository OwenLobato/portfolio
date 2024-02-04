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
        className={`bg-lightBgMain dark:bg-darktextMain w-20 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ease-in-out`}
      >
        <span
          className={`text-xs text-lightBgSecondary dark:text-darkBgSecondary translate-x-9 dark:translate-x-3 absolute`}
        >
          {theme === 'dark' ? 'Dark' : 'Light'}
        </span>
        <div
          className={`flex items-center justify-center translate-x-0 dark:translate-x-12 w-6 h-6 bg-lightBgSecondary dark:bg-darkBgSecondary rounded-full shadow-md transform transition-transform duration-300 ease-in-out`}
        >
          {theme === 'dark' ? (
            <i class='fa-regular fa-moon' style={{ color: '#D3D3D3' }}></i>
          ) : (
            <i class='fa-regular fa-sun' style={{ color: '#F6F1F1' }}></i>
          )}
        </div>
      </button>
    </div>
  );
};
