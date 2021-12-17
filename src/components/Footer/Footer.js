import React from 'react'
import  "../../styles/Footer/SFooter.scss"
//import img from "../../images/indice.png"

const Footer = () => {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/*----------col 1------------*/}
            <div className="col">
              <h4>Versión para móvil </h4>
              <ul className="list-unstyled">
                <li>Paises</li>
                <li>Ciudades</li>
                <li>Regiones</li>
                <li>Zonas</li>
              </ul>
            </div>
            {/*----------col 2------------*/}
            <div className="col">
              <h4>Gestiona tus reservas online</h4>
              <ul className="list-unstyled">
                <li>Casas</li>
                <li>Apartamentos</li>
                <li>Resorts </li>
                <li>Villas</li>
              </ul>
            </div>
            {/*----------col 3------------*/}
            <div className="col">
              <h4>Atencion al Cliente</h4>
              <ul className="list-unstyled">
                <li>Alojaminetos unicos</li>
                <li>Todos los destinos</li>
                <li>Descubrir</li>
                <li>Opiniones</li>
              </ul>
            </div>
            {/*----------col 4------------*/}
            <div className="col">
              <h4>Conviertete en Afiliado</h4>
              <ul className="list-unstyled">
                <li>Alquiler de Coches</li>
                <li>Buscar Vuelos</li>
                <li>Reservas en restaurantes</li>
                <li>Booking para agentes de viajes</li>
              </ul>
            </div>
            {/*----------col 4------------*/}
            <div className="col">
              <h4>Booking</h4>
              <ul className="list-unstyled">
                <li>FAQ Covid-19</li>
                <li>Sobre Booking</li>
                <li>Centro de prensa</li>
                <li>Carrers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer
