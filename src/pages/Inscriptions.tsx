import * as React from 'react';
import Navbar from '../components/Navbar';

const Inscriptions = () => {
    return (
        <div> <Navbar/>

       <h1 className='text-center mt-4 mb-4'>
        Inscriptions</h1>
        <h2>Competiteurs</h2>
        <div className="input-group">
  <span className="input-group-text">Nom / Prenom</span>
  <input type="text" aria-label="First name" className="form-control"/>
  <input type="text" aria-label="Last name" className="form-control"/>
  
</div><div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">Club</span>
  <input type="text" className="form-control"/>
</div>
<div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">Année de naissance</span>
  <input type="text" className="form-control"/>
</div>
<div className="input-group mb-3">
  <label className="input-group-text" htmlFor="inputGroupSelect01">Sexe</label>
  <select className="form-select" id="inputGroupSelect01">
    <option selected>Choisis...</option>
    <option value="1">Femme</option>
    <option value="2">Homme</option>
  </select>
</div>
<div className="input-group mb-3">
  <label className="input-group-text" htmlFor="inputGroupSelect01">Categorie</label>
  <select className="form-select" id="inputGroupSelect01">
    <option selected>Choisis...</option>
    <option value="1">Senior Femme</option>
    <option value="2">Senior Homme</option>
  </select>
</div>

<h2>Coachs et Arbitres</h2>

<div className="input-group">
  <span className="input-group-text">Nom et prénom</span>
  <input type="text" aria-label="Nom" className="form-control"/>
  <input type="text" aria-label="Prénom" className="form-control"/>
</div>
<div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">Club</span>
  <input type="text" className="form-control"/>
</div>
<div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">Ceinture</span>
  <input type="text" className="form-control"/>
</div>
</div>
        );
    };
    
    export default Inscriptions;