import * as React from 'react';
const Navbar = () =>  {
    return (

<ul className="navbar nav justify-content-center bg-info fs-4" style={{height:"10rem"}}>
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/">Accueil</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/competitions">Competitions</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/inscriptions">Inscriptions</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/club">Club</a>
  </li>
  <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Rechercher" aria-label="Search"/>
      <button className="btn btn-outline-primary" type="submit">Rechercher</button>
    </form>
</ul>
        );
    };

export default Navbar;