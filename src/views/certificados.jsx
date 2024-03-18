import React from 'react';
import Img from '../components/Img';
import 'bootstrap/dist/css/bootstrap.min.css';

const Certificados = () => {
    return (
        <div>
            <div>
                <Img
                    imgA="cotizacion"
                    imgS="/src/assets/certificados/certificados.png"
                    txt="CERTIFICADOS"
                />
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <img src="/src/assets/certificados/certificado1.jpg" className="img-fluid mb-3" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <img src="/src/assets/certificados/certificado2.jpg" className="img-fluid mb-3" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <img src="/src/assets/certificados/certificado3.jpg" className="img-fluid mb-3" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <img src="/src/assets/certificados/certificado4.jpg" className="img-fluid mb-3" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <img src="/src/assets/certificados/certificado5.jpg" className="img-fluid mb-3" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <img src="/src/assets/certificados/certificado6.jpg" className="img-fluid mb-3" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certificados;
