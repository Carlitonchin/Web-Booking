import React, {useState} from 'react'

import '../styles/Aside/aside.scss'
import { Container, Row, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Aside = () => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <>
            <aside className="as1">
                <div class="container">
                    <div class="row">
                        <div class="col align-self-start">
                            <p class="h5">Buscar</p>
                        </div>
                    </div>
                </div>
                <div className="form">
                    <label for="exampleForm2">
                        <p class="h6" style={{ fontSize: "0.9rem" }}>
                            Destino/Nombre del alojamiento:
                        </p>{" "}
                    </label>

                    <input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        style={{ height: "40px" }}
                    />

                    <label for="exampleForm2">
                        <p class="h6" style={{ fontSize: "0.9rem" }}>
                            Fecha de Entrada:
                        </p>{" "}
                    </label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                    />
                    <label for="exampleForm2">
                        <p class="h6" style={{ fontSize: "0.9rem" }}>
                            Fecha de Salida:
                        </p>{" "}
                    </label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                    />
                    <br />
                    <br />
                    <select
                        class="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                    >
                        <option selected>
                            {" "}
                            1 adulto · 0 niños · 1 habitación{" "}
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <br />
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                            Casas y apartamentos enteros
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                        />
                        <label class="form-check-label" for="flexCheckChecked">
                            Viajo por trabajo
                        </label>
                    </div>
                    <div className="boton">
                        <button type="button" class="btn btn-primary">
                            Buscar
                        </button>
                    </div>
                </div>
            </aside>
            <aside className="as2">
                <div className="s1">
                    <p class="h6" style={{ fontWeight: 'bold' }}>Filtrar por:</p>
                </div>
                <div className="s2">
                    <p class="h6" style={{ fontWeight: 'bold' }}>Salud y seguridad:</p>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Alojamientos que toman medidas de salud y seguridad
                            <span class="badge rounded-pill bg-light text-dark">1136</span>
                        </label>
                    </div>
                </div>
                <div className="s3">
                    <p class="h6" style={{ fontWeight: 'bold' }}>Filtros Populares:</p>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Hoteles
                            <span class="badge rounded-pill bg-light text-dark">421</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Hostales y Pensiones
                            <span class="badge rounded-pill bg-light text-dark">172</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Menos de 1 km
                            <span class="badge rounded-pill bg-light text-dark">378</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Bed and breakfasts
                            <span class="badge rounded-pill bg-light text-dark">31</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Habitaciones en casas particulares
                            <span class="badge rounded-pill bg-light text-dark">8</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Barcos
                            <span class="badge rounded-pill bg-light text-dark">1136</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            ALbergues
                            <span class="badge rounded-pill bg-light text-dark">29</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Sagrada Familia
                            <span class="badge rounded-pill bg-light text-dark">83</span>
                        </label>
                    </div>
                </div>
                <div className="s4">
                    <p class="h6" style={{ fontWeight: 'bold' }}>Sostenibilidad:</p>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Alojamientos del programa Viajes sostenibles
                            <span class="badge rounded-pill bg-light text-dark">33</span>
                        </label>
                    </div>
                </div>
                <div className="s5">
                    <p class="h6" style={{ fontWeight: 'bold' }}>Estrellas:</p>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            2 estrellas
                            <span class="badge rounded-pill bg-light text-dark">33</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            3 estrellas
                            <span class="badge rounded-pill bg-light text-dark">33</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            4 estrellas
                            <span class="badge rounded-pill bg-light text-dark">33</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            5 estrellas
                            <span class="badge rounded-pill bg-light text-dark">33</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Otros
                            <span class="badge rounded-pill bg-light text-dark">33</span>
                        </label>
                    </div>
                </div>
                <div className="s6">
                    <p class="h6" style={{ fontWeight: 'bold' }}>Dsitancia desde el centro de Barcelona:</p>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Menos de 1 km
                            <span class="badge rounded-pill bg-light text-dark">477</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Menos de 3 km
                            <span class="badge rounded-pill bg-light text-dark">1564</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Menos de 5 km
                            <span class="badge rounded-pill bg-light text-dark">1768</span>
                        </label>
                    </div>
                </div>
                <div className="s7">
                    <p class="h6" style={{ fontWeight: 'bold' }}>Para pasarlo bien:</p>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Playa
                            <span class="badge rounded-pill bg-light text-dark">149</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Tours a pie
                            <span class="badge rounded-pill bg-light text-dark">88</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Alquiler de bicicletas de pago
                            <span class="badge rounded-pill bg-light text-dark">85</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Tours en bici
                            <span class="badge rounded-pill bg-light text-dark">79</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Solarium
                            <span class="badge rounded-pill bg-light text-dark">55</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Masajes
                            <span class="badge rounded-pill bg-light text-dark">32</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Bañera de hidromasaje/jacuzzi
                            <span class="badge rounded-pill bg-light text-dark">23</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Baño al aire libre
                            <span class="badge rounded-pill bg-light text-dark">6</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Masaje en pareja
                            <span class="badge rounded-pill bg-light text-dark">6</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Spa y centro de binestar
                            <span class="badge rounded-pill bg-light text-dark">4</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Zona de spa / relajacion
                            <span class="badge rounded-pill bg-light text-dark">4</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Zona privada de playa
                            <span class="badge rounded-pill bg-light text-dark">3</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Paquetes de spa / bienestar
                            <span class="badge rounded-pill bg-light text-dark">3</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Hamman
                            <span class="badge rounded-pill bg-light text-dark">1</span>
                        </label>
                    </div>
                </div>
                <div className="s8">
                    <p class="h6" style={{ fontWeight: 'bold' }}>Acceso a la playa:</p>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Primera linea de playa
                            <span class="badge rounded-pill bg-light text-dark">50</span>
                        </label>
                    </div>
                </div>
                <div className="s9">
                    <p class="h6" style={{ fontWeight: 'bold' }}>Tipo de Alojamineto:</p>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Apartamentos
                            <span class="badge rounded-pill bg-light text-dark">33</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Hoteles
                            <span class="badge rounded-pill bg-light text-dark">421</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Hostales y Pensiones
                            <span class="badge rounded-pill bg-light text-dark">172</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Albergues
                            <span class="badge rounded-pill bg-light text-dark">83</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Bed and breakfasts
                            <span class="badge rounded-pill bg-light text-dark">31</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Barcos
                            <span class="badge rounded-pill bg-light text-dark">29</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Casas y chalets
                            <span class="badge rounded-pill bg-light text-dark">22</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Villas
                            <span class="badge rounded-pill bg-light text-dark">13</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Habitaciones en casas particulares
                            <span class="badge rounded-pill bg-light text-dark">8</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Casas rurales
                            <span class="badge rounded-pill bg-light text-dark">33</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Chalets de montaña
                            <span class="badge rounded-pill bg-light text-dark">2</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Love hotels
                            <span class="badge rounded-pill bg-light text-dark">1</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Ryokans

                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Agroturismos

                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Campings resort

                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Campings

                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Apartahoteles

                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Tented camps

                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Riads

                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Apartamentos en condominio

                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Cabañas y casas de campo

                        </label>
                    </div>

                </div>
                <div className="s10">
                    <p class="h6" style={{ fontWeight: 'bold' }}>Lugares de interes</p>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Sagrada Familia
                            <span class="badge rounded-pill bg-light text-dark">305</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Montjuïc
                            <span class="badge rounded-pill bg-light text-dark">83</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Parque Güell
                            <span class="badge rounded-pill bg-light text-dark">45</span>
                        </label>
                    </div>
                </div>
                <div className="s11">
                    <p class="h6" style={{ fontWeight: 'bold' }}>Puntuacion</p>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Fantástico: 9 o más
                            <span class="badge rounded-pill bg-light text-dark">9</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Muy bien: 8 o más
                            <span class="badge rounded-pill bg-light text-dark">32</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Bien: 7 o más
                            <span class="badge rounded-pill bg-light text-dark">50</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Agradable: 6 o más
                            <span class="badge rounded-pill bg-light text-dark">53</span>
                        </label>
                    </div>
                </div>
                <div className="s12">
                    <p class="h6" style={{ fontWeight: 'bold' }}>Puntuacion</p>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Parking
                            <span class="badge rounded-pill bg-light text-dark">24</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Restaurante
                            <span class="badge rounded-pill bg-light text-dark">1</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Admite mascotas
                            <span class="badge rounded-pill bg-light text-dark">16</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Servicio de habitaciones
                            <span class="badge rounded-pill bg-light text-dark">3</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Recepción 24 horas
                            <span class="badge rounded-pill bg-light text-dark">7</span>
                        </label>
                    </div>
                </div>
                <div className="s13">
                    <p class="h6" style={{ fontWeight: 'bold' }}>Servicios de la Habitacion:</p>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Cocina
                            <span class="badge rounded-pill bg-light text-dark">77</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Baño privado
                            <span class="badge rounded-pill bg-light text-dark">71</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Aire acondicionado
                            <span class="badge rounded-pill bg-light text-dark">74</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Escritorio
                            <span class="badge rounded-pill bg-light text-dark">24</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Bañera
                            <span class="badge rounded-pill bg-light text-dark">14</span>
                        </label>
                    </div>
                </div>
                <div className="s14">
                    <p class="h6" style={{ fontWeight: 'bold' }}>Barrio</p>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Zona favorita de los clientes
                            <span class="badge rounded-pill bg-light text-dark">82</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Mejores zonas fuera del centro
                            <span class="badge rounded-pill bg-light text-dark">82</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Sants-Montjuïc
                            <span class="badge rounded-pill bg-light text-dark">65</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Poble Sec
                            <span class="badge rounded-pill bg-light text-dark">61</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Eixample
                            <span class="badge rounded-pill bg-light text-dark">18</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Sant Antoni
                            <span class="badge rounded-pill bg-light text-dark">18</span>
                        </label>
                    </div>
                </div>
                <div className="s15">
                    <p class="h6" style={{ fontWeight: 'bold' }}>Adaptado personas de movilidad reducida</p>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Adaptado para sillas de ruedas
                            <span class="badge rounded-pill bg-light text-dark">2</span>
                        </label>
                    </div>
                </div>
                <div className="s16">
                    <p class="h6" style={{ fontWeight: 'bold' }}>Accesibilidad de la habitación</p>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Toda la unidad en la planta baja
                            <span class="badge rounded-pill bg-light text-dark">6</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Acceso a pisos superiores en ascensor
                            <span class="badge rounded-pill bg-light text-dark">28</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Toda la unidad accesible en silla de ruedas
                            <span class="badge rounded-pill bg-light text-dark">5</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            WC con barras de apoyo
                            <span class="badge rounded-pill bg-light text-dark">2</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Bañera adaptada
                            <span class="badge rounded-pill bg-light text-dark">1</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Ducha adaptada para sillas de ruedas
                            <span class="badge rounded-pill bg-light text-dark">1</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Ducha a ras de suelo
                            <span class="badge rounded-pill bg-light text-dark">7</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            WC elevado
                            <span class="badge rounded-pill bg-light text-dark">1</span>
                        </label>
                    </div>
                    <div class="form-check" style={{ marginLeft: '10px' }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Silla para ducha
                            <span class="badge rounded-pill bg-light text-dark">2</span>
                        </label>
                    </div>
                </div>
            </aside>

        </>
    )
}

export default Aside
