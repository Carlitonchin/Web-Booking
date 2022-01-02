import React from 'react'
import classes from "../../styles/Alojamineto/Sleep.module.scss"
import SearchBar from '../Search/SearchBar'
import Header from '../Search/Header'
import { useState } from 'react'

const HeaderSleep = () => {

  const [value, setValue] = useState("");
    return <>
      <Header h1="Donde quieres hospedarte"
              h5="Encuentra los mejores alojamientos alrededor del mundo" 
              placeholder="Paises, ciudades, hoteles y mucho mas"
              value={value}
              setValue={setValue}
              linkTo={`/buscar?search=${value}`}
              />
      <div className={classes.cabecera} style={{backgroundImage:'url(img/reserva.jpg)'}}>
       
       
      </div>
      
    </>
}

export default HeaderSleep
