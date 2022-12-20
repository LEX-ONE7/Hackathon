import * as React from 'react';
import Navbar from '../components/Navbar';
import Parallax1 from '../components/Parallax1';
const Competitions = () => {
    return (
        <div className="container-fluid">
        <Navbar/>
<Parallax1/>
      <div className="row col-12">
        <h1 className='text-center'>Competitions</h1>
          
        <div className="card" style={{ width : "28rem"}}>
          <img src="https://stillmed.olympics.com/media/Images/OlympicOrg/News/2017/04/11/2017-04-11-Volleyball-thumbnail.jpg?interpolation=lanczos-none&resize=2120:1200" className="card-img-top" alt="..."/>
          <p className="card-text text-center">Volley Ball </p>
        </div>
        <div className="col-md-6">
          <h2 className="fs-4 text-center ">
              Description
        <hr className="text-primary" />
         </h2>
        </div>
    </div>
  </div>

        );
    };
    
    export default Competitions;