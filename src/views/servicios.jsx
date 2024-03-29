import React, { useState } from 'react'
import Img from '../components/Img'
import 'bootstrap/dist/css/bootstrap.min.css'

const Servicios = () => {
    return (
        <div style={{ backgroundColor: "#eef4f5" }}>
            <div>
                <Img
                    imgA="cotizacion"
                    imgS="/src/assets/servicios/servicios.png"
                    txt="SERVICIOS"
                />
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <img src="/src/assets/servicios/pulido.png" />
                    </div>
                    <div className="col">
                        <img src="/src/assets/servicios/desinfeccion.png" />
                    </div>
                    <div className="col">
                        <img src="/src/assets/servicios/limpiezasala.png" />
                    </div>
                    <div className="col">
                        <img src="/src/assets/servicios/limpiezasilla.png" />
                    </div>
                    <div className="col">
                        <img src="/src/assets/servicios/limpiezaalfombras.png" />
                    </div>
                    <div className="col">
                        <img src="/src/assets/servicios/limpiezapercia.png" />
                    </div>
                    <div className="col">
                        <img src="/src/assets/servicios/detallado.png" />
                    </div>
                    <div className="col">
                        <img src="/src/assets/servicios/obrafina.png" />
                    </div>
                    <div className="col">
                        <img src="/src/assets/servicios/limpiezacolcho.png" />
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "#2a585e" }}>
                <img src="/src/assets/servicios/mano.jpg" />
                <h1 className="fs-1 fw-bold text-center my-5" style={{ color: '#FFFFFF' }}>TIPOS DE SERVICIOS</h1>
                <div className="container">
                    <div className="row">
                        <div className="col d-flex justify-content-center align-items-center mb-5">
                            <a href="https://api.whatsapp.com/send?phone=5217442251952&text=Quiero%20cotizar%20un%20servicio%2C%20que%20vi%20en%20su%20pagina%20web.">
                                <img src="/src/assets/servicios/cotizar.png" alt="cotizar" /></a>
                        </div>
                        <div className="col d-flex justify-content-center align-items-center mb-5">
                            <a href="https://api.whatsapp.com/send?phone=5217442251952&text=Quiero%20cotizar%20un%20servicio%2C%20que%20vi%20en%20su%20pagina%20web.">
                                <img src="/src/assets/servicios/cotizar2.png" alt="cotizar2" /></a>
                        </div>
                        <div className="col d-flex justify-content-center align-items-center mb-5">
                            <a href="https://api.whatsapp.com/send?phone=5217442251952&text=Quiero%20cotizar%20un%20servicio%2C%20que%20vi%20en%20su%20pagina%20web.">
                                <img src="/src/assets/servicios/cotizar3.png" alt="cotizar3" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Servicios
