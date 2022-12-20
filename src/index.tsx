import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Competitions from './pages/Competitions';
import Inscriptions from './pages/Inscriptions';
import Gestion from './pages/Gestion';
import EditAthlete from './components/gestion/EditAthlete';
import AddAthlete from './components/gestion/AddAthlete';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
  { path: '/', element: <Accueil /> },
  { path: '/competitions', element: <Competitions /> },
  { path: '/inscriptions', element: <Inscriptions /> },
  { path: '/gestion', element: <Gestion /> },
  { path: '/gestion/add', element: <AddAthlete /> },
  { path: '/gestion/edit/:id', element: <EditAthlete /> },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
