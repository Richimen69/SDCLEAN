import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Footer = () => {
    return (
        <footer className=" py-4 " style={{ backgroundColor: '#F0F5FF' }}>
            <div className='container '>
                <nav className='row justify-content-center'>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='mb-2 fs-5 fw-bold' style={{ color: '#006874' }}>INFORMACIÓN</li>
                        <li style={{ color: '#006874' }}>PULIDO DE PISOS</li>
                        <li style={{ color: '#006874' }}>DESINFECCIÓN DE ESPACIOS</li>
                        <li style={{ color: '#006874' }}>LAVADO DE SILLONES</li>
                        <li style={{ color: '#006874' }}>LAVADO DE SILLAS</li>
                        <li style={{ color: '#006874' }}>LAVADO DE ALFOMBRAS</li>
                        <li style={{ color: '#006874' }}>ELIMINACIÓN DE ACAROS</li>
                    </ul>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='mb-2 fs-5 fw-bold' style={{ color: '#006874' }}>SERVICIOS</li>
                        <li style={{ color: '#006874' }}>CITAS</li>
                        <li style={{ color: '#006874' }}>SERVICIOS</li>
                        <li style={{ color: '#006874' }}>NOSOTROS</li>
                        <li style={{ color: '#006874' }}>COTIZACIÓN</li>
                        <li style={{ color: '#006874' }}>CERTIFICADOS</li>
                    </ul>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='mb-2 fs-5 fw-bold' style={{ color: '#006874' }}>CONTACTO</li>
                        <li style={{ color: '#006874' }}>Lunes a Viernes de 9 am a 6 pm Sábado 9 am a 6 pm Domingo cerrado</li>
                    </ul>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <a href="tel:744 225 1952">
                            <button type="button" className="btn btn-primary btn-lg w-100" style={{ backgroundColor: '#006874' }}><img className='mx-2 my-2' src='/src/assets/phone.svg' width="25" height="25" />744 225 1952</button>
                        </a>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer