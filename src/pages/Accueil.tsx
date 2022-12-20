import * as React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const Accueil = () => {
    return (
      <div>
        <a href="/"><img className="logo img-center" src="https://cdn.discordapp.com/attachments/1048366870958444586/1054848988731408425/IMG_1085.png"></img></a>
<Navbar/>
<h1 className='text-center mt-4 bg-primary text-white py-5 display-flex'>Accueil </h1>
<hr/>
<hr/>
<h2 className= 'text-center mt-4 py-5 display-flex bg-success'>Presentation</h2>
<hr/>
<hr/>
<Footer/>

</div>
        );
    };
    
    export default Accueil;