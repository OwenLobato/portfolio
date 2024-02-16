import { useState } from 'react';
import { useLanguageContext } from '../../contexts/LanguageContext';
import '../../styles/SocialMediaCircle.css';

export const SocialMediaCircle = ({ socialMedia }) => {
  const { name, icon, data } = socialMedia;

  const {
    t: { emailModal },
  } = useLanguageContext();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailContent, setEmailContent] = useState('');

  const handleClick = () => {
    if (name === 'Mail') {
      setIsModalOpen(true);
    }
  };
  const copyEmail = () => {
    navigator.clipboard.writeText(data);
    alert(emailModal?.alertCopied);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEmailContent('');
  };

  const handleSendEmail = () => {
    const emailTo = data;
    const emailSubject = 'Mensaje de contacto';
    const emailBody = emailContent;

    window.location.href = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <>
      <a
        href={name === 'Mail' ? null : data}
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className={`social-circle`} onClick={handleClick}>
          <span className='text-2xl'>{icon}</span>
        </div>
      </a>

      {isModalOpen && (
        <div className='fixed z-10 top-0 left-0 w-full h-full flex justify-center items-center bg-black dark:bg-gray-500 dark:bg-opacity-50 bg-opacity-75'>
          <div className='bg-lightBgMain dark:bg-darkBgMain p-4 rounded-lg shadow-lg flex flex-col items-center '>
            <div className='flex justify-between mb-2'>
              <div className='flex items-center gap-2'>
                <p className='text-lightTextMain dark:text-darktextMain'>
                  <b>{emailModal?.to}:</b> <i>{data}</i>
                </p>
                <i
                  className='fa-regular fa-copy cursor-pointer text-lightTextMain dark:text-darktextMain hover:text-lightTextSecondary hover:dark:text-darkTextSecondary'
                  onClick={copyEmail}
                />
              </div>
              <button
                className='text-gray-600 relative bottom-4 left-3 hover:text-black dark:hover:text-darktextMain'
                onClick={closeModal}
              >
                <i className='fa-solid fa-xmark' />
              </button>
            </div>
            <textarea
              className='w-full h-32 p-2 mb-4 border border-gray-300 rounded dark:bg-darkBgSecondary dark:text-darktextMain'
              placeholder={emailModal?.content}
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
            ></textarea>
            <button
              className='px-4 py-2 bg-lightBgSecondary dark:bg-darkBgSecondary text-lightBgMain dark:text-darktextMain rounded hover:bg-lightTextMain dark:hover:bg-darkTextSecondary'
              onClick={handleSendEmail}
            >
              {emailModal?.buttonText}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
