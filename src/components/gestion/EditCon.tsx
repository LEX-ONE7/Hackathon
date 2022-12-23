import * as React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Editcontact = () => {
    const [nomClub, setNomClub] = useState('');
    const [nomPresident, setNomPresident] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [nomCoach, setNomCoach] = useState('');
    const history = useNavigate();
    const { id } = useParams();
 
    const updateContact = async (e: any) => {
        e.preventDefault();
        await axios.patch(`http://localhost:8080/contact/${id}`,{
            nom_Clubs: nomClub,
            nomPresident: nomPresident,
            phone: phone,
            email: email,
            nomCoach: nomCoach  
        });
//        history.push("/");
        history('/contacts');
    }

    const cancel = () => {
        history('/contacts');
    }
 
    useEffect(() => {
        getContactById();
    }, []);
 
    const getContactById = async () => {
        const response = await axios.get(`http://localhost:8080/contact/${id}`);
        setNomClub(response.data.nomClub);
        setNomPresident(response.data.nomPresident);
        setPhone(response.data.phone);
        setEmail(response.data.email);
        setNomCoach(response.data.nomCoach);
    }
 
    return (
        <div>
            <Navbar />
        <div className='row m-4'>
            <div className='col'></div>
            <div className='col-6 border bg-light'>
            <form onSubmit={ updateContact }>
                <div className="field m-3">
                    <label className="form-lable">Nom CLUB</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="saisir NOM du CLUB"
                        value={ nomClub }
                        onChange={ (e) => setNomClub(e.target.value) }
                    />
                </div>
 
                <div className="field m-3">
                    <label className="form-lable">President</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="saisir NOM du PRESIDENT"
                        value={ nomPresident }
                        onChange={ (e) => setNomPresident(e.target.value) }
                    />
                </div>
 
                <div className="field m-3">
                    <label className="form-lable">Phone</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="saisir le #Phone"
                        value={ phone }
                        onChange={ (e) => setPhone(e.target.value) }
                    />
                </div>

                <div className="field m-3">
                    <label className="form-lable">Email</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="saisir Email"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>

                <div className="field m-3">
                    <label className="form-lable">Nom du COACH</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="saisir NOM du COACH"
                        value={ nomCoach }
                        onChange={ (e) => setNomCoach(e.target.value) }
                    />
                </div>
                
                <div className="field m-3">
                    <button className="btn btn-sm btn-primary mx-1">Mettre a Jour</button>
                    <button onClick={ cancel } className="btn btn-sm btn-secondary mx-1 my-2">Annuler</button>
                </div>
            </form>
            </div>
            <div className='col'></div>
        </div>
            <Footer />
        </div>
    )
}

export default Editcontact