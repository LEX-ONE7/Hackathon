import * as React from 'react'; 
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AddContact = () => {
    const [nomClub, setNomClub] = useState('');
    const [nomPresident, setNomPresident] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [nomCoach, setNomCoach] = useState('');
    const history = useNavigate();
 
    const saveContact = async (e: any) => {
        e.preventDefault();
        // A CHANGER "clients"
        await axios.post('http://localhost:8080/contact/',{
            nomClub: nomClub,
            nomPresident: nomPresident,
            phone: phone,
            email: email,
            nomCoach: nomCoach           
        });
        history('/contacts');
    }

    const cancel = () => {
        history('/contacts');
    }
 
    return (
        <div>
        <Navbar />
        <div className='row m-4'>
            <div className='col'></div>
            <div className='col-6 border bg-light'>
            <form onSubmit={ saveContact }>
                <div className="field m-3">
                    <label className="form-label">Nom Club</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="Nom du club"
                        value={ nomClub }
                        onChange={ (e) => setNomClub(e.target.value) }
                    />
                </div>
 
                <div className="field m-3">
                    <label className="form-label">Nom du President</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="nomPresident"
                        value={ nomPresident }
                        onChange={ (e) => setNomPresident(e.target.value) }
                    />
                </div>
 
                <div className="field m-3">
                    <label className="form-label">Phone</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="saisir Phone"
                        value={ phone }
                        onChange={ (e) => setPhone(e.target.value) }
                    />
                </div>
                
                <div className="field m-3">
                    <label className="form-label">Email</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="saisir Email"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>

                <div className="field m-3">
                    <label className="form-label">Nom COACH</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="saisir nom du COACH"
                        value={ nomCoach }
                        onChange={ (e) => setNomCoach(e.target.value) }
                    />
                </div>

                <div className="field m-3">
                    <button className="btn btn-primary mx-1">Sauvegarder</button>
                    <button onClick={ cancel } className="btn btn-secondary mx-1 my-2">Annuler</button>
                </div>
            </form>
            </div>
            <div className='col'></div>
        </div>
        <Footer />
        </div>
    )
}
 
export default AddContact