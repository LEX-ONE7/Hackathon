import * as React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const EditAthlete = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const history = useNavigate();
    const { id } = useParams();
 
    const updateClient = async (e: any) => {
        e.preventDefault();
        await axios.patch(`http://localhost:8080/clients/${id}`,{
            nom: nom,
            prenom: prenom,
            phone: phone,
            email: email
        });
//        history.push("/");
        history('/gestion');
    }
 
    useEffect(() => {
        getClientById();
    }, []);
 
    const getClientById = async () => {
        const response = await axios.get(`http://localhost:8080/clients/${id}`);
        setNom(response.data.nom);
        setPrenom(response.data.prenom);
        setPhone(response.data.phone);
        setEmail(response.data.email);
    }
 
    return (
        <div>
            <form onSubmit={ updateClient }>
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
                    <label className="label">Prenom</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Prenom"
                        value={ prenom }
                        onChange={ (e) => setPrenom(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Phone</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Phone"
                        value={ phone }
                        onChange={ (e) => setPhone(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Email"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>

                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditAthlete