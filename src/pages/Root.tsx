import { Outlet } from 'react-router-dom';

import './Root.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function Root() {
  //TODO Voir pour prévoir de faire un useEffect ici pour charger le logo dans le Header
  // car lorsqu'on ne passe pas par la page d'accueil en tapant un URL directement dans
  // la barre d'adresse, le logo ne s'affiche pas

  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
