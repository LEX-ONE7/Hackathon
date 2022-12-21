import * as React from 'react'; 
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddClub = () => {
    const [nom, setNom] = useState('');
    const [nbreJoueurs, setNbreJoueurs] = useState('');
    const [categorie, setCategorie] = useState('');
    const history = useNavigate();
 
    const saveClub = async (e: any) => {
        e.preventDefault();
        // A CHANGER "clients"
        await axios.post('http://localhost:8080/club/',{
            Nom_Clubs: nom,
            Nombres_de_joeurs: nbreJoueurs,
            Categories: categorie           
        });
//        history.push("/");
        history('/club');
    }
 
    return (
        <div>
            <form onSubmit={ saveClub }>
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
                    <label className="label">Nombre de Joueurs</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Nombre de joueurs"
                        value={ nbreJoueurs }
                        onChange={ (e) => setNbreJoueurs(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Categorie</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Categorie"
                        value={ categorie }
                        onChange={ (e) => setCategorie(e.target.value) }
                    />
                </div>

               

                <div className="field">
                    <button className="button is-primary">Sauvegarder</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddClub