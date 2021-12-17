import React from 'react'
import '../../../styles/secciones/casasckientes/CardSection.scss'
const CardSection = ({url,calificacion,comentario,titulo,subtitulo,descripcion}) => {
    return (
        <div className="container">
            <div className="course">
                <div className="preview" style={{backgroundImage: `url(${url})` }}>
                    
                </div>
                <div className="info">
                    <div className="progress-wrapper">

                        <p class="h4">{calificacion}</p>
                        <p class="h6" style={{ marginTop: '-8px', fontSize: '0.7rem', color: '#b9b9b9' }}>{comentario}</p>

                    </div>
                    <h6>{titulo}</h6>
                    <h6>{subtitulo}</h6>
                    <p className="-trunc">{descripcion}</p>
                    <button className="btn">Mas precios</button>
                </div>
            </div>
        </div>
    )
}

export default CardSection 
