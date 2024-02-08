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
    <div>
      <h1 className='text-lightTextMain dark:text-darktextMain'>
        {comingSoon?.title}
      </h1>
      <p className='text-lightTextMain dark:text-darktextMain'>
        {comingSoon?.terminalText}
      </p>
      <p className='text-lightTextSecondary dark:text-darkTextSecondary'>
        {comingSoon?.message}
      </p>
      <div className='bg-green-200 flex justify-center items-center gap-4'>
        {socialMedias.map((socialMedia, index) => (
          <SocialMediaCircle key={index} socialMedia={socialMedia} />
        ))}
      </div>
      {/* TODO: Add "Download CV" button */}
      {/* TODO: Add svg waves */}
    </div>
  );
};
