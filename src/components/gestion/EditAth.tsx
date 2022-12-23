import * as React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const EditAthlete = () => {
    const [NomDuClub, setNomDuClub] = useState('');
    const [Categorie, setCategorie] = useState('');
    const [Nom, setNom] = useState('');
    const [Prenom, setPrenom] = useState('');
    const [DateDeNaissance, setDateDeNaissance] = useState('');
    const [Sexe, setSexe] = useState('');
    const history = useNavigate();
    const { id } = useParams();
 
    const updateAthlete = async (e: any) => {
        e.preventDefault();
        await axios.patch(`http://localhost:8080/athlete/${id}`,{
            NomDuClub: NomDuClub,
            Categorie: Categorie,
            Nom: Nom,
            Prenom: Prenom,
            DateDeNaissance: DateDeNaissance,
            Sexe: Sexe
        });
        history('/athletes');
    }

    const cancel = () => {
        history('/athletes');
    }
 
    useEffect(() => {
        getAthleteById();
    }, []);
 
    const getAthleteById = async () => {
        const response = await axios.get(`http://localhost:8080/athlete/${id}`);
        setNomDuClub(response.data.NomDuClub);
        setCategorie(response.data.Categorie);
        setNom(response.data.Nom);
        setPrenom(response.data.Prenom);
        setDateDeNaissance(response.data.DateDeNaissance);
        setSexe(response.data.Sexe);
    }
 
    return (
        <div>
            <Navbar />
        <div className='row m-4'>
            <div className='col'></div>
            <div className='col-6 border bg-light'>
            <form onSubmit={ updateAthlete }>
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
                    <select className='form-select' value={ Categorie } onChange={ (e) => setCategorie(e.target.value) }>
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
                    <select className='form-select' value={ Sexe } onChange={ (e) => setSexe(e.target.value) }>
                        <option value="Masculin">Masculin</option>
                        <option value="Feminin">Feminin</option>
                    </select>
                </div>

                
                <div className="field">
                    <button className="btn btn-success mx-1">Mettre a Jour</button>
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

export default EditAthlete