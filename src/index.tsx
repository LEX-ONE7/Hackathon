import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Competitions from './pages/Competitions';
import Athletes from './pages/Athletes';
import Club from './pages/Club';
import AddClub from './components/gestion/AddClub';
import EditClub from './components/gestion/EditClub';
import EditAth from './components/gestion/EditAth';
import AddAth from './components/gestion/AddAth';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
  { path: '/', element: <Accueil /> },
  { path: '/competitions', element: <Competitions /> },
  { path: '/athletes', element: <Athletes /> },
  { path: '/club', element: <Club /> },
  { path: '/club/add', element: <AddClub /> },
  { path: '/athletes/add', element: <AddAth /> },
  { path: '/club/edit/:id', element: <EditClub /> },
  { path: '/athletes/edit/:id', element: <EditAth /> },

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
