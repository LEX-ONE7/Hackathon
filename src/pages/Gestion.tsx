import * as React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
 
const Gestion = () => {
    const [clients, setClient] = useState([]);
 
    useEffect(() => {
        getClients();
    }, []);
 
    const getClients = async () => {
        const response = await axios.get('http://localhost:8080/clients');
        setClient(response.data);
    }
 
    const deleteClient = async (id: number) => {
        await axios.delete(`http://localhost:8080/clients/${id}`);
        getClients();
    }
 
    return (
        <div>
            <Navbar/>
            <Link to="/clients/add" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Ref</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    { clients.map((client: any, index) => (
                        <tr key={ client.id }>
                            <td>{ index + 1 }</td>
                            <td>{ client.nom }</td>
                            <td>{ client.prenom }</td>
                            <td>{ client.phone }</td>
                            <td>{ client.email }</td>
                            <td>
                                <Link to={`/clients/edit/${client.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={ () => deleteClient(client.id) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
            <Footer/>
        </div>
    )
}
 
export default Gestion