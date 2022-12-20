import * as React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
 
const Athlete = () => {
    const [clients, setClient] = useState([]);
 
    useEffect(() => {
        getClients();
    }, []);
 
    const getClients = async () => {
        const response = await axios.get('http://localhost:8080/Inscription');
        setClient(response.data);
    }
 
    const deleteClient = async (id: number) => {
        await axios.delete(`http://localhost:8080/Inscription/${id}`);
        getClients();
    }
 
    return (
        <div>
            <Navbar/>
            <Link to="/athlete/Club/add" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Ref</th>
                        <th>Nom</th>
                        <th>N#</th>
                        <th>Categorie</th>
                    </tr>
                </thead>
                <tbody>
                    { clients.map((client: any, index) => (
                        <tr key={ client.id }>
                            <td>{ index + 1 }</td>
                            <td>{ client.Nom_Clubs }</td>
                            <td>{ client.Nombres_de_joeurs }</td>
                            <td>{ client.Categories }</td>
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
 
export default Athlete