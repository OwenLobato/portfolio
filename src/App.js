import { ComingSoon } from './components/globals/ComingSoon';
import { NavBar } from './components/globals/NavBar';
import { LanguageContext } from './contexts/LanguageContext';
import { ThemeContext } from './contexts/ThemeContext';

const App = () => {
  return (
    <div className='min-h-screen bg-lightBgMain dark:bg-darkBgMain flex flex-col'>
      <LanguageContext>
        <ThemeContext>
          <NavBar />
          <ComingSoon />
        </ThemeContext>
      </LanguageContext>
    </div>
  );
};

export default App;
