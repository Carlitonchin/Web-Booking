import React from 'react'
//import HeaderHotel from '../../components/secciones/tipos-de-alojamiento/HeaderHotel'
import SearchHotelsComponent from '../../components/Hotel/SearchHotelsComponent'
import FilterComponent from '../../components/Search/FilterComponent'
import ListHotels from '../../components/Search/ListHotels'
import style from '../../styles/Search/SearchHotel.module.scss'
import { useState } from 'react'
import {d, list} from './testingForHotels.js'

const Hotel = () => {
    
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [adults, setAdults] = useState(1);
    const [rooms, setRooms] = useState(1);
    const [childs, setChilds] = useState(0);

    return <div className={style.containerSearch}>
        <div className={style.aside}>
        <SearchHotelsComponent 
        adults={adults}
        childs={childs}
        endDate={endDate}
        rooms = {rooms}
        setAdults={setAdults}
        setChilds={setChilds}
        setEndDate={setEndDate}
        setRooms={setRooms}
        setStartDate={setStartDate}
        startDate={startDate}
        />
        <div className={style.filterContainer}>
        <h5 className={style.filterTitle}>Filtrar por:</h5>
        <FilterComponent filters={d}/>
            </div>
            </div>
            <div className={style.listHotels}>
                <ListHotels 
                list={list}
                />
            </div>
            </div>
       
}

export default Hotel
