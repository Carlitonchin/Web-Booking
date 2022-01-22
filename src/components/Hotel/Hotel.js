import React from 'react'
//import HeaderHotel from '../../components/secciones/tipos-de-alojamiento/HeaderHotel'
import SearchHotelsComponent from '../../components/Hotel/SearchHotelsComponent'
import FilterComponent from '../../components/Search/FilterComponent'
import ListHotels from '../../components/Search/ListHotels'
import style from '../../styles/Search/SearchHotel.module.scss'
import { useState } from 'react'
import {d, list} from '../Hotel/testingForHotels'
import { useLocation } from 'react-router'
import styleHide from '../../styles/Search/hideFilterHotel.module.scss'
import styleFromSearch from '../../styles/Search/SearchHotel.module.scss'

const Hotel = () => {
    let { search } = useLocation()
    let query = new URLSearchParams(search);

    let s = query.get("search");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [adults, setAdults] = useState(1);
    const [rooms, setRooms] = useState(1);
    const [childs, setChilds] = useState(0);
    const [value, setValue] = useState(s);
    const [showFilters, setShowFilters] = useState(false)

    function handleFilters()
    {
        setShowFilters(!showFilters);
    }

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
        value={value}
        setValue={setValue}
        showFilters={showFilters}
        handleFilters={handleFilters}
        />
        <p 
        onClick={handleFilters}
        className={styleFromSearch.showFiltersMessage + " text-primary"}>{showFilters?"Ocultar Filtros":"Mostrar Filtros"}</p>
        <div className={style.filterContainer}>
        <h5 className={style.filterTitle + " " + (!showFilters?style.hide:+"")}>Filtrar por:</h5>
        <div className={style.containerFilters + " " +(!showFilters?style.hide:"")}>
        <FilterComponent 
        filters={d}
        handleFilters={handleFilters}
        styleHide={styleHide}
        />
        </div>
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
