import * as React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const EditClub = () => {
    const [nom, setNom] = useState('');
    const [nbreJoueurs, setNbreJoueurs] = useState('');
    const [categorie, setCategorie] = useState('');
    const history = useNavigate();
    const { id } = useParams();
 
    const updateClub = async (e: any) => {
        e.preventDefault();
        await axios.patch(`http://localhost:8080/Club/${id}`,{
            Nom_Clubs: nom,
            Nombres_de_joeurs: nbreJoueurs,
            Categories: categorie,
        });
//        history.push("/");
        history('/Club');
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
            <form onSubmit={ updateClub }>
                <div className="field">
                    <label className="label">Nom</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Nom"
                        value={ nom }
                        onChange={ (e) => setNom(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">NbreJoueurs</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="nbre Joueurs"
                        value={ nbreJoueurs }
                        onChange={ (e) => setNbreJoueurs(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Categorie</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="categorie"
                        value={ categorie }
                        onChange={ (e) => setCategorie(e.target.value) }
                    />
                </div>

                
                <div className="field">
                    <button className="button is-primary">Mettre a Jour</button>
                </div>
            </form>
        </div>
    )
}

export default EditClub