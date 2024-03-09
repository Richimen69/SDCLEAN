import React from 'react';

const Services = ({ imagenSrc, imagenAlt, titulo, descripcion }) => {
  const estiloJustificado = {
    textAlign: 'justify'
  }

  return (
    <div className="col-12 col-md-3 col-lg-3">
      <div className='row g-0'>
        <div className='col-3 p-1'>
          <img src={imagenSrc} alt={imagenAlt} className="img-fluid" />
        </div>
        <div className='col-9'>
          <p className="fw-bold my-0 mx-2" style={{ color: '#55909B' }}>{titulo}</p>
          <p className='text-justify mx-2'>{descripcion}</p>
        </div>
      </div>
    </div>

  )
}

export default Services
