import * as React from 'react';
const Navbar = () =>  {
    return (

<nav className="navbar navbar-expand-lg bg-dark  fs-4 mt-4" style={{height:"8rem"}}>
  <div className="container-fluid">
  <a className="navbar-brand " href="/">
        <img
        alt=""
        className="logo img-center rounded-circle mt-2 my-2"
          width="150"
          height="150"
          src="https://cdn.discordapp.com/attachments/1048366870958444586/1054848988731408425/IMG_1085.png"
        />
  </a>
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="/">Accueil</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" aria-current ="page" href="/competitions">Competitions</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="/clubs">Clubs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="/athletes">Athletes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" aria-current ="page" href="/contacts">Contacts</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Rechercher" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Rechercher</button>
      </form>
    </div>
  </div>
</nav>
        );
    };

export default Navbar;