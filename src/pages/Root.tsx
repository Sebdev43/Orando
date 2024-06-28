import { Outlet } from 'react-router-dom';

import './Root.scss';
import Header from '../components/Header/Header';

function Root() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
