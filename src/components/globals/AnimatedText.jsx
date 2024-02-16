import { useEffect, useState } from 'react';
import '../../styles/AnimatedText.css';

export const AnimatedText = ({ text }) => {
  const displayedSpeed = 120;

  const ShowOnce = ({ phrase }) => {
    const [displayedPhrase, setDisplayedPhrase] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        if (currentIndex < phrase.length) {
          setDisplayedPhrase((prevPhrase) => prevPhrase + phrase[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      }, displayedSpeed);
      return () => clearTimeout(timeoutId);
    }, [currentIndex, phrase]);

    useEffect(() => {
      setDisplayedPhrase('');
      setCurrentIndex(0);
    }, [phrase]);

    return <>{displayedPhrase}</>;
  };

  const ShowCyclic = ({ phrases }) => {
    const [displayedPhrase, setDisplayedPhrase] = useState('');
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isReversed, setIsReversed] = useState(false);

    useEffect(() => {
      const phrase = phrases[currentPhraseIndex];

      if (phrase) {
        const intervalId = setInterval(() => {
          if (!isReversed) {
            if (currentIndex < phrase.length) {
              setDisplayedPhrase(
                (prevPhrase) => prevPhrase + phrase[currentIndex]
              );
              setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
              setIsReversed(true);
            }
          } else {
            if (currentIndex > 0) {
              setDisplayedPhrase((prevPhrase) => prevPhrase.slice(0, -1));
              setCurrentIndex((prevIndex) => prevIndex - 1);
            } else {
              setIsReversed(false);
              setCurrentPhraseIndex(
                (prevIndex) => (prevIndex + 1) % phrases.length
              );
            }
          }
        }, displayedSpeed);
        return () => clearInterval(intervalId);
      }
    }, [currentPhraseIndex, currentIndex, isReversed, phrases]);

    return (
      <>
        <span className='opacity-0 mr-1' />
        {displayedPhrase}
      </>
    );
  };

  const isStringOrArray = (phrase) => {
    if (!phrase) return <></>;
    if (typeof phrase === 'string') return <ShowOnce phrase={phrase} />;
    if (Array.isArray(phrase)) {
      return <ShowCyclic phrases={phrase} />;
    }
  };

  return (
    <p
      className={`terminal border-r-2 border-lightTextSecondary dark:border-darkTextSecondary whitespace-nowrap overflow-hidden`}
    >
      {isStringOrArray(text)}
    </p>
  );
};
