import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Competitions from './pages/Competitions';
import Club from './pages/Club';
import Athletes from './pages/Athletes';
import Contacts from './pages/Contacts';
//import AddCompetition from './components/gestion/AddCompeition';
import AddClub from './components/gestion/AddClub';
import AddAth from './components/gestion/AddAth';
import AddCon from './components/gestion/AddCon';
//import EditComp from './components/gestion/EditCompetition';
import EditClub from './components/gestion/EditClub';
import EditAth from './components/gestion/EditAth';
import EditCon from './components/gestion/EditCon';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
  { path: '/', element: <Accueil /> },
  // SHOW features
  { path: '/competitions', element: <Competitions /> },
  { path: '/clubs', element: <Club /> },
  { path: '/athletes', element: <Athletes /> },
  { path: '/contacts', element: <Contacts /> },
  // ADD features 
  //{ path: '/competitions/add', element: <AddCompetition /> },
  { path: '/clubs/add', element: <AddClub /> },
  { path: '/athletes/add', element: <AddAth /> },
  { path: '/contacts/add', element: <AddCon /> },
  // EDIT features
  //{ path: '/competitions/edit/:id', element: <EditComp /> },
  { path: '/clubs/edit/:id', element: <EditClub /> },
  { path: '/athletes/edit/:id', element: <EditAth /> },
  { path: '/contacts/edit/:id', element: <EditCon /> },

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
