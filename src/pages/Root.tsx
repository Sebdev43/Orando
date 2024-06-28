import { Outlet } from 'react-router-dom';

import './Root.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function Root() {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
