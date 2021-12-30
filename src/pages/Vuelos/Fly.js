import style from '../../styles/Vuelos/Fly.module.scss';
import SearchFlyComponent from '../../components/Vuelos/SearchFlyComponent';
import {getDateFromString, getStringFromDate} from '../../components/Utils/Functions/dateManager';
import {useState} from 'react'
import styleFromRentCar from '../../styles/AlquilerCoches/rentCar.module.scss'
import BlueButton from '../../components/Utils/BlueButton';
import styleFromAT from '../../styles/AtraccionesTuristicas/AT.module.scss'
import TabContinents from '../AtraccionesTuristicas/TabContinents';

import { Container, Row, Col, Accordion } from 'react-bootstrap';
let img1 = '/favicon.ico'
let continent=
    {
      "Europa":[{text:"De Lima a Madrid", img:"/img/unnamed.jpg", toDo:"10 horas de vuelo promedio"},{text:"De Lima a Lisboa", img:"/img/unnamed.jpg", toDo:"9.5 horas de horas de vuelo"},{text:"Europa", img:"/img/unnamed.jpg", toDo:"10 cosas para hacer"},{text:"Europa", img:"/img/unnamed.jpg", toDo:"10 cosas para hacer"},{text:"Europa", img:"/img/unnamed.jpg", toDo:"10 cosas para hacer"},{text:"Europa", img:"/img/unnamed.jpg", toDo:"10 cosas para hacer"},{text:"Europa", img:"/img/unnamed.jpg", toDo:"10 cosas para hacer"},{text:"Europa", img:"/img/unnamed.jpg", toDo:"10 cosas para hacer"},{text:"Europa", img:"/img/unnamed.jpg", toDo:"10 cosas para hacer"},{text:"Europa", img:"/img/unnamed.jpg", toDo:"10 cosas para hacer"},{text:"Europa", img:"/img/unnamed.jpg", toDo:"10 cosas para hacer"},{text:"Europa", img:"/img/unnamed.jpg", toDo:"10 cosas para hacer"},{text:"Europa", img:"/img/unnamed.jpg", toDo:"10 cosas para hacer"}],
      "America":[{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"}],
      "Asia":[{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"}],
      "Africa":[{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"}],
      "Australia":[{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg"}]
    };
export default ()=>
{

  const [firstPlace, setFirstPlace] = useState("");
  const [targetPlace, setTargetPlace] = useState("");
  const [goAndReturn, setGoAndReturn] = useState(false);
  const [since, setSince] = useState(new Date());
  const [to, setTo] = useState(new Date());
  const [count, setCount] = useState(1)
  function handleCount(e)
  {
    let value = e.target.value;
    if(value === '0')
      return;
console.log(value)
    setCount(value)
  }

  let linkTo=`/vuelos/buscar?salidaDesde=${firstPlace}&destino=${targetPlace}&idaVuelta=${goAndReturn}&fechaSalida=${getStringFromDate(since)}&fechaRetorno=${getStringFromDate(to)}&cantPasajeros=${count}`;
  function handleFirstPlace(e)
  {
      setFirstPlace(e.target.value);
  }

  
  function handleTargetPlace(e)
  {
      setTargetPlace(e.target.value);
  }

  function handleGoAndReturn(value)
  {
    setGoAndReturn(value);
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

  //let linkTo = `/coches/buscar?recogida=${placeRent}&entrega=${placeReturn}&desde=${getStringFromDate(since)}&hasta=${getStringFromDate(to)}&devolverEnElMismoLugar=${returnAtSamePlace}`;

  return <div className={style.container}>
  <div className={styleFromRentCar.title}>
  <h1>A donde quieres viajar</h1>
  <h5>Encuentra los mejores vuelos</h5>
  </div>

  <div className={styleFromRentCar.containerHeader}>
  <SearchFlyComponent
  handleGoAndReturn={handleGoAndReturn}
  firstPlace={firstPlace}
  goAndReturn={goAndReturn}
  handleFirstPlace={handleFirstPlace}
  handleSince={handleSince}
  handleTargetPlace={handleTargetPlace}
  handleTo={handleTo}
  since={since}
  targetPlace={targetPlace}
  to={to}
  count = {count}
  handleCount={handleCount}
  />

<div style={{marginTop:'1rem', width:'100%'}}>
      <a href={linkTo}>
        <BlueButton text="Buscar"/>
        </a>
        </div>
  </div>

  <h5 className={style.marginTop}>Que ofrecemos</h5>
  <div className={styleFromAT.containerGood}>
          
          <div className={styleFromAT.good}>
          <div className={styleFromAT.imag} style={{backgroundImage:`url(${img1})`}}></div>
            
            <div className={styleFromAT.headerGood}>
              <h6>Amplia variedad de opciones</h6>
              <p className={styleFromAT.textGood}>
              Compara miles de vuelos facilmente en una sola pagina
            </p>
            </div>
           
          </div>
        

        
          <div className={styleFromAT.good}>
          <div className={styleFromAT.imag} style={{backgroundImage:`url(${img1})`}}></div>
            <div className={styleFromAT.headerGood}>
              <h6>Sin cargos ocultos</h6>
              <p className={styleFromAT.textGood}>
              Sabras exactamente que estas pagando
            </p>
            </div>
           
          </div>
        

        
          <div className={styleFromAT.good}>
          <div className={styleFromAT.imag} style={{backgroundImage:`url(${img1})`}}></div>
            <div className={styleFromAT.headerGood}>
              
              <h6>Mas flexibilidad</h6>
              <p className={styleFromAT.textGood}>
                Con las opciones de billetes flexibles puedes modificar tus fechas de viaje si lo necesitas
            </p>
            </div>
            
          </div>
        
        

      </div>

      <h5 className={style.marginTop}>Preguntas frecuentes</h5>
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

      <h5 className={style.marginTop}>Vuelos populares para cualquier lugar del mundo</h5>
      <TabContinents data={continent}/>
    
  </div>
}
