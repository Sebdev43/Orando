import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { loadrandomHikes, loadHikes } from '../store/reducers/hikesListReducer';
import './Root.scss';

// components
import ScrollToTop from '../components/ScollToTop/ScrollToTop';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function Root() {
  const dispatch: any = useAppDispatch();
  const currentUrl = useLocation();
  // on récupère les randos dès que le composant Root est monté
  useEffect(() => {
    dispatch(loadrandomHikes());
    dispatch(loadHikes());
  }, [dispatch]);

  return (
    <div className="container__background">
      <ScrollToTop />
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
