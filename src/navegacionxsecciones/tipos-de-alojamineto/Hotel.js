import React from 'react'
//import HeaderHotel from '../../components/secciones/tipos-de-alojamiento/HeaderHotel'
import SearchHotelsComponent from '../../components/Hotel/SearchHotelsComponent'
import FilterComponent from '../../components/Search/FilterComponent'
import ListHotels from '../../components/Search/ListHotels'
import style from '../../styles/Search/SearchHotel.module.scss'

const Hotel = () => {
    
    let d = {
        "Estrellas:":
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

        "Camas:":
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

    let list = 
    [
        {
           name:"Hotel Moderno",
           stars:5,
           location:"Varadero",
           imgUrl:"",
           info:"La mejor comida de la region",
           bad:"Quedan pocos cupos",
           good:"15% de descuento"

        }
    ]

    return <div className={style.containerSearch}>
        <div className={style.aside}>
        <SearchHotelsComponent />
        <div className={style.filterContainer}>
        <h5 className={style.filterTitle}>Filtrar por:</h5>
        <FilterComponent filters={d}/>
            </div>
            </div>
            <div className={style.listHotels}>
                <ListHotels list={list}/>
            </div>
            </div>
       
}

export default Hotel
