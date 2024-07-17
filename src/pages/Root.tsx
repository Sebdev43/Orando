import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getHikes } from '../store/reducers/hikesAll';
import { getRandomHikes } from '../store/reducers/hikesRandom';
import { getBookmarks } from '../store/reducers/bookmarks';
import './Root.scss';

// components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScollToTop/ScrollToTop';

function Root() {
  const dispatch: any = useAppDispatch();
  const currentUrl = useLocation();

  const token = useAppSelector((state) => state.userConnection.token);

  // on récupère les randos dès que le composant Root est monté pour le premier rendu
  useEffect(() => {
    dispatch(getRandomHikes());
    dispatch(getHikes());
    if (token) {
      dispatch(getBookmarks());
    }
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
        <ScrollToTop />
        <Outlet />
      </div>
      {currentUrl.pathname !== '/connexion' &&
      currentUrl.pathname !== '/connexion/reset' &&
      currentUrl.pathname !== '/connexion/reinit' &&
      currentUrl.pathname !== '/inscription' &&
      currentUrl.pathname !== '/mon-compte' ? (
        <Footer />
      ) : (
        ''
      )}
    </div>
  );
}

export default Root;
function getBookmark(): any {
  throw new Error('Function not implemented.');
}
