import * as React from 'react';
const Navbar = () =>  {
    return (

<nav className="navbar navbar-expand-lg bg-info fs-4" style={{height:"6rem"}}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#">CMS PF</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Accueil</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current ="page" href="/competitions">Competitions</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/inscriptions">Inscriptions</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/gestion">Gestion</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current ="page" href="/">Nos CLubs</a>
        </li>
        <li><a href="/"><img className="logo img-center borderRadius-10" src="https://cdn.discordapp.com/attachments/1048366870958444586/1054848988731408425/IMG_1085.png"></img></a></li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        );
    };

export default Navbar;