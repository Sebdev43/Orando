import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { loadHikes } from '../store/reducers/hikesAll';
import { loadrandomHikes } from '../store/reducers/hikesRandom';
import './Root.scss';

// components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function Root() {
  const dispatch: any = useAppDispatch();
  const currentUrl = useLocation();
  // on récupère les randos dès que le composant Root est monté
  useEffect(() => {
    dispatch(loadrandomHikes());
    dispatch(loadHikes());
  }, []);

  // on récupère l'URL pour surveiller lorsqu'elle change
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="container__background">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      {currentUrl.pathname !== '/connexion' &&
      currentUrl.pathname !== '/inscription' ? (
        <Footer />
      ) : (
        ''
      )}
    </div>
  );
}

export default Root;
