import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#ffff' }}>
            <div className="container-fluid">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src="/src/assets/logoc.png" alt="Logo" width="100" height="100" class="d-inline-block align-text-top" />
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <a className="nav-link" href="#">INICIO</a>
                        <a className="nav-link" href="#">SERVICIOS</a>
                        <a className="nav-link" href="#">COTIZACIÓN</a>
                        <a className="nav-link" href="#">CERTIFICADOS</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
