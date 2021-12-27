import style from '../../styles/Search/SearchHotel.module.scss'
import InputComponent from '../Search/InputComponent'
import DateComponent from '../Search/DateComponent'
import PeopleRoomsComponent from '../Search/PeopleRoomsComponent'
import BlueButton from '../Utils/BlueButton'
import { useState } from 'react'

export default ({startDate, setStartDate, endDate, setEndDate, adults, setAdults, rooms, setRooms, childs, setChilds})=>
{
   
    
    // ................. Handles State ...........................
    function handleAdults(factor)
    {
        if(adults === 1 && factor === -1)
            return;

        setAdults(adults + 1*factor);
    }

    function handleChilds(factor)
    {
        if(childs === 0 && factor === -1)
            return;

        setChilds(childs + 1*factor);
    }

    function handleRooms(factor)
    {
        if(rooms === 1 && factor === -1)
            return;

        setRooms(rooms + 1*factor);
    }

    function handleDate(set, date)
    {
        let newDateArray = date.split('-').map(e=>Number(e));
        console.log(newDateArray[2], newDateArray[1], newDateArray[0])
        set(new Date(newDateArray[0], newDateArray[1] - 1, newDateArray[2]))
    }

    function handleStartDate(event)
    {
        event.preventDefault()
        return handleDate(setStartDate, event.target.value);
    }

    function handleEndDate(event)
    {
        event.preventDefault()
        return handleDate(setEndDate, event.target.value);
    }

    //.................. End Hanldes state .................................


    //......... View Returned ..............................
    return <div className={style.container}>
        <h2>Buscar</h2>

        {/*Input destino*/}
        <label for="destino">
            <p className={"h7 " + style.labelFor}>
              Destino/Nombre del alojamiento:
            </p>{" "}
        </label>
        <InputComponent placeholder = "Ejemplo: Lima"/>
        {/*................................................*/}

        {/*................. dates section ...................*/}
        {/*start date*/}
        <label for="startDate">
            <p className={"h7 " + style.labelFor}>
                Fecha de Entrada:
            </p>{" "}
         </label>
        
          <DateComponent
            date={startDate}
            handleChange={handleStartDate}
            />

            {/*end date*/}
        <label for="endDate">
            <p className={"h7 " + style.labelFor}>
                Fecha de Salida:
            </p>{" "}
         </label>
        
          <DateComponent
            date={endDate}
            handleChange={handleEndDate}
            />
    {/*................... end dates section ............................*/}
        <PeopleRoomsComponent
            adults={adults}
            handleAdults = {handleAdults}
            childs = {childs}
            handleChilds = {handleChilds}
            rooms = {rooms}
            handleRooms = {handleRooms}
         />
         <div className={style.containerBlueButton}>
        <BlueButton text="Buscar"/>
        </div>
    </div>
}