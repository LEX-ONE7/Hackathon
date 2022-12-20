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
        const response = await axios.get('http://localhost:8080/Inscription');
        setAthlete(response.data);
    }
 
    const deleteAthete = async (id: number) => {
        await axios.delete(`http://localhost:8080/Inscription/${id}`);
        getAthlete();
    }
 
    return (
        <div>
            <Navbar/>
            <Link to="/athlete/Club/add" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Ref</th>
                        <th>Nom du Club</th>
                        <th>Categorie</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Date de naissance</th>
                        <th>Sexe</th>
                    </tr>
                </thead>
                <tbody>
                    { athletes.map((ath: any, index) => (
                        <tr key={ ath.id }>
                            <td>{ index + 1 }</td>
                            <td>{ ath.Nom_Clubs }</td>
                            <td>{ ath.Nombres_de_joeurs }</td>
                            <td>{ ath.Categories }</td>
                            <td>
                                <Link to={`/athlete/edit/${athlete.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={ () => deleteAthlete(athlete.id) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
            <Footer/>
        </div>
    )
}
 
export default Athlete