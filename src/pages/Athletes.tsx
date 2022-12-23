import * as React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
 
const Athlete = () => {
    const [athletes, setAthlete] = useState([]);
 
    useEffect(() => {
        getAthlete();
    }, []);
 
    const getAthlete = async () => {
        const response = await axios.get('http://localhost:8080/athlete');
        setAthlete(response.data);
    }
 
    const deleteAthlete = async (id: number) => {
        await axios.delete(`http://localhost:8080/athlete/${id}`);
        getAthlete();
    }
 
    return (
        <div>
            <Navbar/>
        <div className='row'>
            <div className='col'></div>
            <div className='col-8'>
            <Link to="/athletes/add" className="btn btn-primary my-4">Ajouter</Link>
            <table className="table table-striped">
                <thead className='table-dark'>
                    <tr>
                        <th>Ref</th>
                        <th>Nom du Club</th>
                        <th>Categorie</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Date de naissance</th>
                        <th>Sexe</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { athletes.map((ath: any, index) => (
                        <tr key={ ath.id }>
                            <td>{ index + 1 }</td>
                            <td>{ ath.NomDuClub }</td>
                            <td>{ ath.Categorie }</td>
                            <td>{ ath.Nom }</td>
                            <td>{ ath.Prenom }</td>
                            <td>{ ath.DateDeNaissance }</td>
                            <td>{ ath.Sexe }</td>

                            <td>
                                <Link to={`/athletes/edit/${ath.id}`} className="btn btn-sm btn-info mx-1">Edit</Link>
                                <button onClick={ () => deleteAthlete(ath.id) } className="btn btn-sm btn-danger mx-1">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
            </div>
            <div className='col'></div>
        </div>
            <Footer/>
        </div>
    )
}
 
export default Athlete