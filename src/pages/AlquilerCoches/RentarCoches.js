import React, { useState } from 'react'
import Layout from '../../layout/Layout'
import HeaderCoches from '../../components/RentarCoches/HeaderCoches'
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import styleFromTour from '../../styles/AtraccionesTuristicas/AT.module.scss'
import ImageCarousel from '../../components/Utils/ImageCarousel';
import style from '../../styles/AlquilerCoches/rentCar.module.scss'
import {getStringFromDate, getDateFromString} from '../../components/Utils/Functions/dateManager';
import BlueButton from '../../components/Utils/BlueButton';

const empresas = [
  {
    imgUrl: "/img/cancun.jpg",

  },
  {
    imgUrl: "/img/playa.jpg",
  },
  {
    imgUrl: "/img/cook.jpg",
  },
  {
    imgUrl: "/img/España.jpg",
  },
  {
    imgUrl: "/img/unnamed.jpg",
  }
];

const destinos = [
  {
    imgUrl: "/img/cancun.jpg",
    link: "hotel",
    type: `Londres`,
    toDo: "50 lugares distintos de recogida"
  },
  {
    imgUrl: "/img/playa.jpg",
    link: "",
    type: "Los Angeles",
    toDo: "50 lugares distintos de recogida"
  },
  {
    imgUrl: "/img/cook.jpg",
    link: "house1",
    type: "Buenos Aires",
    toDo: "50 lugares distintos de recogida"
  },
  {
    imgUrl: "/img/España.jpg",
    link: "",
    type: "Barcelona",
    toDo: "50 lugares distintos de recogida"
  },
  {
    imgUrl: "/img/unnamed.jpg",
    link: "",
    type: "New York",
    toDo: "50 lugares distintos de recogida"
  }
];

const RentarCoches = () => {

  const [placeRent, setPlaceRent] = useState("");
  const [placeReturn, setPlaceReturn] = useState("");
  const [returnAtSamePlace, setReturnAtSamePlace] = useState(true);
  const [since, setSince] = useState(new Date());
  const [to, setTo] = useState(new Date());

  function handlePlaceRent(e)
  {
      setPlaceRent(e.target.value);
  }

  function handlePlaceReturn(e)
  {
      setPlaceReturn(e.target.value);
  }

  function handleReturnAtSamePlace(value)
  {
    setReturnAtSamePlace(value);
  }

  function handleSince(e) {
    e.preventDefault()
    setSince(getDateFromString(e.target.value))
  }

  function handleTo(e)
  {
    
    e.preventDefault()
    setTo(getDateFromString(e.target.value))
  }

  let linkTo = `/coches/buscar?recogida=${placeRent}&entrega=${placeReturn}&desde=${getStringFromDate(since)}&hasta=${getStringFromDate(to)}&devolverEnElMismoLugar=${returnAtSamePlace}`;
  return (
    <div>
            <div className={style.title}>
      <h1>Renta de autos</h1>
      <h5>Recorre los mejores sitios con los mejores automoviles</h5>
      </div>
      <div className={style.containerHeader}>
  
        <HeaderCoches 
        handlePlaceRent={handlePlaceRent}
        handlePlaceReturn={handlePlaceReturn}
        handleReturnAtSamePlace={handleReturnAtSamePlace}
        placeRent={placeRent}
        placeReturn={placeReturn}
        returnAtSamePlace={returnAtSamePlace}
        handleSince={handleSince}
        handleTo={handleTo}
        since={since}
        to={to}
        />
        
      <div style={{marginTop:'1rem', width:'100%'}}>
      <a href={linkTo}>
        <BlueButton text="Buscar"/>
        </a>
        </div>
      </div>


      <div className={styleFromTour.containerInfo}>
        <h4 className={styleFromTour.top}>Empresas populares de alquiler de coches</h4>
        <ImageCarousel list={empresas} />
        <h4 className={styleFromTour.top}>
          Destinos populares para alquiler de coches
        </h4>
        <ImageCarousel list={destinos} />
        <h4 className={styleFromTour.top}>Preguntas frecuentes</h4>

        <Row>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  ¿Que es necesario para alquilar un coche?
                </Accordion.Header>
                <Accordion.Body>
                  Cuando alquilas un coche, tan solo necesitas una tarjeta de
                  crédito o débito. En el mostrador de la empresa de alquiler,
                  necesitarás: Tu pasaporte El vale de confirmación El permiso
                  para conducir de cada uno de los conductores La tarjeta de
                  crédito del conductor principal (algunas empresas de
                  alquiler también aceptan tarjetas de débito, aunque la
                  mayoría no) Importante: Debes leer las condiciones del
                  alquiler del coche, ya que cada empresa tiene sus propias
                  normas. ¿A qué nos referimos? Puede ser que te pidan algún
                  otro documento de identidad o que no acepten algunos tipos
                  de tarjeta de crédito. También es posible que para alquilar
                  el coche sea necesario que el conductor tenga el permiso de
                  conducir al menos desde hace 36 meses.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  ¿Soy lo suficientemente mayor para ALquilar un coche?
                </Accordion.Header>
                <Accordion.Body>
                  La mayoría de las empresas de alquiler te alquilará un coche
                  si tienes al menos 21 años (y algunas pueden ofrecer
                  alquiler a conductores aún más jóvenes). Sin embargo, si
                  tienes menos de 25 años, es posible que tengas que pagar una
                  tasa por conductor joven.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  ¿Se puede alquilar un coche para otra persona?
                </Accordion.Header>
                <Accordion.Body>
                  Por supuesto, solo tienes que poner sus datos en el
                  formulario "Datos del conductor" cuando hagas la reserva.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  ¿Que deberia tener en cuenta al elegir un coche?
                </Accordion.Header>
                <Accordion.Body>
                  Piensa en el destino del viaje. Un SUV puede ser la opción
                  ideal para circular por una autopista de Texas, pero con un
                  coche pequeño es más fácil moverse por Roma. Descubre qué
                  opinan otras personas. En nuestra página tienes un montón de
                  comentarios y valoraciones para saber qué les ha gustado (o
                  no) a los clientes de cada empresa de alquiler. ¡No te
                  olvides del embrague! En algunos países, casi todo el mundo
                  conduce un coche manual. En cambio, hay otros en los que lo
                  normal son los vehículos automáticos. Asegúrate de alquilar
                  uno que sepas conducir.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  ¿El precio del Alquiler incluye todos los cargos?
                </Accordion.Header>
                <Accordion.Body>
                  El precio que ves incluye el coche, la cobertura obligatoria
                  (p. ej., cobertura en caso de robo y cobertura parcial por
                  colisión) y otros cargos que, si se aplican, suelen pagarse
                  durante la recogida (p. ej., tasa por devolución en otra
                  oficina, recargos aeroportuarios e impuestos locales).
                  También incluye cualquier extra que ya hayas añadido (p.
                  ej., GPS o silla de bebé). No incluye ninguna cobertura
                  adicional que adquieras directamente en el mostrador de la
                  empresa de alquiler. Consejo: Verás un desglose del precio
                  completo en la página de pago.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default RentarCoches
