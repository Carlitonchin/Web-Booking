import React from 'react'
import classes from "../../styles/Alojamineto/Sleep.module.scss"

const HeaderSleep = () => {
    return (
      <div className={classes.cabecera}>
        <div className={classes.cabecera_banner}>
          <div className={classes.cabecera_banner_titulo}>
            <h3>Las ofertas terminan YA</h3>
            <h1>Este Black Friday, <br /> ahorra también en viajes</h1>
            <p>
              -30% en estancias por todo el mundo. ¡Haz un viaje para
              recordar!
            </p>
            <button>Ver Ofertas Black Friday</button>
          </div>
        </div>
      </div>
    )
}

export default HeaderSleep
