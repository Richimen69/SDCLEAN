import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const estiloJustificado = { textAlign: 'justify' }
    return (
        <div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/src/assets/salas.jpg" className="d-block w-100" alt="s" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div>
                <p className="fs-1 fw-bold text-center my-5" style={{ color: '#55909B' }}>Nuestros Servicios</p>
            </div>

            <div>
                <div class="container">
                    <div class="row row-cols-4 justify-content-center">
                        <div class="col">
                            <p className="fw-bold text-center my-0" style={{ color: '#55909B' }}>Limpieza de salas</p>
                            <p style={estiloJustificado}>Limpieza profunda, recuperamos el color original de tu de tu sala.</p>
                        </div>
                        <div class="col">
                            <p className="fw-bold text-center my-0" style={{ color: '#55909B' }}>Limpieza de alfombras</p>
                            <p style={estiloJustificado}>Limpieza profunda y eliminación de malos olores por mascotas.</p>
                        </div>
                        <div class="col">
                            <p className="fw-bold text-center my-0" style={{ color: '#55909B' }}>Limpieza de tapetes</p>
                            <p style={estiloJustificado}>Recogemos tu tapete a domicilio y te lo entregamos como nuevo.</p>
                        </div>
                        <div class="col">
                            <p className="fw-bold text-center my-0" style={{ color: '#55909B' }}>Limpieza de colchones</p>
                            <p style={estiloJustificado}>Eliminación de ácaros, manchas y olores desagradables.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-5 ' style={{ backgroundColor: '#DAE6E8' }}>
                <div className='container'>
                    <div class="row row-cols-2 justify-content-center">
                        <p className="fw-bold my-5 w-25 fs-3" style={{ color: '#55909B' }}>Hacemos limpieza para que vivas con tranquilidad</p>
                        <img src="/src/assets/imginicio.png" className="d-block w-50" alt="s"/>
                        <p>Utilizamos químicos especializados para cada caso y tipo de alfombra-tapete, (pre-lavadores, shampo con bajo PH, enjuagues etc..) El sistema de extracción profunda es el único sistema que limpia todo el camino hasta la base de su alfombra y succiona toda la mugre consiguiendo con esto mayor limpieza y desinfección de la misma así como secado más rápido.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Home