import * as React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const Competitions = () => {
    return (
      
        <div className="container-fluid">
        <Navbar/>
        <img src="https://www.lacouture62.fr/wp-content/uploads/2016/09/volleyball.jpg" className="img-fluid" style={{width: "100%", height:"50rem"}} alt="..."/>

      <div className="row mt-4 mb-4">
        <h1 className='text-center'>Competitions</h1>
          
        <div className="card mt-4 mb-4" style={{ width : "28rem"}}>
          <img src="https://stillmed.olympics.com/media/Images/OlympicOrg/News/2017/04/11/2017-04-11-Volleyball-thumbnail.jpg?interpolation=lanczos-none&resize=2120:1200" className="card-img-top" alt="..."/>
          <p className="card-text text-center">Volley Ball </p>
        </div>
        <div className="col-md-6 ">
          <h2 className="fs-4 text-center ">
              Description
        <hr className="text-primary" />
         </h2>
        </div>
    </div>
    <div className="row ">
          
        <div className="card mt-4 mb-4" style={{ width : "28rem"}}>
          <img src="https://images.midilibre.fr/api/v1/images/view/6301a2158f6ebc359110c3e6/large/image.jpg?v=1" className="card-img-top" alt="..."/>
          <p className="card-text text-center">Volley Ball </p>
        </div>
        <div className="col-md-6">
          <h2 className="fs-4 text-center ">
              Description
        <hr className="text-primary" />
         </h2>
        </div>
    </div>
    <div className="row ">
          
        <div className="card mt-4 mb-4" style={{ width : "28rem"}}>
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
    <Footer/>

  </div>

        );
    };
    
    export default Competitions;