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
            <Navbar />
        <div className='row'>
            <div className='col'></div>
            <div className='col-8'>
            <Link to="/clubs/add" className="btn btn-primary my-4">Ajouter</Link>
            <table className="table table-striped">
                <thead className='table-dark'>
                    <tr>
                        <th>Ref</th>
                        <th>Nom</th>
                        <th>N#</th>
                        <th>Categorie</th>
                        <th></th>
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
                                <Link to={`/clubs/edit/${clb.id}`} className="btn btn-sm btn-info mx-1">Edit</Link>
                                <button onClick={ () => deleteClub(clb.id) } className="btn btn-sm btn-danger mx-1">Delete</button>
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
 
export default Club