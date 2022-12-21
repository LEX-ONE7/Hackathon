import * as React from 'react';
const Footer = () => {
    return (

    <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-md-4 item">
                        <h3>Accueil</h3>
                        <ul>
                            <a href="#"/>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-4 item">
                        <h3>Compétitions</h3>
                        <ul>
                            <a href="#"/>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-4 item">
                        <h3>Inscriptions</h3>
                        <ul>
                            <a href="#"/>
                        </ul>
                    </div>
                    </div> <div className='row'>
                      <div className='col-md-4 item'>
                      </div>
                    <div className="col-md-4 text-center">
                        <h3>CMS PF</h3>
                        <p>Votre premier gestionnaire digitale de compétitions Volley-Ball en Polynésie française.</p>
                    </div>
                    <div className='col-md-4 item'>
                      </div>
                </div>
                <p className="copyright">CMS PF © 2023</p>
            </div>
        </footer>
    </div>
);
};

export default Footer;