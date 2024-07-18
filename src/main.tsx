import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';

import './styles/index.scss';

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

// Import des pages
import Root from './pages/Root';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Hikes from './pages/Hikes/Hikes';
import OneHike from './pages/OneHike/OneHike';
import Bookmarks from './pages/Bookmarks/Bookmarks';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import LoginReset from './pages/LoginReset/LoginReset';
import LoginReinit from './pages/LoginReinit/LoginReinit';
import Account from './pages/Account/Account';
import AccountDelete from './pages/Account/AccountDelete';
import Imprints from './pages/Imprints/Imprints';
import ConfidentialityPolicies from './pages/ConfidentialityPolicies/ConfidentialityPolicies';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Rooter d'url : simuler en avec REACT, le comportement d'un navigateur pour la gestion d'URL
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<NotFound />}>
      <Route index element={<Home />} />
      <Route path="/randonnees" element={<Hikes />} />
      <Route path="/randonnees/:id" element={<OneHike />} />
      <Route path="/favoris" element={<Bookmarks />} />
      <Route path="/inscription" element={<SignUp />} />
      <Route path="/connexion" element={<Login />} />
      <Route path="/connexion/reset" element={<LoginReset />} />
      <Route path="/connexion/reinit" element={<LoginReinit />} />
      <Route path="/connexion/reinit/:token" element={<LoginReinit />} />
      <Route path="/validation/suppression" element={<AccountDelete />} />
      <Route path="/mon-compte" element={<Account />} />
      <Route path="/mentions-legales" element={<Imprints />} />
      <Route
        path="/politiques-de-confidentialite"
        element={<ConfidentialityPolicies />}
      />
    </Route>
  )
);

// Réconciliation du DOM react sur le DOM html
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
