import * as React from 'react'; 
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [Telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const history = useNavigate();
 
    const saveClient = async (e: any) => {
        e.preventDefault();
        // A CHANGER "clients"
        await axios.post('http://localhost:8080/contact/',{
            nom_Clubs: nom,
            prenom: prenom,
            phone: Telephone,
            email: email
           
        });
//        history.push("/");
        history('/contact');
    }
 
    return (
        <div>
            <form onSubmit={ saveContact }>
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
                        placeholder="Prenom"
                        value={ prenom }
                        onChange={ (e) => setPrenom(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Categorie</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Phone"
                        value={ Telephone }
                        onChange={ (e) => setTelephone(e.target.value) }
                    />
                </div>

               

                <div className="field">
                    <button className="button is-primary">Sauvegarder</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddContact