import React from 'react';
import { useMediaQuery } from 'react-responsive';
import 'bootstrap/dist/css/bootstrap.min.css';

const Certificados = () => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
    const imgStyle = {
        height: isSmallScreen ? '250px' : '500px', // Cambia la altura aquí para pantallas pequeñas
    }
    return (
        <div>
             <div className="position-relative text-center">
                <img
                    src="/src/assets/certificados/certificados.png"
                    className="d-block w-100"
                    style={imgStyle}
                    alt="Cotización"
                />
                <div className="position-absolute top-50 start-50 translate-middle" style={{ color: '#FFFFFF' }}>
                    <h1 className="fw-bold">CERTIFICADOS</h1>
                </div>
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