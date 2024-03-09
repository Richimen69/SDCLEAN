import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Cotizar = () => {
    return (
        <div>
            <div className="position-relative text-center">
                <img src="/src/assets/cotizar/cotizar.png" className="d-block w-100" height="500" alt="s" />
                <div className="position-absolute top-50 start-50 translate-middle" style={{ color: '#FFFFFF' }}>
                    <h1 className="fw-bold">COTIZACIÓN</h1>
                </div>
            </div>
            <div style={{ color: '#F0F5FF' }}>
                <div className='my-5  text-center'>
                    <div>
                        <h1 className='fw-bold' style={{ color: '#55909B' }}>Formas de pago</h1>
                    </div>
                </div>
                <div className='container fw-bold' style={{ color: 'black' }}>
                    <div className='row col-md-12 col-sm-10 text-center'>
                        <div className='col'>
                            <div className='h-50'>
                                <div className='p-5'>
                                    <img src="/src/assets/cotizar/pago.svg" alt="pago" className="img-fluid w-50" />
                                </div>
                            </div>
                            <p className='py-5 fs-3'>PAGO EN EFECTIVO</p>
                        </div>
                        <div className='col'>
                            <div className='h-50'>
                                <div className='p-5'>
                                    <img src="/src/assets/cotizar/tarjeta.svg" alt="pago" className="img-fluid w-50" />
                                </div>
                            </div>
                            <p className='py-5 fs-3'>PAGO CON TARJETA</p>
                        </div>
                        <div className='col'>
                            <div className='h-50'>
                                <div className='p-5'>
                                    <img src="/src/assets/cotizar/transfer.svg" alt="pago" className="img-fluid w-50" />
                                </div>
                            </div>
                            <p className='py-5 fs-3'>TRANSFERENCIA ELECTRÓNICA</p>
                        </div>
                    </div>
                </div>
                <div className='my-5  text-center'>
                    <div>
                        <h1 className='fw-bold' style={{ color: '#55909B' }}>Horario de servicio</h1>
                    </div>
                </div>
                <div className='container fw-bold' style={{ color: 'black' }}>
                    <div className='row col-md-12 col-sm-10 text-center'>
                        <div className='col'>
                            <div className='h-50'>
                                <div className='p-5'>
                                    <img src="/src/assets/cotizar/calendar.svg" alt="calendar" className="img-fluid w-50" />
                                </div>
                            </div>
                            <p className='py-5 fs-3'>Lunes a Viernes de 9 am a 6 pm</p>
                        </div>
                        <div className='col'>
                            <div className='h-50'>
                                <div className='p-5'>
                                    <img src="/src/assets/cotizar/calendarweek.svg" alt="calendar" className="img-fluid w-50" />
                                </div>
                            </div>
                            <p className='py-5 fs-3'>Sábado 9 am a 6 pm</p>
                        </div>
                        <div className='col'>
                            <div className='h-50'>
                                <div className='p-5'>
                                    <img src="/src/assets/cotizar/dayclose.svg" alt="calendar" className="img-fluid w-50" />
                                </div>
                            </div>
                            <p className='py-5 fs-3'>Domingo cerrado</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='justify-content-center p-5'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1909.0614366041596!2d-99.87025558354749!3d16.869815212387547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca57dcbf41194f%3A0x4376f8ed7579180!2sCLEAN%20Muebles%20%26%20Carros!5e0!3m2!1ses-419!2smx!4v1709969373903!5m2!1ses-419!2smx"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    width="100%"
                    height="600"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}
export default Cotizar