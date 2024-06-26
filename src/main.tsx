import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.scss';

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

// Pages
import Root from './pages/Root';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Hikes from './pages/Hikes/Hikes';
import HikePage from './pages/HikePage/HikePage';
import Bookmarks from './pages/Bookmarks/Bookmarks';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Account from './pages/Account/Account';
import Imprints from './pages/Imprints/Imprints';
import ConfidentialityPolicies from './pages/ConfidentialityPolicies/ConfidentialityPolicies';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Rooter
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<NotFound />}>
      <Route index element={<Home />} />
      <Route path="/randonnees" element={<Hikes />} />
      <Route path="/randonnees/rando/:id" element={<HikePage />} />
      <Route path="/favoris" element={<Bookmarks />} />
      <Route path="/inscription" element={<SignUp />} />
      <Route path="/connexion" element={<Login />} />
      <Route path="/mon-compte" element={<Account />} />
      <Route path="/mentions-legales" element={<Imprints />} />
      <Route
        path="/politiques-de-confidentialite"
        element={<ConfidentialityPolicies />}
      />
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
