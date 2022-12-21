import * as React from 'react'; 
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddClub = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const history = useNavigate();
 
    const saveClient = async (e: any) => {
        e.preventDefault();
        // A CHANGER "clients"
        await axios.post('http://localhost:8080/club/',{
            nom: nom,
            prenom: prenom,
            phone: phone,
            email: email
           
        });
//        history.push("/");
        history('/club');
    }
 
    return (
        <div>
            <form onSubmit={ saveClient }>
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
                        value={ phone }
                        onChange={ (e) => setPhone(e.target.value) }
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