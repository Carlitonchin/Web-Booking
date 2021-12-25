import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from "../../pages/Alojamiento/Home"
import RentarCoches from "../../pages/AlquilerCoches/RentarCoches"
import Taxi from "../../pages/TaxiAereopuerto/Taxi"
import AtraccionesTuristicas from "../../pages/AtraccionesTuristicas/AtraccionesTuristicas"
import Fly from "../../pages/Vuelos/Fly"
/*-------------------------------------------------------------------------------------------*/
import House1 from '../../navegacionxsecciones/seccioncasasclientes/house1'
import House2 from '../../navegacionxsecciones/seccioncasasclientes/house2';
import House3 from '../../navegacionxsecciones/seccioncasasclientes/house3';
import House4 from '../../navegacionxsecciones/seccioncasasclientes/house4';
import House5 from '../../navegacionxsecciones/seccioncasasclientes/house5';
import House6 from '../../navegacionxsecciones/seccioncasasclientes/house6';
import Page1 from '../../navegacionxsecciones/proximoviaje/page1';
import Page2 from '../../navegacionxsecciones/proximoviaje/page2';
import Page3 from '../../navegacionxsecciones/proximoviaje/page3';
import Page4 from '../../navegacionxsecciones/proximoviaje/page4';
import Page5 from '../../navegacionxsecciones/proximoviaje/page5';
import Hotel from '../../navegacionxsecciones/tipos-de-alojamineto/Hotel';
import SingleHotel from '../../navegacionxsecciones/tipos-de-alojamineto/SingleHotel';

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vuelos" element={<Fly />} />
            <Route path="/coches" element={<RentarCoches />} />
            <Route path="/turismo" element={<AtraccionesTuristicas />} />
            <Route path="/taxi" element={<Taxi/>}/>
            <Route path="/house1" element={<House1/>}/>
            <Route path="/house2" element={<House2/>}/>
            <Route path="/house3" element={<House3/>}/>
            <Route path="/house4" element={<House4/>}/>
            <Route path="/house5" element={<House5/>}/>
            <Route path="/house6" element={<House6/>}/>
            <Route path="/page1" element={<Page1/>}/>
            <Route path="/page2" element={<Page2/>}/>
            <Route path="/page3" element={<Page3/>}/>
            <Route path="/page4" element={<Page4/>}/>
            <Route path="/page5" element={<Page5/>}/>
            <Route path="/maqueta" element={<House1/>}/>
            <Route path="/buscar" element={<Hotel/>}/>
            <Route path="/buscar/hotel" element={<SingleHotel/>}/>
          </Routes>
    )
}

export default Routing
