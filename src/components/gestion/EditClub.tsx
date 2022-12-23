import * as React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const EditClub = () => {
    const [nom, setNom] = useState('');
    const [nbreJoueurs, setNbreJoueurs] = useState('');
    const [categorie, setCategorie] = useState('');
    const history = useNavigate();
    const { id } = useParams();
 
    const updateClub = async (e: any) => {
        e.preventDefault();
        await axios.patch(`http://localhost:8080/club/${id}`,{
            Nom_Clubs: nom,
            Nombres_de_joeurs: nbreJoueurs,
            Categories: categorie
        });
//        history.push("/");
        history('/clubs');
    }

    const cancel = () => {
        history('/clubs');
    }
 
    useEffect(() => {
        getClubById();
    }, []);
 
    const getClubById = async () => {
        const response = await axios.get(`http://localhost:8080/club/${id}`);
        setNom(response.data.Nom_Clubs);
        setNbreJoueurs(response.data.Nombres_de_joeurs);
        setCategorie(response.data.Categories);
    }
 
    return (
        <div>
            <Navbar />
        <div className='row m-4'>
            <div className='col'></div>
            <div className='col-6 border bg-light'>
            <form onSubmit={ updateClub }>
                <div className="field m-3">
                    <label className="form-label">Nom</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="Nom"
                        value={ nom }
                        onChange={ (e) => setNom(e.target.value) }
                    />
                </div>
 
                <div className="field m-3">
                    <label className="form-label">NbreJoueurs</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="nbre Joueurs"
                        value={ nbreJoueurs }
                        onChange={ (e) => setNbreJoueurs(e.target.value) }
                    />
                </div>
 
                <div className="field m-3">
                    <label className="form-label">Categorie</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="categorie"
                        value={ categorie }
                        onChange={ (e) => setCategorie(e.target.value) }
                    />
                </div>
                
                <div className="field m-3">
                    <button className="btn btn-success mx-1">Mettre a Jour</button>
                    <button onClick={ cancel } className="btn btn-secondary mx-1 my-2">Mettre a Jour</button>
                </div>
            </form>
            </div>
            <div className='col'></div>
        </div>
            <Footer />
        </div>
    )
}

export default EditClub