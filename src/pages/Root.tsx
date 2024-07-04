import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { loadrandomHikes, loadHikes } from '../store/reducers/hikesListReducer';

import ScrollToTop from '../utils/ScrollToTop';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './Root.scss';

function Root() {
  const dispatch: any = useAppDispatch();

  // on récupère les recette dès que le composant Root est monté
  useEffect(() => {
    dispatch(loadrandomHikes());
    dispatch(loadHikes());
  }, []);

  return (
    <div className="container__background">
      <ScrollToTop />
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
