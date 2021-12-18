import React from 'react'
//import HeaderHotel from '../../components/secciones/tipos-de-alojamiento/HeaderHotel'
import SearchHotelsComponent from '../../components/Hotel/SearchHotelsComponent'
import FilterComponent from '../../components/Search/FilterComponent'
import ListHotels from '../../components/Search/ListHotels'
import style from '../../styles/Search/SearchHotel.module.scss'
import {d, list} from './testingForHotels.js'

const Hotel = () => {
    
   

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
