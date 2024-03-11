import React from 'react'

const Grid = ({ text, imgSrc, imgAlt }) => {
    return (
        <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
            <div className='row d-flex justify-content-center'>
                <img src={imgSrc} alt={imgAlt} className="img-fluid " style={{ width: '150px', height: '150px' }} />
            </div>
            <div className='row'>
                <p style={{ color: 'black' }} className='fs-3 fw-bold py-5'>{text}</p>
            </div>
        </div>
    )
}
export default Grid