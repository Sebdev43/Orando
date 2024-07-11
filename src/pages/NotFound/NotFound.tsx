import React, { useEffect } from 'react';
import './NotFound.scss';
import errorImage from '/404fof.png';

function NotFound() {
  useEffect(() => {
    document.body.classList.add('not-found-page');
    return () => {
      document.body.classList.remove('not-found-page');
    };
  }, []);

  return (
    <div className="not-found-content">
      <h1 className="error-title">Vous êtes perdu au milieu des bois !</h1>
      <div className="overlay">
        <img src={errorImage} alt="404 error" className="error-image" />
        <a href="/" className="home-link">C'est par ici</a>
      </div>
    </div>
  );
}

export default NotFound;
