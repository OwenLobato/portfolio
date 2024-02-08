import { ComingSoon } from './components/globals/ComingSoon';
import { NavBar } from './components/globals/NavBar';
import { LanguageContext } from './contexts/LanguageContext';

const App = () => {
  return (
    <div className='min-h-screen bg-lightBgMain dark:bg-darkBgMain flex flex-col'>
      <LanguageContext>
        <NavBar />
        <ComingSoon />
      </LanguageContext>
    </div>
  );
};

export default App;
