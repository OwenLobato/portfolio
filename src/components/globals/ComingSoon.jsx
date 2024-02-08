import { useLanguageContext } from '../../contexts/LanguageContext';
import { SocialMediaCircle } from './SocialMediaCircle';

export const ComingSoon = () => {
  const {
    t: { comingSoon },
  } = useLanguageContext();

  const socialMedias = [
    {
      name: 'Mail',
      icon: <i className='fa-solid fa-envelope' />,
      data: 'owenlobatov@gmail.com',
    },
    {
      name: 'LinkedIn',
      icon: <i className='fa-brands fa-linkedin-in' />,
      data: 'https://www.linkedin.com/in/OwenLobatoVelazquez/',
    },
    {
      name: 'GitHub',
      icon: <i className='fa-brands fa-github' />,
      data: 'https://github.com/OwenLobato',
    },
    {
      name: 'Portfolio',
      icon: <i className='fa-solid fa-briefcase' />,
      data: 'https://owen-lobato-velazquez.vercel.app',
    },
  ];

  return (
    <div className=' flex flex-col items-center text-center mt-20 md:mt-40'>
      <h1 className='text-4xl md:text-6xl font-bold text-lightTextMain dark:text-darktextMain'>
        {comingSoon?.title}
      </h1>
      {/* TODO: Add "Download CV" button */}
      <h2 className='text-xl md:text-3xl mt-11 text-lightTextMain dark:text-darktextMain'>
        {comingSoon?.terminalText}
      </h2>
      <p className=' md:leading-10 text-base md:text-xl font-bold mt-11 w-9/12 md:w-2/5 text-lightTextSecondary dark:text-darkTextSecondary'>
        {comingSoon?.message}
      </p>
      <div className='flex justify-center items-center gap-2 md:gap-4 mt-11'>
        {socialMedias.map((socialMedia, index) => (
          <SocialMediaCircle key={index} socialMedia={socialMedia} />
        ))}
      </div>
      <img
        className='w-full absolute bottom-0'
        src={`/svgs/Waves/${window.localStorage.getItem('theme')}Waves.svg`}
        alt='Waves'
      />
    </div>
  );
};
