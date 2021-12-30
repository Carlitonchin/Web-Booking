import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from "../../pages/Alojamiento/Home"
import RentarCoches from "../../pages/AlquilerCoches/RentarCoches"
import Taxi from "../../pages/TaxiAereopuerto/Taxi"
import AtraccionesTuristicas from "../../pages/AtraccionesTuristicas/AtraccionesTuristicas"
import Fly from "../../pages/Vuelos/Fly"
/*-------------------------------------------------------------------------------------------*/

import Hotel from '../../navegacionxsecciones/tipos-de-alojamineto/Hotel';
import SingleHotel from '../../navegacionxsecciones/tipos-de-alojamineto/SingleHotel';
import SearchTurism from '../../pages/AtraccionesTuristicas/SearchTurism';
import SingleTour from '../../pages/AtraccionesTuristicas/SingleTour';
import Payment from '../Utils/Payment';
import SearchCar from '../../pages/AlquilerCoches/SearchCar';
import SingleCar from '../../pages/AlquilerCoches/SingleCar';
import SearchFly from '../../pages/Vuelos/SearchFly';


const Routing = () => {
    return (
        <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/vuelos" element={<Fly />} />
            <Route path="/vuelos/buscar" element={<SearchFly />} />
            <Route path="/coches" element={<RentarCoches />} />
            <Route path="/turismo" element={<AtraccionesTuristicas />} />
            <Route path="/taxi" element={<Taxi/>}/>
            <Route path="/buscar" element={<Hotel/>}/>
            <Route path="/hotel" element={<SingleHotel/>}/>
            <Route path="/turismo/buscar" element={<SearchTurism/>}/>
            <Route path="/turismo/tour" element={<SingleTour/>}/>
            <Route path="/pagar" element={<Payment />}/>
            <Route path="/coches/buscar" element={<SearchCar />}/>
            <Route path="/coches/coche" element={<SingleCar />}/>

          </Routes>
    )
}

export default Routing
