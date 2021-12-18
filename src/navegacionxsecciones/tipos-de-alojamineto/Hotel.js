import React from 'react'
//import HeaderHotel from '../../components/secciones/tipos-de-alojamiento/HeaderHotel'
import SearchHotelsComponent from '../../components/Hotel/SearchHotelsComponent'
import FilterComponent from '../../components/Search/FilterComponent'
import style from '../../styles/Search/SearchHotel.module.scss'

const Hotel = () => {
    
    let d = {
        "estrellas":
        {
            "1 estrella":{
                "count":100,
                "boolean":false
            },
            "2 estrellas":{
                "count":20,
                "boolean":false
            },
        }
        ,

        "camas":
        {
            "1 cama":{
                "count":5,
                "boolean":false
            },
            "2 camas":{
                "count":10,
                "boolean":false
            },
        }
    
    }

    return <div className={style.aside}>
        <SearchHotelsComponent />
        <div className={style.filterContainer}>
        <h5 className={style.filterTitle}>Filtrar por:</h5>
        <FilterComponent filters={d}/>
            </div>
            </div>
       
}

export default Hotel
