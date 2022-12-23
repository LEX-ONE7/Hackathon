
import * as React from 'react'; 
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AddAthelete = () => {
    const [NomDuClub, setNomDuClub] = useState('');
    const [Categorie, setCategorie] = useState('Athletes');
    const [Nom, setNom] = useState('');
    const [Prenom, setPrenom] = useState('');
    const [DateDeNaissance, setDateDeNaissance] = useState('');
    const [Sexe, setSexe] = useState('Masculin');
    const history = useNavigate();
 
    const saveAthlete = async (e: any) => {
        e.preventDefault();
        // A CHANGER "clients"
        await axios.post('http://localhost:8080/athlete/',{
            NomDuClub: NomDuClub,
            Categorie: Categorie,
            Nom: Nom,
            Prenom: Prenom,
            DateDeNaissance: DateDeNaissance,
            Sexe: Sexe
        }).then( (r) => {
            console.log(r);
        }).catch( (e) => {
            console.log(e);
        });
        history('/athletes');
    }

    const cancel = () => {
        history('/athletes');
    }
 
    return (
        <div>
            <Navbar />
        <div className='row m-4'>
            <div className='col'></div>
            <div className='col-6 border bg-light'>
            <form onSubmit={ saveAthlete }>
                <div className="field m-3">
                    <label className="form-label">nom du Club</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="saisir le nom du Club"
                        value={ NomDuClub }
                        onChange={ (e) => setNomDuClub(e.target.value) }
                    />
                </div>
 
                <div className="field m-3">
                    <label className="form-label">Categorie</label>
                    <select className='form-select' onChange={ (e) => setCategorie(e.target.value) }>
                        <option value="Athletes">Athletes</option>
                        <option value="Arbitre">Arbitre</option>
                        <option value="Coachs">Coachs</option>
                    </select>
                </div>
 
                <div className="field m-3">
                    <label className="form-label">Nom de l'athlete</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="saisir nom de l'athlete"
                        value={ Nom }
                        onChange={ (e) => setNom(e.target.value) }
                    />
                </div>
               
                <div className="field m-3">
                    <label className="form-label">Prenom de l'athlete</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="saisir prenom de l'athlete"
                        value={ Prenom }
                        onChange={ (e) => setPrenom(e.target.value) }
                    />
                </div>
               
                <div className="field m-3">
                    <label className="form-label">DDN</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="saisir sa date de naissance"
                        value={ DateDeNaissance }
                        onChange={ (e) => setDateDeNaissance(e.target.value) }
                    />
                </div>
               
                <div className="field m-3">
                    <label className="form-label">Sexe</label>
                    <select className='form-select' onChange={ (e) => setSexe(e.target.value) }>
                        <option value="Masculin">Masculin</option>
                        <option value="Feminin">Feminin</option>
                    </select>
                </div>
               

                <div className="field m-3">
                    <button className="btn btn-success mx-1">Sauvegarder</button>
                    <button onClick={ cancel } className="btn btn-secondary mx-1 my-2">Annuler</button>
                </div>
            </form>
            </div>
            <div className='col'></div>
        </div>
            <Footer />
        </div>
    )
}
 
export default AddAthelete