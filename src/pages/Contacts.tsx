import * as React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
 
const Contacts = () => {
    const [contacts, setContact] = useState([]);
 
    useEffect(() => {
        getClub();
    }, []);
 
    const getClub = async () => {
        const response = await axios.get('http://localhost:8080/Contact');
        setContact(response.data);
    }
 
    const deleteContact = async (id: number) => {
        await axios.delete(`http://localhost:8080/Contact/${id}`);
        getClub();
    }
 
    return (
        <div>
            <Navbar/>
            <Link to="/contact/add" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Ref</th>
                        <th>Nom du club</th>
                        <th>Nom, Prenom du President</th>
                        <th>Telephone</th>
                        <th>Email</th>
                        <th>Nom, Prenom du Coach</th>
                    </tr>
                </thead>
                <tbody>
                    { contacts.map((con: any, index) => (
                        <tr key={ con.id }>
                            <td>{ index + 1 }</td>
                            <td>{ con.Nom_Clubs }</td>
                            <td>{ con.Nombres_de_joeurs }</td>
                            <td>{ con.Categories }</td>
                            <td>
                                <Link to={`/club/edit/${con.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={ () => deleteContact(con.id) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
            <Footer/>
        </div>
    )
}
 
export default Contacts