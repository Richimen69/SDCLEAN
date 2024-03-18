import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useMediaQuery } from 'react-responsive'

const Img = ({imgS, imgA, txt}) => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });

    const imgStyle = {
        height: isSmallScreen ? '250px' : '500px', // Cambia la altura aquí para pantallas pequeñas
    }
    return (
        <div className="position-relative text-center">
            <img
                src={imgS}
                className="d-block w-100"
                style={imgStyle}
                alt={imgA}
            />
            <div className="position-absolute top-50 start-50 translate-middle" style={{ color: '#FFFFFF' }}>
                <h1 className="fw-bold">{txt}</h1>
            </div>
        </div>
    )
}
export default Img