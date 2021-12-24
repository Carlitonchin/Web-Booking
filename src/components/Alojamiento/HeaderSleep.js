import React from 'react'
import classes from "../../styles/Alojamineto/Sleep.module.scss"
import SearchBar from '../Search/SearchBar'

const HeaderSleep = () => {
    return <>
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
       <div className={classes.containerSearch}>
         
         <div>
         <h4>Donde quieres hospedarte</h4>
         <p>Encuentra los mejores alojamientos alrededor del mundo</p>
         </div>
         <div className={classes.containerSearchBar}>
       <SearchBar placeholder="Paises, ciudades, hoteles"/>
       </div>
       
     </div>
    </>
}

export default HeaderSleep
