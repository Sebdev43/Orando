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
import Home from './pages/Home/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Rooter
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
