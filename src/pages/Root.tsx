import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';

function Root() {
  return (
    <div className="app">
      <Nav />
      <Outlet />
    </div>
  );
}

export default Root;
