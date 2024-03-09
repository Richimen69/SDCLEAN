import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg text-center" style={{ backgroundColor: '#00FF0000 ' }}>
            <div className="container-fluid ">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="/src/assets/logoc.png" alt="Logo" width="100" height="100" className="d-inline-block align-text-top" />
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <a className="nav-link" href="/">INICIO</a>
                        <a className="nav-link" href="/servicios">SERVICIOS</a>
                        <a className="nav-link" href="/cotizar">COTIZACIÓN</a>
                        <a className="nav-link" href="/certificados">CERTIFICADOS</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
