import { motion } from 'framer-motion';
import { useLanguageContext } from '../../contexts/LanguageContext';
import { useThemeContext } from '../../contexts/ThemeContext';
import { AnimatedText } from './AnimatedText';
import { SocialMediaCircle } from './SocialMediaCircle';
import { FadeIn } from '../helpers/Effects/FadeIn';

const cvPath = process.env.REACT_APP_PUBLIC_URL + 'CV_OwenLobatoVelazquez.pdf';

export const ComingSoon = () => {
  const {
    t: { comingSoon },
  } = useLanguageContext();
  const { theme } = useThemeContext();

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
      <FadeIn direction='top'>
        <h1 className='text-4xl md:text-6xl font-bold text-lightTextMain dark:text-darktextMain'>
          {comingSoon?.title}
        </h1>
      </FadeIn>

      <FadeIn
        direction='top'
        className='relative flex flex-col items-center justify-center mt-16'
      >
        <div className='text-xl md:text-3xl rounded-md font-bold border-2 p-6 border-lightTextMain dark:border-darktextMain text-lightTextMain dark:text-darktextMain'>
          <AnimatedText text={comingSoon?.terminalText} />
        </div>
        <motion.a
          href={cvPath}
          download={'CV_OwenLobatoVelazquez.pdf'}
          className='absolute bottom-6 flex justify-center items-center w-12 h-12 rounded-full border-2 border-lightTextMain dark:border-darktextMain bg-lightBgMain dark:bg-darkBgMain text-lightTextMain dark:text-darktextMain transition-colors duration-150 hover:bg-lightTextMain dark:hover:bg-darktextMain hover:text-lightBgMain dark:hover:text-darkBgMain'
          data-tooltip={comingSoon?.downloadCV}
          animate={{
            y: [-3, 3, -3],
            transition: {
              duration: 1,
              repeat: Infinity,
            },
          }}
          whileHover={{ scale: 1.2, y: 0 }}
        >
          <i className='fa-solid fa-download fa-xl' />
        </motion.a>
      </FadeIn>

      <FadeIn
        direction='bottom'
        className=' md:leading-10 text-base md:text-xl font-bold mt-3 w-9/12 md:w-2/5 text-lightTextSecondary dark:text-darkTextSecondary'
      >
        <p>{comingSoon?.message}</p>
      </FadeIn>

      <FadeIn direction='bottom'>
        <div className='flex justify-center items-center gap-2 md:gap-4 mt-11'>
          {socialMedias.map((socialMedia, index) => (
            <SocialMediaCircle key={index} socialMedia={socialMedia} />
          ))}
        </div>
      </FadeIn>

      <img
        className='w-full absolute bottom-0'
        src={`/svgs/Waves/${theme}Waves.svg`}
        alt='Waves'
      />
    </div>
  );
};
