import * as React from 'react';
const Navbar = () =>  {
    return (

<ul className="navbar nav justify-content-center bg-dark text-light">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/">Accueil</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/competitions">Competitions</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/inscriptions">Inscriptions</a>
  </li>
 
</ul>
        );
    };

export default Navbar;