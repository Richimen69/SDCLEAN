import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Services from '../components/inicio/Services'

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
                <h1 className="fs-1 fw-bold text-center my-5" style={{ color: '#55909B' }}>Nuestros Servicios</h1>
            </div>

            <div className="container w-auto">
                <div className="row justify-content-center ">
                    <Services
                        imagenSrc="/src/assets/inicio/sofa.svg"
                        imagenAlt="sofa"
                        titulo="Limpieza de salas"
                        descripcion="Limpieza profunda, recuperamos el color original de tu de tu sala."
                    />
                    <Services
                        imagenSrc="/src/assets/inicio/roll.svg"
                        imagenAlt="sofa"
                        titulo="Limpieza de alfombras"
                        descripcion="Limpieza profunda y eliminación de malos olores por mascotas."
                    />
                    <Services
                        imagenSrc="/src/assets/inicio/rug.svg"
                        imagenAlt="sofa"
                        titulo="Limpieza de tapetes"
                        descripcion="Recogemos tu tapete a domicilio y te lo entregamos como nuevo."
                    />
                    <Services
                        imagenSrc="/src/assets/inicio/bed.svg"
                        imagenAlt="sofa"
                        titulo="Limpieza de colchones"
                        descripcion="Eliminación de ácaros, manchas y olores desagradables."
                    />
                </div>
                <div className="row justify-content-center my-5">
                    <Services
                        imagenSrc="/src/assets/inicio/chair.svg"
                        imagenAlt="sofa"
                        titulo="Limpieza de sillas"
                        descripcion="Limpieza de sillas tapizadas de comedor, oficina, auditorios y más."
                    />
                    <Services
                        imagenSrc="/src/assets/inicio/car.svg"
                        imagenAlt="sofa"
                        titulo="Limpieza de interior
                            de autos"
                        descripcion="Tu auto puede recuperar su color y verse como nuevo, sin manchas y sin olores."
                    />
                    <Services
                        imagenSrc="/src/assets/inicio/blind.svg"
                        imagenAlt="sofa"
                        titulo="Limpieza de persianas"
                        descripcion="Quitamos todo el polvo de tus persianas, para que dejes entrar aire limpio."
                    />
                    <Services
                        imagenSrc="/src/assets/inicio/shield.svg"
                        imagenAlt="sofa"
                        titulo="Desinfección"
                        descripcion="Desinfección de espacios cerrados como prevención de Covid 19."
                    />

                </div>
            </div>
            <div className='my-5' style={{ backgroundColor: '#DAE6E8' }}>
                <div className="clearfix p-5 row">
                    <div className='col-md-5'>
                        <div className='col-md-7 mx-5'>
                            <h1 className="fw-bold my-5 w-100 fs-3 " style={{ color: '#55909B' }}>
                                Hacemos limpieza para que vivas con tranquilidad
                            </h1>
                            <p style={estiloJustificado} className='py-5'>
                                Utilizamos químicos especializados para cada caso y tipo de alfombra-tapete, (pre-lavadores, shampo con bajo PH, enjuagues etc..) El sistema de extracción profunda es el único sistema que limpia todo el camino hasta la base de su alfombra y succiona toda la mugre consiguiendo con esto mayor limpieza y desinfección de la misma así como secado más rápido.
                            </p>
                            <img className='my-5' src="/src/assets/inicio/responsabilidadcivil.png" alt="..." width="300" height="150" />
                        </div>
                    </div>
                    <div className='col-md-7'>
                        <img src="/src/assets/inicio/imginicio.png" className="w-100 float-md-end mb-3 ms-md-3" alt="..." />
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <h1 className='fw-bold' style={{ color: '#55909B' }}>Utilizamos el mejor equipo</h1>
            </div>
            <div className='container py-5'>
                <div className='row col-md-12 col-sm-6 text-center py-5 gy-4'>
                    <div className='col'>
                        <div className='p-3 rounded-5' style={{ backgroundColor: '#F7FBFF' }}>
                            <img src="/src/assets/inicio/equipo1.png" alt="Máquina desinfección UV" className="img-fluid" />
                            <p className='fw-bold fs-5 my-3' style={{ color: '#006874' }}>Máquina desinfección UV</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='p-3 rounded-5' style={{ backgroundColor: '#F7FBFF' }}>
                            <img src="/src/assets/inicio/equipo2.png" alt="Cepillos especiales" className="img-fluid" />
                            <p className='fw-bold fs-5 my-3' style={{ color: '#006874' }}>Cepillos especiales</p>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='p-3 rounded-5' style={{ backgroundColor: '#F7FBFF' }}>
                            <img src="/src/assets/inicio/equipo3.png" alt="Máquina de lavado" className="img-fluid" />
                            <p className='fw-bold fs-5 my-3' style={{ color: '#006874' }}>Máquina de lavado</p>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='p-3 rounded-5' style={{ backgroundColor: '#F7FBFF' }}>
                        <img src="/src/assets/inicio/equipo4.png" alt="Ventilador de secado" className="img-fluid" />
                        <p className='fw-bold fs-5 my-3' style={{ color: '#006874' }}>Ventilador de secado</p>
                        </div>
                    </div>
                </div>
            </div>




        </div>

    )
}
export default Home