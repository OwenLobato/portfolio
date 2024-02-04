import { ThemeSwitch } from './components/helpers/ThemeSwitch';

const App = () => {
  return (
    <div className='h-screen bg-lightBgMain dark:bg-darkBgMain'>
      <ThemeSwitch />
    </div>
  );
};

export default App;
