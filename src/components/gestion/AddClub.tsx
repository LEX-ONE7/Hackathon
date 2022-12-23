import * as React from 'react'; 
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

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
        history('/clubs');
    }

    const cancel = () => {
        history('/clubs');
    }
 
    return (
        <div>
            <Navbar />
        <div className='row m-4'>
            <div className='col'></div>
            <div className='col-6 border bg-light'>
            <form onSubmit={ saveClub }>
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
                    <label className="form-label">Nombre de Joueurs</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="Nombre de joueurs"
                        value={ nbreJoueurs }
                        onChange={ (e) => setNbreJoueurs(e.target.value) }
                    />
                </div>
 
                <div className="field m-3">
                    <label className="form-label">Categorie</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="Categorie"
                        value={ categorie }
                        onChange={ (e) => setCategorie(e.target.value) }
                    />
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
 
export default AddClub