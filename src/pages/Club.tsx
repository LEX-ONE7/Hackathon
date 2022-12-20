import * as React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
 
const Club = () => {
    const [clubs, setClub] = useState([]);
 
    useEffect(() => {
        getClub();
    }, []);
 
    const getClub = async () => {
        const response = await axios.get('http://localhost:8080/Club');
        setClub(response.data);
    }
 
    const deleteClub = async (id: number) => {
        await axios.delete(`http://localhost:8080/Club/${id}`);
        getClub();
    }
 
    return (
        <div>
            <Navbar/>
            <Link to="/club/add" className="button is-primary mt-2">Add New</Link>
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
                    { clubs.map((clb: any, index) => (
                        <tr key={ clb.id }>
                            <td>{ index + 1 }</td>
                            <td>{ clb.Nom_Clubs }</td>
                            <td>{ clb.Nombres_de_joeurs }</td>
                            <td>{ clb.Categories }</td>
                            <td>
                                <Link to={`/club/edit/${clb.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={ () => deleteClub(clb.id) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
            <Footer/>
        </div>
    )
}
 
export default Club