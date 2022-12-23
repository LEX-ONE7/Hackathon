import * as React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
 
const Contacts = () => {
    const [contacts, setContact] = useState([]);
 
    useEffect(() => {
        getContacts();
    }, []);
 
    const getContacts = async () => {
        const response = await axios.get('http://localhost:8080/Contact');
        setContact(response.data);
    }
 
    const deleteContact = async (id: number) => {
        await axios.delete(`http://localhost:8080/Contact/${id}`);
        getContacts();
    }
 
    return (
        <div>
            <Navbar />
        <div className='row'>
            <div className='col'></div>
            <div className='col-8'>
            <Link to="/contacts/add" className="btn btn-primary my-4">Ajouter</Link>
            <table className="table table-striped">
                <thead className='table-dark'>
                    <tr>
                        <th>Ref</th>
                        <th>Nom du club</th>
                        <th>Nom du President</th>
                        <th>Telephone</th>
                        <th>Email</th>
                        <th>Nom du Coach</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { contacts.map((con: any, index) => (
                        <tr key={ con.id }>
                            <td>{ index + 1 }</td>
                            <td>{ con.nomClub }</td>
                            <td>{ con.nomPresident }</td>
                            <td>{ con.phone }</td>
                            <td>{ con.email }</td>
                            <td>{ con.nomCoach }</td>
                            <td>
                                <Link to={`/contacts/edit/${con.id}`} className="btn btn-sm btn-info mx-1">Edit</Link>
                                <button onClick={ () => deleteContact(con.id) } className="btn btn-sm btn-danger mx-1">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
            </div>
            <div className='col'></div>
        </div>
            <Footer />
        </div>
    )
}
 
export default Contacts