import { useEffect, useState } from 'react';
import './ScrollToTop.scss';

export default function ScrollToTop() {
  const [show, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;

      console.log(scrollPosition);
      if (scrollPosition > 1250) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Nettoyer l'événement de défilement lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={() => window.scrollTo(0, 0)}
      className={
        show
          ? 'scroll-to-top-button show-button'
          : 'scroll-to-top-button no-show-button'
      }
      type="button"
    >
      {' '}
      &#x2B06;
    </button>
  );
}
