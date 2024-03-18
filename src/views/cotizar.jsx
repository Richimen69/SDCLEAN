import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import Grid from '../components/cotizar/Grid'
import Img from '../components/Img'

const Cotizar = () => {

    return (
        <div>
            <div>
                <Img
                    imgA="cotizacion"
                    imgS="/src/assets/cotizar/cotizar.png"
                    txt="COTIZACIÓN"
                />
            </div>
            <div className='container' style={{ color: '#F0F5FF' }}>
                <div className='my-5  text-center'>
                    <div>
                        <h1 className='fw-bold' style={{ color: '#55909B' }}>Formas de pago</h1>
                    </div>
                </div>
                <div className='container'>
                    <div className='row text-center '>
                        <Grid
                            imgSrc="/src/assets/cotizar/pago.svg"
                            imgAlt="pago"
                            text="PAGO EN EFECTIVO"
                        />
                        <Grid
                            imgSrc="/src/assets/cotizar/tarjeta.svg"
                            imgAlt="pago"
                            text="PAGO CON TARJETA"
                        />
                        <Grid
                            imgSrc="/src/assets/cotizar/transfer.svg"
                            imgAlt="pago"
                            text="TRANSFERENCIA ELECTRÓNICA"
                        />
                    </div>
                </div>
                <div className='my-5  text-center'>
                    <div>
                        <h1 className='fw-bold' style={{ color: '#55909B' }}>Horario de servicio</h1>
                    </div>
                </div>

                <div className='container'>
                    <div className='row text-center '>
                        <Grid
                            imgSrc="/src/assets/cotizar/calendar.svg"
                            imgAlt="calendar"
                            text="Lunes a Viernes de 9 am a 6 pm"
                        />
                        <Grid
                            imgSrc="/src/assets/cotizar/calendarweek.svg"
                            imgAlt="calendar"
                            text="Sábado 9 am a 6 pm"
                        />
                        <Grid
                            imgSrc="/src/assets/cotizar/dayclose.svg"
                            imgAlt="calendar"
                            text="Domingo cerrado"
                        />
                    </div>
                </div>
            </div>
            <div className='justify-content-center text-center p-5'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1909.0614366041596!2d-99.87025558354749!3d16.869815212387547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca57dcbf41194f%3A0x4376f8ed7579180!2sCLEAN%20Muebles%20%26%20Carros!5e0!3m2!1ses-419!2smx!4v1709969373903!5m2!1ses-419!2smx"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    width="80%"
                    height="500"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}
export default Cotizar